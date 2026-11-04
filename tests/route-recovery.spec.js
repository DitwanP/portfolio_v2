import { test, expect } from "@playwright/test"

test("unknown routes show a 404 and recover through the home link", async ({ page }) => {
  const errors = []
  page.on("pageerror", (error) => errors.push(error.message))
  await page.goto("/does-not-exist/nested")
  await expect(page.getByRole("heading", { name: "404 - Page not found" })).toBeVisible()
  await page.reload()
  await expect(page.getByRole("heading", { name: "404 - Page not found" })).toBeVisible()
  await page.getByRole("button", { name: "theme", exact: true }).click()
  await page.getByRole("button", { name: /grape/ }).click()
  await expect(page.locator(".app")).toHaveAttribute("theme", "grape")
  await page.keyboard.press("Escape")
  await page.getByRole("link", { name: "Return home" }).click()
  await expect(page).toHaveURL("/")
  await expect(page.locator(".home-content")).toBeVisible()
  expect(errors).toEqual([])
})

for (const failure of ["render", "load"]) {
  test(`route ${failure} failure shows recovery without breaking the shell`, async ({ page, isMobile }) => {
    const loggedErrors = []
    page.on("console", (message) => {
      if (message.type() === "error") loggedErrors.push(message.text())
    })
    const chunk = /\/assets\/Projects-[^/]+\.js$/
    await page.route(chunk, async (route) => {
      await route.fulfill({
        contentType: "application/javascript",
        body: failure === "render"
          ? 'export default function BrokenPage() { throw new Error("Injected route render failure") }'
          : 'throw new Error("Injected route load failure")',
      })
    })
    await page.goto("/projects")
    await expect(page.getByRole("alert")).toContainText("Something went wrong")
    await expect(page.getByRole("button", { name: "Reload page" })).toBeVisible()
    await expect.poll(() => loggedErrors.some(
      (message) => message.includes("Route failed to render:") && message.includes(`Injected route ${failure} failure`),
    )).toBe(true)
    await page.getByRole("button", { name: "theme", exact: true }).click()
    await page.getByRole("button", { name: /grape/ }).click()
    await expect(page.locator(".app")).toHaveAttribute("theme", "grape")
    await page.keyboard.press("Escape")
    if (failure === "render") {
      await page.getByRole("link", { name: "Return home" }).click()
      await expect(page.locator(".home-content")).toBeVisible()
      if (isMobile) await page.getByRole("button", { name: "primary-navigation" }).click()
      await page.locator(`${isMobile ? ".nav-list-mobile" : ".nav-list"} a[href="/contact"]`).click()
      await expect(page.locator(".contact-content")).toBeVisible()
    } else {
      await page.unroute(chunk)
      await page.getByRole("button", { name: "Reload page" }).click()
      await expect(page.locator(".projects-content")).toBeVisible()
      await expect(page.getByRole("alert")).toHaveCount(0)
    }
  })
}

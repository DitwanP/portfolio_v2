import { test, expect } from "@playwright/test"

for (const failure of ["access", "read", "write"]) {
  test(`themes remain usable when storage ${failure} fails`, async ({ page, isMobile }) => {
    const errors = []
    const warnings = []
    page.on("pageerror", (error) => errors.push(error.message))
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text())
      if (message.type() === "warning") warnings.push(message.text())
    })
    await page.addInitScript((failure) => {
      if (failure === "access") {
        Object.defineProperty(window, "localStorage", {
          get() {
            throw new DOMException("Storage access blocked", "SecurityError")
          },
        })
      } else {
        Storage.prototype[failure === "read" ? "getItem" : "setItem"] = () => {
          throw new DOMException(
            "Injected storage failure",
            failure === "read" ? "SecurityError" : "QuotaExceededError",
          )
        }
      }
    }, failure)

    await page.goto("/")
    await expect(page.locator(".home-content")).toBeVisible()
    const warning = failure === "write" ? "Unable to save the theme" : "Unable to read the saved theme"
    await expect.poll(() => warnings.some((message) => message.includes(warning))).toBe(true)

    await page.getByRole("button", { name: "theme", exact: true }).click()
    for (const theme of [
      { name: "grape", background: "rgb(34, 18, 35)", meta: "#221223" },
      { name: "ryujin", background: "rgb(8, 20, 38)", meta: "#081426" },
    ]) {
      await page.getByRole("button", { name: new RegExp(theme.name) }).click()
      await expect(page.locator(".app")).toHaveAttribute("theme", theme.name)
      await expect(page.locator("body")).toHaveAttribute("theme", theme.name)
      await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute("content", theme.meta)
      await expect(page.locator(".page-container")).toHaveCSS("background-color", theme.background)
    }
    await page.keyboard.press("Escape")
    if (isMobile) await page.getByRole("button", { name: "primary-navigation" }).click()
    await page.locator(`${isMobile ? ".nav-list-mobile" : ".nav-list"} a[href="/contact"]`).click()
    await expect(page.locator(".contact-content")).toBeVisible()
    await expect(page.locator(".app")).toHaveAttribute("theme", "ryujin")
    await page.reload()
    await expect(page.locator(".contact-content")).toBeVisible()
    expect(errors).toEqual([])
  })
}

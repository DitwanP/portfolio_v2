import { test, expect } from "@playwright/test"

async function expectUnobstructed(locator) {
  const hits = await locator.evaluate((element) => {
    const rect = element.getBoundingClientRect()
    return [0.1, 0.5, 0.9].flatMap((x) =>
      [0.1, 0.5, 0.9].map((y) => {
        const hit = document.elementFromPoint(rect.left + rect.width * x, rect.top + rect.height * y)
        return element.contains(hit)
      }),
    )
  })
  expect(hits.every(Boolean), "Page content must not cover the theme controls or panel").toBe(true)
}

for (const reducedMotion of ["reduce", "no-preference"]) {
  test.describe(reducedMotion, () => {
    test.use({ reducedMotion })

    test("theme panel paints above content and remains clickable across widths", async ({ page, isMobile }) => {
      for (const width of isMobile ? [390, 650, 850] : [900, 1440]) {
        await page.setViewportSize({ width, height: 800 })
        await page.goto("/projects")
        await expect(page.locator(".page-container")).not.toHaveClass(/page-animating/)
        await expect(page.locator(".footer-container")).toHaveCSS("opacity", "1")
        const toggle = page.getByRole("button", { name: "theme", exact: true })
        if (width <= 850) {
          const bounds = await toggle.boundingBox()
          expect(bounds.x).toBeGreaterThanOrEqual(width - 40)
          expect(bounds.x + bounds.width).toBeLessThanOrEqual(width - 8)
        }
        await expectUnobstructed(toggle)
        await toggle.click()
        const surface = page.locator("#theme-options .theme-list")
        const options = page.locator("#theme-options button")
        await expect(options.first()).toBeFocused()
        for (const theme of ["grape", "dracula"]) {
          await expectUnobstructed(surface)
          expect(await surface.evaluate((element) => getComputedStyle(element).backgroundColor)).toMatch(/^rgb\(/)
          await page.getByRole("button", { name: new RegExp(theme) }).click()
          await expect(page.locator(".app")).toHaveAttribute("theme", theme)
        }
        await expectUnobstructed(surface)
        await toggle.click()
        await expect(toggle).toHaveAttribute("aria-expanded", "false")
        await expect(surface).toBeHidden()
        await page.locator(".page-container").evaluate((element) => { element.scrollTop = 500 })
        await expectUnobstructed(toggle)
        await toggle.click()
        await expect(options.first()).toBeFocused()
        await expectUnobstructed(surface)
        await page.keyboard.press("Escape")
        if (width <= 850) {
          await page.getByRole("button", { name: "primary-navigation" }).click()
          await expect(page.locator(".nav-list-mobile a").first()).toBeFocused()
          await expectUnobstructed(page.locator(".nav-list-mobile a").last())
        }
      }
    })
  })
}

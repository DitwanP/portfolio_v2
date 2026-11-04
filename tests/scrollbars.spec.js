import { test, expect } from "@playwright/test"

for (const reducedMotion of ["no-preference", "reduce"]) {
  test.describe(reducedMotion, () => {
    test.use({ reducedMotion })

    test("scrollbars wait for entrances and long pages remain scrollable", async ({ page }) => {
      for (const path of ["/", "/work-and-skills", "/projects", "/contact"]) {
        await page.goto(path)
        const container = page.locator(".page-container")
        await expect(container).toHaveCSS("overflow-y", "auto")
        if (reducedMotion === "no-preference") {
          await expect(container).toHaveClass(/page-animating/)
          await expect(container).toHaveCSS("scrollbar-width", "none")
        }
        await expect(container).not.toHaveClass(/page-animating/)
        await expect(container).toHaveCSS("scrollbar-width", "thin")
        if (path === "/projects") {
          expect(await container.evaluate((element) => element.scrollHeight > element.clientHeight)).toBe(true)
          await container.hover()
          await page.mouse.wheel(0, 500)
          await expect.poll(() => container.evaluate((element) => element.scrollTop)).toBeGreaterThan(0)
        }
      }
    })
  })
}

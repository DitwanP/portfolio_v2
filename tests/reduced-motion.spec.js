import { test, expect } from "@playwright/test"

test.use({ reducedMotion: "reduce" })

async function expectImmediateRest(locator) {
  const samples = await locator.evaluate(async (element) => {
    const samples = []
    for (let frame = 0; frame < 12; frame++) {
      await new Promise(requestAnimationFrame)
      const style = getComputedStyle(element)
      samples.push({ opacity: style.opacity, transform: style.transform })
    }
    return samples
  })
  for (const sample of samples) {
    expect(sample.opacity).toBe("1")
    expect(["none", "matrix(1, 0, 0, 1, 0, 0)"]).toContain(sample.transform)
  }
}

test("reduced motion removes entrance delays and hover scaling on every page", async ({ page, isMobile }) => {
  const errors = []
  page.on("pageerror", (error) => errors.push(error.message))
  for (const [path, selector] of [
    ["/", ".resume-button"],
    ["/work-and-skills", ".skills"],
    ["/projects", ".projects-list"],
    ["/contact", ".email-button"],
  ]) {
    await page.goto(path)
    await expectImmediateRest(page.locator(selector))
    await expectImmediateRest(page.locator(".footer-container"))
    await expect(page.locator(selector)).toHaveCSS("transition-duration", "0s")
  }
  if (!isMobile) {
    const contact = page.locator(".email-button a")
    await contact.hover()
    await expectImmediateRest(contact)
  }
  expect(errors).toEqual([])
})

test("reduced motion preserves disclosure visibility, keyboard focus and theme selection", async ({ page, isMobile }) => {
  await page.goto("/")
  const toggle = page.getByRole("button", { name: "theme", exact: true })
  await toggle.focus()
  await page.keyboard.press("Enter")
  const options = page.locator("#theme-options button")
  await expect(options.first()).toBeFocused()
  await expectImmediateRest(page.locator("#theme-options"))
  await page.keyboard.press("ArrowDown")
  await expect(options.nth(1)).toBeFocused()
  await page.keyboard.press("Enter")
  await expect(page.locator(".app")).toHaveAttribute("theme", "froyo-dark")
  await page.keyboard.press("Escape")
  await expect(toggle).toBeFocused()
  await expect(page.locator("#theme-options")).toBeHidden()
  if (isMobile) {
    const navToggle = page.getByRole("button", { name: "primary-navigation" })
    await navToggle.focus()
    await page.keyboard.press("Enter")
    await expect(page.locator(".nav-list-mobile a").first()).toBeFocused()
    await expectImmediateRest(page.locator("#mobile-navigation"))
    await page.keyboard.press("Escape")
    await expect(navToggle).toBeFocused()
    await expect(page.locator("#mobile-navigation")).toHaveAttribute("inert", "")
  }
})

test.describe("standard motion", () => {
  test.use({ reducedMotion: "no-preference" })

  test("entrance animations remain enabled without a reduced-motion preference", async ({ page }) => {
    await page.goto("/")
    const animated = await page.locator(".name").evaluate(async (element) => {
      for (let frame = 0; frame < 90; frame++) {
        await new Promise(requestAnimationFrame)
        const style = getComputedStyle(element)
        if (Number(style.opacity) > 0 && Number(style.opacity) < 1 && style.transform !== "none") {
          return true
        }
      }
      return false
    })
    expect(animated).toBe(true)
  })
})

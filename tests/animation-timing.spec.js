import { test, expect } from "@playwright/test"

test.use({ reducedMotion: "no-preference" })

test("page entrances use short travel and finish as an overlapping sequence", async ({ page }) => {
  for (const [path, content] of [
    ["/", ".home-content"],
    ["/work-and-skills", ".exp-content"],
    ["/projects", ".projects-content"],
    ["/contact", ".contact-content"],
  ]) {
    await page.goto(path)
    const result = await page.locator(content).evaluate(async (element) => {
      const container = element.closest(".page-container")
      const started = performance.now()
      const samples = []
      while (performance.now() - started < 1500) {
        await new Promise(requestAnimationFrame)
        const elements = [element, ...element.querySelectorAll('[style*="opacity"]')]
        samples.push(elements.map((node) => {
          const style = getComputedStyle(node)
          return {
            y: new DOMMatrixReadOnly(style.transform).m42,
            opacity: Number(style.opacity),
          }
        }))
        if (!container.classList.contains("page-animating")) break
      }
      return {
        elapsed: performance.now() - started,
        complete: !container.classList.contains("page-animating"),
        samples: samples.flat(),
      }
    })
    expect(result.complete).toBe(true)
    expect(result.elapsed).toBeGreaterThan(400)
    expect(result.elapsed).toBeLessThan(1400)
    expect(result.samples.some(({ opacity }) => opacity > 0 && opacity < 1)).toBe(true)
    expect(Math.max(...result.samples.map(({ y }) => Math.abs(y)))).toBeLessThanOrEqual(20.1)
  }
})

test("menus settle smoothly and mobile navigation uses its own width", async ({ page, isMobile }) => {
  await page.goto("/")
  await expect(page.locator(".footer-container")).toHaveCSS("opacity", "1")
  const toggle = page.getByRole("button", { name: "theme", exact: true })
  await toggle.click()
  const panelSamples = await page.locator("#theme-options").evaluate(async (panel) => {
    const samples = []
    for (let frame = 0; frame < 24; frame++) {
      await new Promise(requestAnimationFrame)
      const surface = panel.querySelector(".theme-list")
      const ancestors = []
      for (let node = surface; node; node = node.parentElement) {
        ancestors.push({ className: node.className, opacity: Number(getComputedStyle(node).opacity) })
      }
      samples.push({
        opacity: ancestors,
        background: getComputedStyle(surface).backgroundColor,
        y: new DOMMatrixReadOnly(getComputedStyle(panel).transform).m42,
      })
    }
    return samples
  })
  for (const sample of panelSamples) {
    expect(sample.opacity.filter(({ opacity }) => opacity !== 1)).toEqual([])
    expect(sample.background).toMatch(/^rgb\(/)
  }
  expect(panelSamples.at(-1).y).toBe(0)
  await expect(page.locator("#theme-options")).toHaveCSS("opacity", "1", { timeout: 1200 })
  await page.keyboard.press("Escape")
  await expect(page.locator("#theme-options")).toBeHidden({ timeout: 1200 })
  await toggle.click()
  await expect(toggle).toHaveAttribute("aria-expanded", "true")
  await toggle.click()
  await expect(toggle).toHaveAttribute("aria-expanded", "false")
  await toggle.click()
  await expect(page.locator("#theme-options")).toBeVisible()
  await expect(page.locator("#theme-options button").first()).toBeFocused()
  await page.keyboard.press("Escape")

  if (isMobile) {
    const panel = page.locator("#mobile-navigation")
    const navToggle = page.getByRole("button", { name: "primary-navigation" })
    await expect.poll(() => panel.evaluate((element) => {
      const x = new DOMMatrixReadOnly(getComputedStyle(element).transform).m41
      return Math.abs(x - element.getBoundingClientRect().width) < 1
    })).toBe(true)
    await navToggle.click()
    await expect(page.locator(".nav-list-mobile a").first()).toBeFocused({ timeout: 1500 })
    await expect(page.locator(".nav-list-mobile li").first()).toHaveCSS("opacity", "1")
    await page.keyboard.press("Escape")
    await expect(navToggle).toBeFocused()
  } else {
    await page.locator(".firstName").hover()
    await expect.poll(() => page.locator(".firstName").evaluate(
      (element) => new DOMMatrixReadOnly(getComputedStyle(element).transform).m11,
    )).toBeCloseTo(1.1, 2)
  }
})

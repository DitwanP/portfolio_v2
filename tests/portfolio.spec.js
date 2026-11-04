import { test as base, expect } from "@playwright/test"

const test = base.extend({
  browserChecks: [async ({ page }, use) => {
    const errors = []
    page.on("pageerror", (error) => errors.push(error.message))
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text())
    })
    page.on("requestfailed", (request) => errors.push(`Failed request: ${request.url()}`))
    page.on("response", (response) => {
      if (response.status() >= 400) errors.push(`HTTP ${response.status()}: ${response.url()}`)
    })
    await page.addInitScript(() => {
      if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "dracula")
    })
    await use()
    expect(errors, "No browser errors or failed requests").toEqual([])
  }, { auto: true }],
})

const routes = [
  { path: "/", content: ".home-content", heading: "DitWAn" },
  { path: "/work-and-skills", content: ".exp-content", heading: "pRoFessionAl eXpeRience" },
  { path: "/projects", content: ".projects-content", heading: "pRojects" },
  { path: "/contact", content: ".contact-content", heading: "Get in toucH" },
]

const themes = [
  { name: "dracula", background: "rgb(40, 42, 54)", meta: "#282a36" },
  { name: "froyo-dark", background: "rgb(27, 24, 15)", meta: "#1b180f" },
  { name: "future-funk", background: "rgb(46, 26, 71)", meta: "#2e1a47" },
  { name: "grape", background: "rgb(34, 18, 35)", meta: "#221223" },
  { name: "ryujin", background: "rgb(8, 20, 38)", meta: "#081426" },
]

async function expectTheme(page, theme) {
  await expect(page.locator(".app")).toHaveAttribute("theme", theme.name)
  await expect(page.locator("body")).toHaveAttribute("theme", theme.name)
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute("content", theme.meta)
  await expect(page.locator(".page-container")).toHaveCSS("background-color", theme.background)
  await expect.poll(() => page.evaluate(() => localStorage.getItem("theme"))).toBe(theme.name)
}

test("all routes support navigation and direct refresh", async ({ page, isMobile }) => {
  await page.goto("/")
  const expectedLabels = ["01.home", "02.work/skills", "03.projects", "04.contact"]
  for (const selector of [".nav-list", ".nav-list-mobile"]) {
    const links = page.locator(`${selector} a`)
    await expect(links).toHaveText(expectedLabels)
    for (const [index, route] of routes.entries()) {
      await expect(links.nth(index)).toHaveAttribute("href", route.path)
    }
  }
  for (const route of [...routes.slice(1), routes[0]]) {
    if (isMobile) await page.getByRole("button", { name: "primary-navigation" }).click()
    const navigation = page.locator(isMobile ? ".nav-list-mobile" : ".nav-list")
    await navigation.locator(`a[href="${route.path}"]`).click()
    await expect(page).toHaveURL(route.path)
    await expect(page.locator(route.content)).toBeVisible()
    await expect(page.getByRole("heading", { name: route.heading, exact: true })).toBeVisible()
    await expect(page.locator(".page-container")).toHaveCount(1)
    if (isMobile) {
      await expect(page.getByRole("button", { name: "primary-navigation" })).toHaveAttribute("aria-expanded", "false")
      await expect(page.getByRole("button", { name: "primary-navigation" })).toBeFocused()
    }
    await page.reload()
    await expect(page.locator(route.content)).toBeVisible()
  }
})

test("all five themes synchronize and persist after reload", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("button", { name: "theme", exact: true }).click()
  const expectedOptions = themes.map((theme, index) => `0${index + 1}.${theme.name}`)
  const options = page.locator("#theme-options button")
  await expect(options).toHaveText(expectedOptions)
  for (const theme of themes) {
    await page.getByRole("button", { name: new RegExp(theme.name) }).click()
    await expectTheme(page, theme)
    await expect(options).toHaveText(expectedOptions)
    await expect(page.locator(".theme-list")).not.toHaveCSS("background-color", theme.background)
  }
  await page.keyboard.press("Escape")
  await page.goto("/contact")
  await page.reload()
  await expect(page.locator(".contact-content")).toBeVisible()
  await expectTheme(page, themes[4])
})

test("theme picker supports keyboard focus, arrows, selection and Escape", async ({ page }) => {
  await page.goto("/")
  const toggle = page.getByRole("button", { name: "theme", exact: true })
  const panel = page.locator("#theme-options")
  const options = panel.getByRole("button")
  await expect(panel).toHaveAttribute("inert", "")
  for (let attempt = 0; attempt < 20; attempt++) {
    await page.keyboard.press("Tab")
    if (await toggle.evaluate((element) => element === document.activeElement)) break
  }
  await expect(toggle).toBeFocused()
  await page.keyboard.press("Enter")
  await expect(toggle).toHaveAttribute("aria-expanded", "true")
  await expect(options.first()).toBeFocused()
  await page.keyboard.press("ArrowUp")
  await expect(options.last()).toBeFocused()
  await expectTheme(page, themes[0])
  await page.keyboard.press("ArrowDown")
  await expect(options.first()).toBeFocused()
  await page.keyboard.press("Tab")
  await expect(options.nth(1)).toBeFocused()
  await page.keyboard.press("Shift+Tab")
  await expect(options.first()).toBeFocused()
  await page.keyboard.press("ArrowDown")
  await page.keyboard.press("Space")
  await expectTheme(page, themes[1])
  await page.keyboard.press("Escape")
  await expect(toggle).toBeFocused()
  await expect(toggle).toHaveAttribute("aria-expanded", "false")
  await expect(panel).toHaveAttribute("inert", "")
})

test("project assets, resume and contact actions remain usable", async ({ page }) => {
  await page.goto("/")
  const resume = page.getByRole("link", { name: "Resume" })
  const pdf = await page.request.get(await resume.getAttribute("href"))
  expect(pdf.ok()).toBeTruthy()
  expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-")
  await expect(resume.getByRole("img", { name: "PDF icon" })).toHaveCSS("width", "20px")
  await page.goto("/projects")
  await expect(page.locator(".project")).toHaveCount(5)
  await expect(page.locator(".project-link")).toHaveCount(6)
  await expect.poll(() => page.locator(".project-image img").evaluateAll(
    (images) => images.every((image) => image.complete && image.naturalWidth > 0),
  )).toBe(true)
  await page.goto("/contact")
  const contact = page.getByRole("link", { name: "Reach Out" })
  await expect(contact).toHaveAttribute("href", "mailto:price.ditwan@gmail.com")
  await expect(contact.getByRole("img", { name: "Paper plane icon" })).toHaveCSS("width", "22px")
})

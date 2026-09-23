const { test, expect } = require('@playwright/test');


test('end to end test ', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://webdriveruniversity.com/IFrame/index.html");
    console.log(await page.title());

    const iframe = page.frameLocator("#frame");
    await iframe.getByRole("button", { name: 'Find Out More!' }).click();
    await page.waitForTimeout(1000);
    // await iframe.pause();
    await iframe.getByRole("button", { name: 'Close' }).click();
    await iframe.getByRole("link", { name: "Our Products" }).click();
    await iframe.getByText("New Laptops").click();
    await iframe.getByRole("button", { name: 'Proceed' }).click();
    await iframe.getByRole("link", { name: "Contact Us" }).click();
    await iframe.locator("//input[@type='submit']").click();
    // Asserts that the exact text message is visible on the screen
    await expect(iframe.getByText('Error: all fields are required')).toBeVisible();









});
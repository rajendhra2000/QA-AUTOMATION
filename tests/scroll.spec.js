const { test, expect } = require('@playwright/test');


test('end to end test ', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://webdriveruniversity.com/Scrolling/index.html");
    console.log(await page.title());
    await page.locator("#zone1").hover();

    console.log(await page.locator("#zone1").textContent());
    await page.pause();


});
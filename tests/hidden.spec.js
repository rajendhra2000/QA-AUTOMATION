const { test, expect } = require('@playwright/test');


test('end to end test ', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://webdriveruniversity.com/Hidden-Elements/index.html");
    console.log(await page.title());
    await page.locator("#button2").isHidden();
    await expect(page.locator('#visibility-hidden')).toBeHidden();
    await page.locator('#button1').dispatchEvent('click');
    await page.pause();


});

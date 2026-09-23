const { test, expect } = require('@playwright/test');

test('login page', async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    await page.locator("#nav-packard-glow-loc-icon").click();
    await page.locator("//input[@autocomplete='postal-code']").fill("505325");
    await page.locator("#GLUXZipUpdate").click();
    await page.waitForTimeout(2000);
    const searchbox = page.locator("#twotabsearchtextbox").fill("iqoo z11 lite");



    // Wait for Amazon suggestions to appear
    await page.waitForTimeout(2000);

    const itemlist = page.locator(".s-suggestion-ellipsis-direction");

    const itemcount = await itemlist.count();

    console.log("Item count:", itemcount);

    for (let i = 0; i < itemcount; i++) {

        const item = itemlist.nth(i);

        const text = await item.textContent();

        console.log("Suggestion:", text);

        if (text.trim() === "iqoo z11 lite") {

            await item.click();

            break;
        }
    }
    await page.locator("#a-autoid-3").click();
    await page.pause();
});
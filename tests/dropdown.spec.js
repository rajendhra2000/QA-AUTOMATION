const { test, expect } = require('@playwright/test');
test(' my test', async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    await page.locator("#twotabsearchtextbox").pressSequentially("iphone", {
        delay: 100

    });

    const drop = await page.locator(".s-suggestion.s-suggestion-ellipsis-direction").count();

    for (let i = 0; i < drop; i++) {

        const down = await page.locator(".s-suggestion.s-suggestion-ellipsis-direction").nth(i);

        if (await down.textContent() === "iphone 16 pro 256gb") {

            await down.click();
            break;
        }

    }

    const lmn = await page.locator("//div[@id='-title']").textContent();
    console.log(lmn);



});
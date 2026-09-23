const { test, expect } = require('@playwright/test');

exports.basetes = test.extend({

    loginpage1: async ({ page }, use) => {

        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());

        await use(page);
    },
    cartpage: async ({ loginpage1 }, use) => {
        const page = loginpage1;
        const itemlist = page.locator(".inventory_item_name");
        const itemcount = await itemlist.count();

        for (let i = 0; i < itemcount; i++) {
            const curentitem = itemlist.nth(i);
            const text = await curentitem.textContent();

            if (text.trim() === "Sauce Labs Backpack") {
                await curentitem.click();
                break;
            }
        };
        await page.locator("#add-to-cart").click();
        await page.locator(".shopping_cart_link").click();
        await page.locator("#checkout").click();
        await page.locator("#continue").click();
        await expect(page.locator(".error-message-container.error")).toContainText("Error: First Name is required");
        await page.locator("#first-name").fill("Prasad");
        await page.locator("#last-name").fill("Aher");
        await page.locator("#postal-code").fill("413221");
        await page.locator("#continue").click();
        await use(page);
    }

});
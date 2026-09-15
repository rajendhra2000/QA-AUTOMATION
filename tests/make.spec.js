const {test, expect} = require('@playwright/test');
//const { title } = require('node:process');

test ('my first code', async ({browser})=>
{

    const context= await browser.newContext();
    const page= await context.newPage();
    const url = await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder("Search Amazon.in").fill("iphone");
    await page.locator("#nav-search-submit-button").click();
    const item =await page.getByText("iPhone 17 Pro Max 256 GB: 17.42 cm (6.9″) Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fusion Camera System, Center Stage Front Camera; Silver");
    //console.log(item);
   const [page2]=await Promise.all([
    context.waitForEvent('page'),
    // await page.getByText("iPhone 17 Pro Max 256 GB: 17.42 cm (6.9″) Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fusion Camera System, Center Stage Front Camera; Silver").click()
    item.click(),
   ])

   //await item.click();
   await page2.locator(`xpath=//a[text()=' Add to Wish List ']`).click();
   // await page.locator("#a-autoid-2-announce").click();
    // await page2.pause();
    

    await page.locator(`xpath=//td[text()='Maria Anders']/ancestor::table[@id='contactList']/descendant::td[text()='Francisco Chang']`)
    

});
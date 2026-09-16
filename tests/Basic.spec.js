const { test, expect } = require('@playwright/test');
//const { title } = require('node:process');

test(' my first code', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const url = await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //await expect (page).toHaveTitle("Google")
    await page.locator("#username").fill("rahulshettyacadem");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    //await page.locator("[style*='block']").textContent();
    await expect(page.locator("[style*='block']")).toContainText("Incor");
    //demo checking for code in it



});

test('my third code', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const Username = page.locator("#username");

    const Signin = page.locator("#signInBtn");

    const url = await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const Cardtitle = page.locator(".card-body");
    console.log(await page.title());
    //await expect (page).toHaveTitle("Google")
    await Username.fill("rahulshettyacadem");
    await page.locator("#password").fill("Learning@830$3mK2");
    await Signin.click();
    console.log(await page.locator("[style*='block']").textContent());
    //await page.locator("[style*='block']").textContent();
    await expect(page.locator("[style*='block']")).toContainText("Incor");

    //await Username.fill("");
    await Username.fill("rahulshettyacademy");
    await Signin.click();
    await Cardtitle.first().waitFor();
    console.log(await Cardtitle.allTextContents());

    await Cardtitle.first().click();



});



test('my ui button', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const url = await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("Learning@830$3mK2");

    await page.locator("[value*='user']").check();
    await page.locator("#okayBtn").click();
    const Dropdown = await page.locator("select.form-control");
    await Dropdown.selectOption("consult");
    await page.locator("#terms").click();
    await expect(page.locator("[value*='user']")).toBeChecked();
    await expect(page.locator("#terms")).toBeChecked;
    await page.locator("#terms").uncheck();
    const url_1 = page.locator("[href*='hire.com']");
    await expect(url_1).toHaveAttribute("class", "blinkingText");
    //await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#signInBtn").click();
    await page.pause();

});

test('my second code', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const username = await page.locator("#username")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentlink = page.locator("[href*='documents-request']");
    //await expect (documentlink).toHaveAttribute("class","blinkingText");
    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        documentlink.click(),
    ])
    //await newpage.waitForLoadState();
    console.log(await newpage.title());
    const text = await newpage.locator(".red").textContent();
    const array = text.split("@");
    const domain = array[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
    // await page.pause();
    //await expect( page.locator("#userMobile") .locator("xpath=..").toHaveText("*Phone Number is required");
});
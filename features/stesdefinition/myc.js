

const { When, Given, Then, setDefaultTimeout } = require('@cucumber/cucumber');

const { test, expect, chromium } = require('@playwright/test');
//const { Before, After } = require('@cucumber/cucumber');
const { pagemanager } = require('../../pageobject/pomanager');
setDefaultTimeout(60 * 1000);



Given('the login crdentials {string} and {string}', async function (username, password) {
    this.email = username;


    this.pomanager = new pagemanager(this.page);

    const log = this.pomanager.getlogin();
    await log.url();
    await log.login(username, password);


});

When('we add the {string} to cart', async function (string) {

    await this.page.waitForLoadState('networkidle');
    const dash = this.pomanager.getdashboard();
    await dash.dashpage();

});

Then('the order is placed successfully', async function () {

    const chk = this.pomanager.getcheckout();
    await chk.checkpage(this.email);
});




Given('the login my crdentials {string} and {string}', async function (username, password) {

    //const context = await browser.newContext();
    // this.page = await context.newPage();
    const url = await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());
    //await expect (page).toHaveTitle("Google")
    await this.page.locator("#username").fill(username);
    await this.page.locator("#password").fill(password);
    await this.page.locator("#signInBtn").click();

});

Then('order is failed', async function () {

    console.log(await this.page.locator("[style*='block']").textContent());

    await expect(this.page.locator("[style*='block']")).toContainText("Incor");


});
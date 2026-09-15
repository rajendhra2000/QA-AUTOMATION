const { test, expect, chromium } = require('@playwright/test');

const { pagemanager } = require('../../pageobject/pomanager');
const { Before, After, AfterStep, Status } = require('@cucumber/cucumber');


Before(async function () {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();

});

After({ tags: "@regression" }, async function () {

    console.log("my last step is completed");

});

AfterStep(async function ({ result }) {

    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot1.png' });
    }

});

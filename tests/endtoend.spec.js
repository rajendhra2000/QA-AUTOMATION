const { test, expect } = require('@playwright/test');
const { todoo } = require('../pageobject/todo');
const { mybuttons } = require('../pageobject/buttons');
const { ppooo } = require('../pageobject/ponewproject');

test('end to end test ', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://webdriveruniversity.com/index.html");
    console.log(await page.title());
    const [fileUploadPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText("FILE UPLOAD").click(),
    ]);
    await fileUploadPage.locator("#myFile").setInputFiles("C:/Users/USER/Downloads/command.txt");
    await fileUploadPage.locator("#submit-button").click();
    await fileUploadPage.pause();

    //to do 
    const my = page.getByText("TO DO LIST");
    const [page1] = await Promise.all([
        context.waitForEvent('page'),
        my.click(),
    ]);
    const pageom = new ppooo(page1);
    const log = pageom.gettodo();
    await log.todopage();



    //buttons

    const but = await page.getByText("BUTTON CLICKS");
    const [page2] = await Promise.all([
        context.waitForEvent('page'),
        but.click(),
    ]);
    const pageman = new ppooo(page2);
    const bet = pageman.getbutton();
    await bet.mybuttonpom();

    //dropdown 
    const dro = await page.locator("//h1[text()='DROPDOWNS, CHECKBOXES & RADIOS']");
    const [page3] = await Promise.all([
        context.waitForEvent('page'),
        dro.click(),
    ]);

    const dddrrr = new ppooo(page3);
    const downn = dddrrr.getdropdown();
    await downn.dropexct();

    //reload page
    const reload = await page.locator("#ajax-loader");
    const [page4] = await Promise.all([
        context.waitForEvent('page'),
        reload.click(),
    ]);
    await page4.waitForTimeout(1000);

    const rezz = new ppooo(page4);
    const red = rezz.getreload();
    await red.relll();

    await page.pause();





});
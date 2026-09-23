const { test, expect } = require('@playwright/test');


test('end to end test ', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://webdriveruniversity.com/index.html");
    console.log(await page.title());
    const date = await page.getByText("DATEPICKER")
    const [page1] = await Promise.all([
        context.waitForEvent('page'),
        date.click(),
    ]);

    await page1.waitForLoadState();

    // 1. Open the datepicker popup
    await page1.locator(".glyphicon-calendar").click();

    // 2. Click the switch in the days view to navigate to months view
    // await page1.locator(".datepicker-days .datepicker-switch").click();
    await page1.locator("//div[@class='datepicker-days']//th[@class='datepicker-switch']").click();
    // 3. Select a month (e.g., Oct)
    //await page1.locator(".datepicker-months .month").filter({ hasText: 'Oct' }).click();

    // ✅ CORRECT: Scopes inside the div, then clicks the precise span element
    await page1.locator("//div[@class='datepicker-months']//th[@class='datepicker-switch']").click();
    //await page1.locator("//div[@class='datepicker-years']//span[text()='2005']").click();
    const targetYear = 1991;
    const targetmonth = "Oct";
    const targetday = 29;
    // Current range is 2020-2029
    // 2035 is in 2030-2039
    // So click NEXT once

    //for (let i = 0; i < 2; i++) {
    //await page1.locator("//div[@class='datepicker-years']//th[@class='prev']").click();
    // }
    let clicks;
    let button;

    if (targetYear < 2020) {
        clicks = Math.ceil((2020 - targetYear) / 10);
        button = "//div[@class='datepicker-years']//th[@class='prev']";
    }
    else if (targetYear > 2029) {
        clicks = Math.ceil((targetYear - 2029) / 10);
        button = "//div[@class='datepicker-years']//th[@class='next']";
    }

    for (let i = 0; i < clicks; i++) {
        await page1.locator(button).click();
    }
    // Click 2035
    await page1.locator(`//div[@class='datepicker-years']//span[text()='${targetYear}']`).click();
    await page1.locator(`//div[@class='datepicker-months']//span[text()='${targetmonth}']`).click();

    // 4. Select a day (e.g., 15)
    //await page1.locator(".datepicker-days td.day:not(.old):not(.new)").filter({ hasText: /^15$/ }).click();
    await page1.locator(`//div[@class='datepicker-days']//td[text()='${targetday}'][not(contains(@class, 'old'))]`).click();
    // Verify the input has the selected date
    const dateInput = page1.locator('#datepicker input');
    console.log("Selected Date:", await dateInput.inputValue());
    await expect(dateInput).toHaveValue(/10-29-/);





});
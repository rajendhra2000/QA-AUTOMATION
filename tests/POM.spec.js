const { test, expect } = require('@playwright/test');
//const { loginpage } = require('../pageobject/loginpage');
//const { dashboard } = require('../pageobject/dashboard');
const { checkout } = require('../pageobject/checkout');
const dataset = JSON.parse(JSON.stringify(require('../utils/data.json')));
const { pagemanager } = require("../pageobject/pomanager")

//test.describe.configure({ mode: "parallel" });

for (const data of dataset) {
    test(`first case for ${data.email} `, async ({ page }) => {




        const pomanager = new pagemanager(page);

        //const log = new loginpage(page);

        const log = pomanager.getlogin();
        await log.url();
        await log.login(data.email, data.password);


        await page.waitForLoadState('networkidle');

        //const dash = new dashboard(page);
        const dash = pomanager.getdashboard();
        await dash.dashpage();

        //const chk = new checkout(page);
        const chk = pomanager.getcheckout();
        await chk.checkpage(data.email);



        //await expect(page.getByText('ADIDAS ORIGINAL')).toContainText("ADID");

        //const order=await page.locator("tbody tr").filter({hasText: "6a89817521054ba465e91298"}).textContent();
        //console.log(order);

        //await page.locator("tbody tr").filter({hasText: "6a89817521054ba465e91298"}).getByRole("button",{name: "View"}).click();
        //const mess= await page.locator(".col-text.-main");
        //await expect(mess).toContainText("6a89817521054ba465e91298");
        //await page.pause();


        //await page.getByText("ZARA COAT 3").click();






        //await expect(page.getByText("Password must be at least 8 characters")).toBeVisible();
        //await page.getByRole('button', { name: 'Login' }).click();


    });
}
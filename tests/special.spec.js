const {test , expect} = require ('@playwright/test');
test ('my test', async ({page}) => 
    {

await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").check();

//await page.getByLabel("Gender").selectOption("Female");
await page.locator("[for*='exampleFormControlSelect1']").selectOption("Female");
await page.locator("#exampleInputPassword1").fill("fuck");
await page.getByRole("button",{name: "Submit"}).click();
const my= await page.locator(".alert.alert-success.alert-dismissible").isVisible();
console.log(my);
//await page.locator("[href*='/angularpractice/shop']").click();
await page.getByRole("link", {name: "Shop"}).click();
//await page.waitForLoadState();
await page.locator("app-card").filter({hasText: "Samsung Note 8"}).getByRole("button" ,{name: "Add"}).click();
//await page.locator("nav-link btn btn-primary").click();
await page.pause();
});

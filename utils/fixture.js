const base = require('@playwright/test');

exports.customtest= base.test.extend(
    {
loginpage: async({browser,page}, use)=>{

const url= await page.goto("https://rahulshettyacademy.com/client/");
 const usermail="pra946787@gmail.com";
   await page.locator("#userEmail").fill(usermail);
   await page.locator("#userPassword").fill("Prasad@123");
  //await page.locator("#login").click();  
  await page.getByRole('button' , {name: 'login'}).click();
  await page.waitForLoadState('networkidle');
  await use(page);


},
ordercreate: async ({page},use)=>
{
await page.locator(".card-body").filter({ hasText: "ADIDAS ORIGINAL" }).getByRole("button", { name: "Add To Cart" }).click();
const cart= await page.locator("[routerlink*='/dashboard/cart']").click();
await page.getByRole("button", {name: 'Checkout'}).click();
const country = 'India';
await page.getByPlaceholder("Select Country").pressSequentially(country);
await page.getByRole("button", {name: country}).nth(1).click();
await page.locator(".btnn.action__submit.ng-star-inserted").click();
//await page.getByRole('button', { name: 'ORDERS' }).click();
await page.locator(".fa.fa-home").click();
await use(page);


}



    });
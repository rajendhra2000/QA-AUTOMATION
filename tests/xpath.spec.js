


const { test , expect} = require('@playwright/test');

test ('my code', async ({page})=>
 {
    //const page = await page.newPage() ;
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.getByLabel("First Name ").fill("raj");
   // await page.locator(`xpath=//label[text()='Email']/parent::div[@class='container']/following-sibling::div[@class='container signin']/child::a[text()='Sign in']`).click();
//const usermail="pra946787@gmail.com";
  // await page.locator("#userEmail").fill(usermail);
   //await page.locator("#userPassword").fill("Prasad@123");
   //await page.getByRole('button' , {name: 'login'}).click();
   //await page.getByLabel("fashion").check();

   //await page.locator(".card-body").filter({ hasText: "ADIDAS ORIGINAL" }).getByRole("button", { name: "Add To Cart" }).click();
//const product="ADIDAS ORIGINAL"
//await page.locator(`xpath=//b[contains(text(),"${product}")]/ancestor::div[@class='card-body']//button[normalize-space(text())='Add To Cart' ]`).click();
const drop = await page.locator("#dropdown-class-example");
await drop.selectOption("option1");
await page.getByRole("button",{name: "Mouse Hover"}).hover();
//await page.locator("#mousehover").hover();
await page.getByRole('link',{name: "Top"}).click();


await page.locator("#confirmbtn").click();
page.on("dialog", dialog => dialog.accept());

await page.locator("#autocomplete").pressSequentially("India");

const dropdownlocatorcount = await page.locator('.ui-menu-item-wrapper').count();

await page.pause();// const count = dropdownlocator.count();
for(let i=0; i<dropdownlocatorcount; i++){

    const dropdownoption = await page.locator('.ui-menu-item-wrapper').nth(i);
    if(await dropdownoption.textContent() === "India"){
        await dropdownoption.click();
        break;
    }

}

const frame = page.frameLocator("[name*='iframe-name']");

await frame.getByRole('link',{name: "All Access plan"}).click();

await page.waitForLoadState();

const get = await frame.locator("//h2[@style='padding-bottom: 25px;']").textContent();

console.log(get);



 });
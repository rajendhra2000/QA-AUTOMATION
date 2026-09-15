const {test,expect} = require('@playwright/test');

test ('first case', async ({browser})=>
{

    const Context= await browser.newContext();
    const page= await Context.newPage();
   const url= await page.goto("https://rahulshettyacademy.com/client/");
   console.log (await page.title());
   /*await page.locator(".text-reset").click();

   await page.locator("[for*='firstName']").fill("eeee");
   await page.locator("[for*='lastName']").fill("lmn");
   await page.locator("#userEmail").fill("pra3752326@gmail.com");
   //await expect (page.locator(".ng-star-inserted")).toContainText("Enter Valid Email");
   await page.locator("#userEmail").press("Tab");
   //await expect(page.locator(".invalid-feedback").filter({ hasText: "Enter Valid Email" })).toBeVisible();
   await page.locator("#userMobile").fill("7997068219");
   await page.locator("#userPassword").fill("Prasad@123");
   await page.locator("#confirmPassword").fill("Prasad@123");
   //await page.locator("input[type='checkbox']").check();
   await page.locator("[type*='checkbox']").click();
   await page.locator("[type*='submit']").click();  
   //await expect(page.getByText("Enter Valid Email")).toBeVisible();
   //await expect (page.locator(".invalid-feedback ng-star-inserted")).toContainText("Enter Valid Email");
   //await expect( page.locator("#userEmail") .locator("xpath=..").locator(".invalid-feedback")).toHaveText("Enter Valid Email");
   //await expect( page.locator("#userMobile") .locator("xpath=..").locator(".invalid-feedback")).toHaveText("*Phone Number is required");
   //await page.locator("#login").click();  */
   //await page.locator(".btn.btn-primary").click();  
   const usermail="pra946787@gmail.com";
   await page.locator("#userEmail").fill(usermail);
   await page.locator("#userPassword").fill("Prasad@123");
  //await page.locator("#login").click();  
  await page.getByRole('button' , {name: 'login'}).click();
  await page.waitForLoadState('networkidle');
  console.log(await page.locator(".card-body b").allTextContents());
 //const adidas= await page.getByText("ADIDAS ORIGINAL");
 //await page.getByText("Add To Cart").click();
 //const adidas=page.locator(".card-body b").filter({hasText: 'ADIDAS ORIGINAL'});
 //await adidas.getByRole('button',{name: "Add To Cart"}).click();
await page.locator(".card-body").filter({ hasText: "ADIDAS ORIGINAL" }).getByRole("button", { name: "Add To Cart" }).click();
//await page.locator(".card-body").filter({ hasText: "ADIDAS ORIGINAL" }).locator(i.fa.fa-shopping-cart).click();
//await page.locator(".card-body").getByText("ADIDAS ORIGINAL").getByRole("button", { name: "Add To Cart" }).click();
const cart= await page.locator("[routerlink*='/dashboard/cart']").click();
//await expect()
//const dataincart=page.locator(".cartSection").getByText('ADIDAS ORIGINAL');
//await expect(dataincart).toContainText("ADI");//.filter({hasText: 'ADIDAS ORIGINAL'});
//await expect(page.locator(".cartSection").getByText('ADIDAS ORIGINAL')).toContainText("ADI");
await expect(page.getByText('ADIDAS ORIGINAL')).toContainText("ADID");
await page.locator(".cartSection.removeWrap").getByRole('button', {name: 'Buy Now'}).click();
const expiry=await page.locator(".field.small").filter({hasText: 'Expiry Date '});
const month = expiry.locator("select.input.ddl").nth(0);
const date = expiry.locator("select.input.ddl").nth(1);
await month.selectOption("10");
await date.selectOption("25");
const kkk=await page.locator("input.input.txt.text-validated.ng-untouched.ng-pristine.ng-valid");
await expect(kkk).toHaveValue(usermail);
const country = 'India';
//await page.locator("[placeholder*='Country']").pressSequentially('ind');
//await page.locator("button.ta-item").getByText("India" , {exact: true}).click();
await page.getByPlaceholder("Select Country").pressSequentially(country);
//await page.locator("button.ta-item").getByText("India" , {exact: true}).click();
await page.getByRole("button", {name: country}).nth(1).click();
await page.locator(".field.small").filter({hasText: "CVV Code "}).locator("input").fill("234");
await page.locator(".btnn.action__submit.ng-star-inserted").click();
const end =await page.locator(".hero-primary");
await expect (end).toContainText("Thankyou for the order");
//await expect(end).toContainText(" Thankyou for the order");
const orderid= await page.locator("label.ng-star-inserted").textContent();
console.log(orderid);

//await page.locator(".fa.fa-handshake-o").getByRole("button", {name:"  ORDERS"}).click();
await page.getByRole('button', { name: 'ORDERS' }).click();
//const order=await page.locator("tbody tr").filter({hasText: "6a89817521054ba465e91298"}).textContent();
//console.log(order);

//await page.locator("tbody tr").filter({hasText: "6a89817521054ba465e91298"}).getByRole("button",{name: "View"}).click();
//const mess= await page.locator(".col-text.-main");
//await expect(mess).toContainText("6a89817521054ba465e91298");
await page.pause();


  //await page.getByText("ZARA COAT 3").click();
  





   //await expect(page.getByText("Password must be at least 8 characters")).toBeVisible();
   //await page.getByRole('button', { name: 'Login' }).click();
   

});
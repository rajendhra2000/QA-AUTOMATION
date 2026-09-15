const {test,expect,request} = require('@playwright/test');
const {customtest} = require('../utils/fixture.js');


customtest ('my test', async({loginpage , ordercreate})=>
{
await loginpage.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
await loginpage.locator(".fa.fa-handshake-o").click();
const order=await loginpage.locator("tbody tr").filter({hasText: "6a996108e7cd69710fbc2536"}).textContent();
console.log(order);
await loginpage.pause();

});
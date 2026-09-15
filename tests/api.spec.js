const {test, expect , request} = require('@playwright/test');

const loginbody = {userEmail: "pra946787@gmail.com", userPassword: "Prasad@123"};
const orderbody = {orders: [{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]};
let token;
test( 'api', async()=>{

const apicontext = await request.newContext();
const loginresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
{
    data : loginbody
})

await expect(loginresponse.ok()).toBeTruthy();
const loginresponsejson = await loginresponse.json();
console.log(loginresponsejson);
token = await loginresponsejson.token;

console.log(token);


const orderresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data: orderbody,
        headers: {
            'authorization': token,
            'content-type' : 'application/json'
            ,
            

        }
    })
    await expect(orderresponse.ok()).toBeTruthy();
    const orderjson = await orderresponse.json();
    //console.log(orderjson);

console.log(orderjson.message);

});

test ('my case', async({page})=>{

await page.addInitScript(value =>
{
    window.localStorage.setItem('token',value);
},token
)

await page.goto("https://rahulshettyacademy.com/client/");



});


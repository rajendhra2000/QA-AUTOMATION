const { test , expect} = require('@playwright/test');

test ('my code', async ({page})=>
 {
    //const page = await page.newPage() ;
    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByPlaceholder("you@email.com").fill("prasad797@gmail.com");
    await page.getByPlaceholder("••••••").fill("Prasad@123");
    await page.getByRole("button" ,{name: "Sign In"}).click();
    await expect(page.getByRole('link',{name : "Browse Events →"})).toBeVisible();
    await page.locator("#nav-events").click();
    await page.getByRole("button" , {name:"Add New Event"}).click();
    await expect(page.getByText("+ New Event")).toBeVisible();
    //await page.locator("#event-title-input").fill("Disco party");
    await page.getByPlaceholder("Event title").fill("my party");
    await page.pause();






 });
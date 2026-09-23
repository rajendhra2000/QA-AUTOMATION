const { test, expect } = require('@playwright/test');
const { basetes } = require('../utils/swaglabsfixture');
const dataset = JSON.parse(JSON.stringify(require('../utils/swaglab.json')));

for (const data of dataset) {
    basetes(`swaglabs test ${data.username}`, async ({ loginpage1 }) => {

        await loginpage1.locator("#user-name").fill(data.username);
        await loginpage1.locator("#password").fill(data.password);
        await loginpage1.locator("#login-button").click();



        await loginpage1.pause();

    });
}

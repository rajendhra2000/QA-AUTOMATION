const { expect } = require("@playwright/test");
class dropdown {

    constructor(page) {

        this.page = page;
        this.menu = page.locator("#dropdowm-menu-1");
        this.input = page.locator("//input[@value='option-1']");
        this.value = page.locator("//input[@value='option-3']");
        this.disable = page.locator("//input[@value='cabbage']");
        this.fruit = page.locator("#fruit-selects");
        this.orange = page.locator("//option[@value='orange']");

    }


    async dropexct() {

        await this.menu.selectOption("c#");
        await this.input.check();
        await this.value.uncheck();
        await expect(this.disable).toBeDisabled();
        await this.fruit.click();
        await expect(this.orange).toBeDisabled();

    }
}

module.exports = { dropdown };
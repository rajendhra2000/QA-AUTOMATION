class todoo {

    constructor(page) {

        this.page = page;


        this.plus = page.locator("#plus-icon");
        this.place = page.getByPlaceholder("Add new todo");
        this.enter = page.keyboard;


    }

    async todopage() {
        await this.plus.click();
        await this.place.fill("hello");
        await this.enter.press("Enter");
    }

}

module.exports = { todoo };
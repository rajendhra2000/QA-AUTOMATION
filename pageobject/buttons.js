class mybuttons {

    constructor(page) {
        this.page = page;

        this.buttonloc = page.locator("#button1");
        this.buttonclick = page.getByRole('button', { name: "close" });
        this.datatarget = page.locator("//span[@data-target='#myModalJSClick']");
        this.closeclick = page.getByRole('button', { name: "close" });
        this.nav = page.locator("#nav-title");


    }

    async mybuttonpom() {

        await this.buttonloc.click();
        await this.buttonclick.click();
        await this.datatarget.click();
        await this.closeclick.click();
        await this.nav.click();

    }

}

module.exports = { mybuttons };
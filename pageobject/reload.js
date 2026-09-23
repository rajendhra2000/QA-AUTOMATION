class reload {

    constructor(page) {

        this.page = page;
        this.relodbut = page.locator("#button1");
        this.closebut = page.getByRole('button', { name: 'Close' });




    }


    async relll() {

        await this.relodbut.click();
        await this.closebut.click();
    }



}
module.exports = { reload };
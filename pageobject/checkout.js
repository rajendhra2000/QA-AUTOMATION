const { expect } = require('@playwright/test');

class checkout {


    constructor(page) {

        this.page = page;

        //this.board = expect(page.getByText('ADIDAS ORIGINAL')).toContainText("ADID");
        this.buy = page.locator(".cartSection.removeWrap").getByRole('button', { name: 'Buy Now' });
        this.expiry = page.locator(".field.small").filter({ hasText: 'Expiry Date ' });
        this.month = this.expiry.locator("select.input.ddl").nth(0);
        this.date = this.expiry.locator("select.input.ddl").nth(1);


        this.kkk = page.locator("input.input.txt.text-validated.ng-untouched.ng-pristine.ng-valid");

        this.country = "India";

        this.cvv = page.locator(".field.small").filter({ hasText: "CVV Code " }).locator("input");
        //this.submit = page.locator(".btnn.action__submit.ng-star-inserted");
        //.btnn.action__submit.ng-star-inserted

        this.submit = page.locator(".action__submit");
    }


    async checkpage(email) {

        //await this.board.click();
        await this.buy.click();

        await this.month.selectOption("10");
        await this.date.selectOption("25");

        await expect(this.kkk).toHaveValue(email);


        await this.page.getByPlaceholder("Select Country").pressSequentially(this.country);

        const options = this.page.locator(".ta-results button");
        await options.first().waitFor();
        const drop = await options.count();
        for (let i = 0; i < drop; i++) {
            const text = await options.nth(i).textContent();
            if (text.trim() === this.country) {
                await options.nth(i).click();
                break;
            }
        }

        await this.cvv.fill("456");
        await this.submit.click();






    }


}


module.exports = { checkout }


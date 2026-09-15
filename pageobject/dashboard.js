class dashboard {

    constructor(page) {

        this.page = page;
        this.product = page.locator(".card-body").filter({ hasText: "ADIDAS ORIGINAL" }).getByRole("button", { name: "Add To Cart" });
        this.cart = page.locator("[routerlink*='/dashboard/cart']");

    }

    async dashpage() {

        await this.product.click();
        await this.cart.click();

    }

}

module.exports = { dashboard }
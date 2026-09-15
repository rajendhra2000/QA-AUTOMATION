const { loginpage } = require("../pageobject/loginpage");
const { dashboard } = require("../pageobject/dashboard");
const { checkout } = require("../pageobject/checkout");

class pagemanager {

    constructor(page) {

        this.page = page;
        this.loginpage = new loginpage(page);
        this.dashboard = new dashboard(page);
        this.checkout = new checkout(page);

    }

    getlogin() {


        return this.loginpage;
    }

    getdashboard() {


        return this.dashboard;
    }

    getcheckout() {

        return this.checkout;
    }

}

module.exports = { pagemanager }
const { todoo } = require('./todo');
const { mybuttons } = require('./buttons');
const { dropdown } = require('./dropdown');
const { reload } = require('./reload');

class ppooo {

    constructor(page) {
        this.page = page;
        this.tooodoo = new todoo(page);
        this.buttt = new mybuttons(page);
        this.drro = new dropdown(page);
        this.rel = new reload(page);

    }

    gettodo() {
        return this.tooodoo;
    }

    getbutton() {


        return this.buttt;
    }

    getdropdown() {

        return this.drro;
    }

    getreload() {
        return this.rel;
    }


}

module.exports = { ppooo };


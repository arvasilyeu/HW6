const SubModel = require('../../src/PO/forms/subscribe.model')

class Subscription {
    get createButon() {
        return $('//button[contains(text(), "Create")]');
    }

    async create(sub) {
        for (const elModel of SubModel.model) {
            const el = new elModel.type(elModel.selector);
            await el.set(sub[elModel.name]);
            await browser.pause(200);
        }
        await this.createButon.click();
    }
}

module.exports = { Subscription: new Subscription() }
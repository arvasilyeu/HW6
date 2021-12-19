const UserModel = require('../../src/PO/forms/user.model');

class User {
    get createButon() {
        return $('//button[contains(text(), "Create")]');
    }

    async create(user) {
        for (const elModel of UserModel.model) {
            const el = new elModel.type(elModel.selector);
            await el.set(user[elModel.name]);
            await browser.pause(200);
        }
        await this.createButon.click()
    }
}

module.exports = { User: new User() }
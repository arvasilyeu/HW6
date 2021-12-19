class Sidebar {

    get main() {
        return $('#first-nav-block');
    }

    async goTo(menuItem) {
        // await this.main.$(`*=${menuItem}`).click();
        await $(`*=${menuItem}`).click();
        // await $(`//a[contains(string(), "${menuItem}")]`)
    }
}

module.exports = { Sidebar: new Sidebar() }
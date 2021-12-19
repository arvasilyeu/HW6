class Sidebar {
    get main() {
        return $('#first-nav-block');
    }

    async goTo(menuItem) {
        await $(`*=${menuItem}`).click();
    }
}

module.exports = { Sidebar: new Sidebar() }
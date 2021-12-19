class Checkbox {
    constructor(selector) {
        this.selector = selector;
    }

    async set(value) {
        const boolValue = value === 'on' ? true : false
        if (boolValue) {
            await $(this.selector).click()
        }
        await browser.waitUntil(
            async () => await $(this.selector).isSelected() === boolValue,
            {
                timeout: 1000,
                interval: 50,
                timeoutMsg: 'Value of checkbox is incorrect!'
            }
        );
    }
}

module.exports = { Checkbox };
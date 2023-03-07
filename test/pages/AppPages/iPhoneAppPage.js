const { expect } = require('@playwright/test');

exports.IPhoneAppPage = class IPhoneAppPage {
    constructor(page) {
        this.page = page;

        // Roku app page

        // eslint-disable-next-line quotes
        this.iPhoneAppPageTitle = "Real America`s Voice News on the App Store";

        this.iPhoneAppMainText = page.locator("//h1[@class='product-header__title app-header__title']");
        this.regexiPhoneAppPageURL = /https:\/\/apps\.apple\.com\/.*\/app\/americas-voice\/id1414478547.*/;
    }
};

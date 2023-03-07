const { expect } = require('@playwright/test');

exports.AppsPage = class AppsPage {
    constructor(page) {
        this.page = page;

        // Title
        this.appsMainText = page.locator("//h1[contains(text(),'Voice Apps')]");
        this.appsTitle = "Apps - Real America's Voice News";

        // URl
        this.urlAppPage = 'https://dev.americasvoice.news/app/';
    }

    // Actions
};

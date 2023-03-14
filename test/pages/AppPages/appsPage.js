/* eslint-disable no-unused-vars */
const { expect } = require('@playwright/test');

exports.AppsPage = class AppsPage {
    constructor(page) {
        this.page = page;

        // Title
        this.appsMainText = page.locator("//h1[contains(text(),'Voice Apps')]");
        this.appsTitle = "Apps - Real America's Voice News";

        // URl
        this.urlAppPage = 'https://dev.americasvoice.news/app/';

        // Apps icons
        this.rokuAppIcon = page.locator("//a[@aria-label='Open roku application']");
        this.androidAppIcon = page.locator("//a[@aria-label='Open android application']");
        this.appleAppIcon = page.locator("//a[@aria-label='Open apple application']");
        this.appleTvAppIcon = page.locator("//a[@aria-label='Open apple-tv application']");
        this.fireTvAppIcon = page.locator("//a[@aria-label='Open fire-tv application']");

        this.scrollText = page.locator("//p[contains(text(),'Voice is where politics become accessible.')]");
    }

    // Actions
};

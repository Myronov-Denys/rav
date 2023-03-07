const { expect } = require('@playwright/test');

exports.AndroidAppPage = class AndroidAppPage {
    constructor(page) {
        this.page = page;

        // Roku app page

        this.androidAppPageTitle = 'Real America\’s Voice News - Apps on Google Play';

        this.regexAndroidAppPageURL = /https:\/\/play\.google\.com\/store\/apps.*\.americasvoice.*/;
    }
};

const { expect } = require('@playwright/test');

exports.FireTVAppPage = class FireTVAppPage {
    constructor(page) {
        this.page = page;

        // Fire TV app page

        this.fireTVAppPageTitle = "America's Voice News:Amazon.com:Appstore for Android";

        this.regexFireTVAppPageURL = /https:\/\/www\.amazon\.com\/Performance-One-Media-Americas-Voice\/.*\/B07HPGGNPC\/.*/;
    }
};

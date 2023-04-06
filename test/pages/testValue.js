/* eslint-disable no-unused-vars */
const { expect } = require('@playwright/test');

exports.TestValue = class TestValue {
    constructor(page) {
        this.page = page;

        // Apps

        // console.log('Title :' + await newTab.title());
        // console.log('Url :' + await newTab.url());

        // Roku
        this.rokuAppUrl = 'https://channelstore.roku.com/en-gb/details/5e1b380d0d963b69b988490cd2a0a488/americas-voice-news';
        this.rokuAppPageTitle = "Real America's Voice | TV app | Roku Channel Store | Roku";

        // Valid User data
        this.validEmail = '1234test667890+2@gmail.com';
        this.validPassword = 'Test13579';
        this.notRegisteredEmail = '1234test667890+1099875@gmail.com';

        // Invalid user data
        this.emailWithoutAt = '1234test667890gmail.com';
        this.emailWithDoubleAt = '1234test667890@@gmail.com';
        this.emailWithoutDomen = '1234test667890@';
        this.emailWithExtraLeters = '1234test667890+2@gmail.comqwertyui';

        this.invalidPassword = 'qwertyu10';

        // HTML Tags
        this.htmlLinkWithLinkText = '<a href="www.google.com">link</a>';
    }

    async open_Dev_Url() {
        await this.page.goto('https://dev.americasvoice.news/');
    }

    async open_Staging_Url() {
        await this.page.goto('https://staging.americasvoice.news/');
    }

    async open_Live_Url() {
        await this.page.goto('https://americasvoice.news/');
    }
};

exports.COMMON_TEST_DATA = {
    devURL: 'https://dev.americasvoice.news/',
};

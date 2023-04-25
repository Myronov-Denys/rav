/* eslint-disable no-unused-vars */
const { expect } = require('@playwright/test');

exports.SocialMediaPages = class SocialMediaPages {
    constructor(page) {
        this.page = page;

        // Facebook

        this.facebookMainText = page.locator("//h1[contains(text(),'Voice News')]");

        this.facebookTitle = "America's Voice News | Facebook";
        this.regexFacebookPageURL = /https:\/\/www\.facebook\.com\/RealAmericasVoice\//;

        // Twitter

        this.twitterPageURL = 'https://twitter.com/RealAmVoice';

        // YouTube
        this.youTubePageURL = 'https://www.youtube.com/channel/UCMGZ8pfQHgZ6Yj0-92PMENg';

        // Instagram
        this.instagramPageURL = 'https://www.instagram.com/realamericasvoice/';
        this.instagramTitle = "Real America\’s Voice News (@realamericasvoice) • Instagram photos and videos";

        // RSS
        this.rssPageURL = 'https://dev.americasvoice.news/feeds/rss.xml';
    }

    // Actions
};

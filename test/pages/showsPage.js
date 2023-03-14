const { expect } = require('@playwright/test');

exports.ShowsPage = class ShowsPage {
    constructor(page) {
        this.page = page;

        // All Shows
        this.showsTitle = page.locator("//h1[contains(text(),'Voice News Shows')]");
        this.allCategoty = page.locator("//li/a[text()='All']");
        this.viewShowScheduleButtonOnAllShowsPage = page.locator("//h1/following-sibling::div/a[contains(text(),'View Show Schedule')]");

        // Documentaries shows page
        this.documentariesShowsTitle = page.locator("//h1[text()='Documentaries']");
        this.documentariesCategoty = page.locator("//li/a[text()='Documentaries']");

        // Special Events shows page
        this.specialEventsShowsTitle = page.locator("//h1[text()='Special Events']");
        this.specialEventsCategoty = page.locator("//li/a[text()='Special Events']");

        // News shows page
        this.newsShowsTitle = page.locator("//h1[text()='News']");
        this.newsCategoty = page.locator("//li/a[text()='News']");

        // Opinion shows page
        this.opinionShowsTitle = page.locator("//h1[text()='Opinion']");
        this.opinionCategoty = page.locator("//li/a[text()='Opinion']");

        // Show Schedule shows page
        this.showScheduleShowsTitile = page.locator("//h3[contains(text(),'Show Schedule')]");
    }

    // Actions
};

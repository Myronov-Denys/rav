/* eslint-disable no-unused-vars */
const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;

        // Cookies bar
        this.cookiesCloseButton = page.locator('//div[@id="onetrust-close-btn-container"]');

        this.homeTitle = page.getByText('HOME OF REAL NEWS & HONEST VIEWS!');

        // Header //

        this.sideBarButton = page.locator("//span[@class='navbar-brand']/div[contains(@class,'styles_root')]");

        this.showsHeaderButton = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]");

        // Profile header
        this.profileIconOnHeader = page.locator("//div[contains(@class,'d-none position-relative')]//a[@title='Login' or @title='Profile']");
        this.youAreNotLoggedInTextOnProfilePopUpWindowOnHeader = page.locator("//div[@class='d-none position-relative d-xl-flex ms-auto navbar-nav']//p[contains(@class,'styles_mainText')]");

        this.loginButtonOnProfilePopUpWindowOnHeader = page.locator("//div[@class='d-none position-relative d-xl-flex ms-auto navbar-nav']//p[@class='styles_links__dCvu1']/a[text()='Login']");
        this.createNewAccountButtonOnProfilePopUpWindowOnHeader = page.locator("//div[@class='d-none position-relative d-xl-flex ms-auto navbar-nav']//p[@class='styles_links__dCvu1']/a[text()='Create New Account']");
        this.profileIconOnProfilePopUpWindowOnHeader = page.locator("//div[contains(@class,'position-relative')]//div[@class='text-center p-4']//*[@role='img']");
        this.loggedInUserEmailOnHeaderProfileWindow = page.locator("//div[@class='d-none position-relative d-xl-flex ms-auto navbar-nav']//p[@class='styles_mainText__Ham0w styles_links__dCvu1 mt-3']/a");

        // Shows
        this.showsDropDownMenuOnHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'All')]/..");

        // Shows links

        this.showsLinksList = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[text()='All']/..");

        this.showsLinksDropDownMenuOnHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'All')]/../a");
        this.allshowsLinkOnDropDownMenuHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'All')]");
        this.documentariesShowsLinkOnDropDownMenuHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'Documentaries')]");
        this.specialEventsvShowsLinkOnDropDownMenuHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'Special Events')]");
        this.newsShowsLinkOnDropDownMenuHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'News')]");
        this.opinionShowsLinkOnDropDownMenuHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'Opinion')]");

        // Apps
        this.appsHeaderButton = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Apps')]");
        this.appsDropDownMenuOnHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Apps')]/..//div[contains(@class,'styles_linksWrapper')]");

        // Apps from drop down menu
        this.rokuAppOnHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Apps')]/..//a[contains(text(),'Roku')]");
        this.androidAppOnHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Apps')]/..//a[contains(text(),'Android')]");
        this.iPhoneAppOnHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Apps')]/..//a[contains(text(),'iPhone')]");
        this.appleTVAppOnHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Apps')]/..//a[contains(text(),'Apple TV')]");
        this.fireTVAppOnHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Apps')]/..//a[contains(text(),'Fire TV')]");

        // Apps from the "Get our Apps" section
        this.getOurAppsTextLink = page.locator("//h4//a[contains(text(),'Get our Apps')]");
        this.downloadNowButtonOnGetOurApp = page.locator("//h4//a[contains(text(),'Download now')]");
        this.rokuAppIconOnGetOurApps = page.locator("//a[@aria-label='Open roku application']");
        this.androidAppIconOnGetOurApps = page.locator("//a[@aria-label='Open android application']");
        this.appleAppIconOnGetOurApps = page.locator("//a[@aria-label='Open apple application']");
        this.appleTvAppIconOnGetOurApps = page.locator("//a[@aria-label='Open apple-tv application']");
        this.fireTvAppIconOnGetOurApps = page.locator("//a[@aria-label='Open fire-tv application']");

        // Apps link on footer
        this.downloadNowButtonOnFooter = page.locator("//h2[contains(text(),'DOWNLOAD OUR APPS')]/following-sibling::a[contains(text(),'DOWNLOAD NOW')]");

        // Social media
        this.facebookLinkOnHeader = page.locator("//nav//div[contains(@class,'ms-auto navbar-nav')]/a[@title='Facebook']");
        this.twitterLinkOnHeader = page.locator("//nav//div[contains(@class,'ms-auto navbar-nav')]/a[@title='Twitter']");
        this.youTubeLinkOnHeader = page.locator("//nav//div[contains(@class,'ms-auto navbar-nav')]/a[@title='YouTube']");
        this.instagramLinkOnHeader = page.locator("//nav//div[contains(@class,'ms-auto navbar-nav')]/a[@title='Instagram']");
        this.rssLinkOnHeader = page.locator("//nav//div[contains(@class,'ms-auto navbar-nav')]/a[contains(@title,'Voice News')]");

        // Sidebar //

        // Shows sidebar
        this.showsSidebarButton = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']");

        this.showsDropDownButtonOnSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../button");
        this.showsDropDownMenuOnSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]");

        // Shows sidebar links

        this.showsLinksOnSideBarDropDownMenu = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a");

        this.allshowsLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='All']");
        this.documentariesShowsLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Documentaries']");
        this.specialEventsvShowsLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Special Events']");
        this.newsShowsLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='News']");
        this.opinionShowsLinkOnDropDownMenuSidebarSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Opinion']");
        this.showScheduleShowsLinkOnDropDownMenuSidebarSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Show Schedule']");

        // Apps sidebar
        this.appsSidebarButton = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Apps']");
        this.appsDropDownButtonOnSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Apps']/../button");

        // Apps sidebar drop down menu sidebar
        this.appsDropDownMenuOnSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Apps']/../..//div[contains(@class, 'accordion-collapse')]");
        this.appsLinksOnSideBarDropDownMenu = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Apps']/../..//div[contains(@class, 'accordion-collapse')]//a");

        // Apps on sidebar drop down menu sidebar
        this.rokuAppLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Apps']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Roku']");
        this.androidAppLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Apps']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Android']");
        this.iPhoneAppLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Apps']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='iPhone']");
        this.appleTvAppLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Apps']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Apple TV']");
        this.fireTvAppLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Apps']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Fire TV']");

        // WATCH RAV TV sidebar
        this.viewShowScheduleButtonOnWatchRavTvSection = page.locator("//h3[text()='WATCH RAV TV']/following-sibling::div/a");

        // Social media sidebar
        this.facebookLinkOnSidebar = page.locator("//div[contains(@class,'styles_socialBar')]//a[@title='Facebook']");
        this.twitterLinkOnSidebar = page.locator("//div[contains(@class,'styles_socialBar')]//a[@title='Twitter']");
        this.youTubekLinkOnSidebar = page.locator("//div[contains(@class,'styles_socialBar')]//a[@title='YouTube']");
        this.instagramLinkOnSidebar = page.locator("//div[contains(@class,'styles_socialBar')]//a[@title='Instagram']");
        this.rssLinkOnSidebar = page.locator("//div[contains(@class,'styles_socialBar')]//a[contains(@title,'Voice News')]");

        // Profile sidebar
        this.profileIconOnSidebar = page.locator("//div[contains(@class,'styles_socialBar')]//a[@title='Login' or @title='Profile']");
        this.profilePopUpWindowOnSidebar = page.locator("//div[contains(@class,'styles_socialBar')]//div[@class='text-center p-4']");

        this.youAreNotLoggedInTextOnProfilePopUpWindowOnSidebar = page.locator("//div[contains(@class,'styles_socialBar')]//div[@class='text-center p-4']//p[contains(@class,'styles_mainText')]");
        this.loginButtonOnProfilePopUpWindowOnSidebar = page.locator("//div[contains(@class,'styles_socialBar')]//div[@class='text-center p-4']//p[contains(@class,'styles_links')]/a[text()='Login']");
        this.createNewAccountButtonOnProfilePopUpWindowOnSidebar = page.locator("//div[contains(@class,'styles_socialBar')]//div[@class='text-center p-4']//p[contains(@class,'styles_links')]/a[text()='Create New Account']");
        this.profileIconOnProfilePopUpWindowOnSidebar = page.locator("//div[contains(@class,'styles_socialBar')]//div[@class='text-center p-4']//*[@role='img']");

        // Footer

        // Social media on footer
        this.facebookLinkOnFooter = page.locator("//p[text()='Click the on live feeds to directly interact with us. ']/..//a[@title='Facebook']");
        this.twitterLinkOnFooter = page.locator("//p[text()='Click the on live feeds to directly interact with us. ']/..//a[@title='Twitter']");
        this.youTubekLinkOnFooter = page.locator("//p[text()='Click the on live feeds to directly interact with us. ']/..//a[@title='YouTube']");
        this.instagramLinkOnFooter = page.locator("//p[text()='Click the on live feeds to directly interact with us. ']/..//a[@title='Instagram']");

        // Social media feeds on footer
        this.facebookFeedOnFooter = page.locator("//span[text()='Facebook Feed']");
        this.twitterFeedOnFooter = page.locator("//span[text()='Twitter Feed']");
        this.instagramFeedOnFooter = page.locator("//span[text()='Instagram Feed']");

        // Social media iframe feeds on footer

        this.facebookFeedDropDownIframe = page.locator("//span[text()='Facebook Feed']/../../../div[contains(@class,'styles_open')]");
        this.twitterFeedDropDownIframe = page.locator("//span[text()='Twitter Feed']/../../../div[contains(@class,'styles_open')]");
        this.instagramFeedDropDownIframe = page.locator("//span[text()='Instagram Feed']/../../../div[contains(@class,'styles_open')]");
    }

    // Actions

    // Cookies bar

    async clickCloseCookieBar() {
        await this.cookiesCloseButton.click();
    }

    // Header //

    async clickShowsInHeader() {
        await this.showsHeaderButton.click();
    }

    async openAppPageFromHeader() {
        await this.appsHeaderButton.click();
    }

    async clickProfileInHeader() {
        await this.profileIconOnHeader.click();
    }

    // Social mededia Header
    async clickFacebookLinkHeader() {
        await this.facebookLinkOnHeader.click();
    }

    async clickTwitterLinkHeader() {
        await this.twitterLinkOnHeader.click();
    }

    async clickInstagramLinkHeader() {
        await this.instagramLinkOnHeader.click();
    }

    async clickYouTubeLinkOnHeader() {
        await this.youTubeLinkOnHeader.click();
    }

    async clickRssLinkOnHeader() {
        await this.rssLinkOnHeader.click();
    }

    // Profile popup window on header

    async hoverToProfileIconHeader() {
        await this.profileIconOnHeader.hover();
    }

    async clickLoginButtonOnHeader() {
        await this.loginButtonOnProfilePopUpWindowOnHeader.click();
        await this.page.waitForLoadState();
        // await this.profilePopUpWindowOnSidebar.waitFor();
    }

    // SideBar //

    async clickSideBarMenu() {
        await this.sideBarButton.click();
        await this.showsSidebarButton.waitFor();
    }

    async clickShowsInSidebar() {
        await this.showsSidebarButton.click();
    }

    async openShowsFromSidebar() {
        await this.clickSideBarMenu();
        await this.clickShowsInSidebar();
    }

    // Social mededia Sidebar

    async clickFacebookLinkOnSidebar() {
        await this.facebookLinkOnSidebar.click();
    }

    async clickTwitterLinkOnSidebar() {
        await this.twitterLinkOnHeader.click();
    }

    async clickYouTubeLinkOnSidebar() {
        await this.youTubekLinkOnSidebar.click();
    }

    async clickInstagramLinkOnSidebar() {
        await this.instagramLinkOnSidebar.click();
    }

    async clickRssLinkOnSidebar() {
        await this.rssLinkOnSidebar.click();
    }

    // Profile popup window on Sidebar

    async hoverToProfileIconSidebar() {
        await this.profileIconOnSidebar.hover();
        await this.profilePopUpWindowOnSidebar.waitFor();
    }

    async clickProfileIconOnSidebar() {
        await this.profileIconOnSidebar.click();
        await this.page.waitForLoadState();
    }

    async clickLoginButtonOnSidebar() {
        await this.loginButtonOnProfilePopUpWindowOnSidebar.click();
        await this.page.waitForLoadState();
        // await this.profilePopUpWindowOnSidebar.waitFor();
    }

    // Social mededia Footer

    async clickFacebookLinkOnFooter() {
        await this.facebookFeedOnFooter.scrollIntoViewIfNeeded();
        await this.facebookLinkOnFooter.click();
    }

    async clickTwitterLinkOnFooter() {
        await this.facebookFeedOnFooter.scrollIntoViewIfNeeded();
        await this.twitterLinkOnFooter.click();
    }

    async clickInstagramLinkOnFooter() {
        await this.facebookFeedOnFooter.scrollIntoViewIfNeeded();
        await this.instagramLinkOnFooter.click();
    }

    async clickYoutubeLinkOnFooter() {
        await this.facebookFeedOnFooter.scrollIntoViewIfNeeded();
        await this.instagramLinkOnFooter.click();
    }

    // async click_Shows_In_Header() {
    //     await this.showsHeaderButton.click()
    //         };
};

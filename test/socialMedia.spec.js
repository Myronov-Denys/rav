const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/homePage');
const { ProjectPasswordPage } = require('./pages/projectPasswordPage');
const { SocialMediaPages } = require('./pages/socialMediaPages');
const { TestValue } = require('./pages/testValue');

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`PreCondition : Enter the project password and then run the test : ${testInfo.title}`);
    const testValue = new TestValue(page);
    const projectPasswordPage = new ProjectPasswordPage(page);
    const homePage = new HomePage(page);

    await testValue.openURL();
    if (await projectPasswordPage.projectPasswordField.isVisible({ timeout: 20000 })) {
        console.log('Project password is set');
        await projectPasswordPage.enterProjectPaswordOnDev();
    } else {
        console.log('Project password is not set');
    }
    await homePage.clickCloseCookieBar();
});

test.describe('Header social media', () => {
    test('Open the "Facebook" link from header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "Facebook" link in the header');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickFacebookLinkHeader(),
        ]);

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        await socialMediaPages.facebookMainText.waitFor();

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.regexFacebookPageURL);

        console.log('Assert test 2: The "Facebook" main text is displayed');
        await expect(await newTab.title()).toContain(socialMediaPages.facebookTitle);
    });

    test('Open the "Twitter" link from header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "Twitter" link in the header');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickTwitterLinkHeader(),
        ]);

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.twitterPageURL);
    });

    test('Open the "YouTube" link from header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "YouTube" link in the header');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickYouTubeLinkOnHeader(),
        ]);

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.youTubePageURL);
    });

    test('Open the "Instagram" link from header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "Instagram" link in the header');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickInstagramLinkHeader(),
        ]);

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.instagramPageURL);

        console.log('Assert test 2: The "Fire TV" main text is displayed');
        await expect(await newTab.title()).toBe(socialMediaPages.instagramTitle);
    });

    test('Open the "RSS" link from header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "RSS" link in the header');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickRssLinkOnHeader(),
        ]);

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.rssPageURL);
    });
});

test.describe('Sidebar social media', () => {
    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`PreCondition 2: Open sidebar and after start trst : ${testInfo.title}`);

        const homePage = new HomePage(page);
        await homePage.clickSideBarMenu();
        await homePage.showsSidebarButton.waitFor();
    });

    test('Open the "Facebook" page from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "Facebook" link in the sidebar');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickFacebookLinkOnSidebar(),
        ]);

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        await socialMediaPages.facebookMainText.waitFor();

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.regexFacebookPageURL);

        console.log('Assert test 2: The "Fire TV" main text is displayed');
        await expect(await newTab.title()).toBe(socialMediaPages.facebookTitle);
    });

    test('Open the "Twitter" page from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "Twitter" link in the sidebar');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickTwitterLinkOnSidebar(),
        ]);

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.twitterPageURL);
    });

    test('Open the "YouTube" page from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "YouTube" link in the sidebar');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickYouTubeLinkOnSidebar(),
        ]);

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.youTubePageURL);
    });

    test('Open the "Instagram" page from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "Instagram" link in the sidebar');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickInstagramLinkOnSidebar(),
        ]);

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.instagramPageURL);

        console.log('Assert test 2: The "Fire TV" main text is displayed');
        await expect(await newTab.title()).toBe(socialMediaPages.instagramTitle);
    });

    test('Open the "RSS" page from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "RSS" link in the sidebar');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickRssLinkOnSidebar(),
        ]);
        console.log('Click done - wait for load');
        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toBe(socialMediaPages.rssPageURL);
    });
});

test.describe('Footer social media', () => {
    test('Open the "Facebook" link from footer', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "Facebook" link in the footer');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickFacebookLinkOnFooter(),
        ]);

        console.log('Step 2: Wait for load a "Facebook" page');

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        await socialMediaPages.facebookMainText.waitFor();

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.regexFacebookPageURL);

        console.log('Assert test 2: The "Fire TV" main text is displayed');
        await expect(await newTab.title()).toBe(socialMediaPages.facebookTitle);
    });

    test('Open the "Twitter" link from footer', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "Twitter" link in the footer');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickTwitterLinkOnFooter(),
        ]);

        console.log('Step 2: Wait for load a "Twitter" page');

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.twitterPageURL);
    });

    test('Open the "YouTube" link from header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "YouTube" link in the footer');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickYouTubeLinkOnHeader(),
        ]);

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.youTubePageURL);
    });

    test('Open the "Instagram" link from header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click a "Instagram" link in the footer');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.clickInstagramLinkOnFooter(),
        ]);

        await newTab.waitForLoadState();
        const socialMediaPages = new SocialMediaPages(newTab);

        // Assert test

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(socialMediaPages.instagramPageURL);

        console.log('Assert test 2: The "Fire TV" main text is displayed');
        await expect(await newTab.title()).toBe(socialMediaPages.instagramTitle);
    });

    test.describe('Footer social media Feed', () => {
        test('Open the "Facebook" link from footer', async ({ page }) => {
            const homePage = new HomePage(page);

            console.log('Step 1: Click a "Facebook" link in the footer');

            const [newTab] = await Promise.all([
                page.waitForEvent('popup'),
                await homePage.clickFacebookLinkOnFooter(),
            ]);

            console.log('Step 2: Wait for load a "Facebook" page');

            await newTab.waitForLoadState();
            const socialMediaPages = new SocialMediaPages(newTab);

            // Assert test

            await socialMediaPages.facebookMainText.waitFor();

            console.log('Assert test 1: New tab have the correct URL');
            await expect(newTab.url()).toMatch(socialMediaPages.regexFacebookPageURL);

            console.log('Assert test 2: The "Fire TV" main text is displayed');
            await expect(await newTab.title()).toBe(socialMediaPages.facebookTitle);
        });
    });
});

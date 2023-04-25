/* eslint-disable no-console */
const { test, expect } = require('@playwright/test');
const { AppsPage } = require('./pages/AppPages/appsPage');
const { HomePage } = require('./pages/homePage');
const { ProjectPasswordPage } = require('./pages/projectPasswordPage');
const { RokuAppPage } = require('./pages/AppPages/rokuAppPage');
const { TestValue } = require('./pages/testValue');
const { AndroidAppPage } = require('./pages/AppPages/androidAppPage');
const { IPhoneAppPage } = require('./pages/AppPages/iPhoneAppPage');
const { FireTVAppPage } = require('./pages/AppPages/fireTVAppPage');

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

    console.log('PreCondition 2: Open Login page');
    await homePage.clickProfileInHeader();
});

test.describe('Header apps', () => {
    test('Open "Apps" page from header', async ({ page }) => {
        const homePage = new HomePage(page);
        const appsPage = new AppsPage(page);

        console.log('Step 1: Click to the "App" button on header');
        await homePage.appsHeaderButton.click();

        console.log('Assert tests: The "App" page have correct url and title');
        await expect(page).toHaveURL(appsPage.urlAppPage);
        await expect(page).toHaveTitle(appsPage.appsTitle);
    });

    test('Open the "Apps" drop down menu from header', async ({ page }) => {
        const homePage = new HomePage(page);

        await expect(homePage.appsDropDownMenuOnHeader).toBeHidden();
        await homePage.appsHeaderButton.hover();
        await expect(homePage.appsDropDownMenuOnHeader).toBeVisible();
    });

    test('Open the "Roku" app from drop down menu on header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Hover to the "App" button on header');
        await homePage.appsHeaderButton.hover();

        console.log('Step 2: Click the "Roku" app link on header and open new tab');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            homePage.rokuAppOnHeader.click(),
        ]);

        await newTab.waitForLoadState();
        const rokuAppPage = new RokuAppPage(newTab);

        console.log('Assert test 1: New tab with the correct URL open');
        expect(newTab.url()).toMatch(rokuAppPage.regexRokuAppPageURL);

        console.log('Assert test 2: Main text is displayed on Roku app page');
        await expect(rokuAppPage.rokuAppMainText).toBeVisible();
    });

    test('Open the "Android" app from drop down menu on header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Hover to the "App" button on header');
        await homePage.appsHeaderButton.hover();

        console.log('Step 2: Click the "Android" app link on header and open new tab');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            homePage.androidAppOnHeader.click(),
        ]);
        await newTab.waitForLoadState();
        const androidAppPage = new AndroidAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        expect(newTab.url()).toMatch(androidAppPage.regexAndroidAppPageURL);

        console.log('Assert test 2: The "Android" app page title is displayed');
        expect(await newTab.title()).toMatch(androidAppPage.androidAppPageTitle);
    });

    test('Open the "iPhone" app from drop down menu on header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Hover to the "App" button on header');
        await homePage.appsHeaderButton.hover();

        console.log('Step 2: Click the "iPhone" app link on header and open new tab');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            homePage.iPhoneAppOnHeader.click(),
        ]);
        await newTab.waitForLoadState();
        const iPhoneAppPage = new IPhoneAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(iPhoneAppPage.regexiPhoneAppPageURL);

        console.log('Assert test 2: The "iTunce" main text is displayed');
        await expect(await iPhoneAppPage.iPhoneAppMainText).toBeVisible();
    });

    test('Open the "Apple TV" app from drop down menu on header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Hover to the "App" button on header');
        await homePage.appsHeaderButton.hover();

        console.log('Step 2: Click the "Apple TV" app link on header and open new tab');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            homePage.appleTVAppOnHeader.click(),
        ]);
        await newTab.waitForLoadState();
        const iPhoneAppPage = new IPhoneAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(iPhoneAppPage.regexiPhoneAppPageURL);

        console.log('Assert test 2: The "iTunce" main text is displayed');
        await expect(await iPhoneAppPage.iPhoneAppMainText).toBeVisible();
    });

    test('Open the "Fire TV" app from drop down menu on header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Hover to the "App" button on header');
        await homePage.appsHeaderButton.hover();

        console.log('Step 2: Click the "Fire TV" app link on header and open new tab');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            homePage.fireTVAppOnHeader.click(),
        ]);
        await newTab.waitForLoadState();
        const fireTVAppPage = new FireTVAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(fireTVAppPage.regexFireTVAppPageURL);

        console.log('Assert test 2: The "Fire TV" main text is displayed');
        await expect(await newTab.title()).toBe(fireTVAppPage.fireTVAppPageTitle);
    });
});

test.describe('The "Get our Apps" section on home page ', () => {
    test('Open "Apps" page from the "Get our Apps" section on home page', async ({ page }) => {
        const homePage = new HomePage(page);
        const appsPage = new AppsPage(page);

        console.log('Step 1: Click to the "Get Our Apps link" button on header');
        await homePage.getOurAppsTextLink.waitFor();
        await homePage.getOurAppsTextLink.click();

        console.log('Assert tests: The "App" page have correct url and title');
        await appsPage.appsMainText.waitFor();
        await expect(page).toHaveURL(appsPage.urlAppPage);
        await expect(page).toHaveTitle(appsPage.appsTitle);
    });

    test('Open "Apps" page from the "Download Now" link on home page', async ({ page }) => {
        const homePage = new HomePage(page);
        const appsPage = new AppsPage(page);

        console.log('Step 1: Click to the "Download Now" button on header');
        await homePage.downloadNowButtonOnGetOurApp.click();

        console.log('Assert tests: The "App" page have correct url and title');
        await appsPage.appsMainText.waitFor();
        await expect(page).toHaveURL(await appsPage.urlAppPage);
        await expect(page).toHaveTitle(await appsPage.appsTitle);
    });

    test('Open "Roku" app page from the "Get our Apps" section on home page', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click the "Roku" app link on header and open new tab');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.rokuAppIconOnGetOurApps.click(),
        ]);

        await newTab.waitForLoadState();
        const rokuAppPage = new RokuAppPage(newTab);

        console.log('Assert test 1: New tab with the correct URL open');
        expect(newTab.url()).toMatch(rokuAppPage.regexRokuAppPageURL);

        console.log('Assert test 2: Main text is displayed on Roku app page');
        await expect(rokuAppPage.rokuAppMainText).toBeVisible();
    });

    test('Open "Android" app page from the "Get our Apps" section on home page', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click the "Android" app link on header and open new tab');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.androidAppIconOnGetOurApps.click(),
        ]);

        await newTab.waitForLoadState();
        const androidAppPage = new AndroidAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        expect(newTab.url()).toMatch(androidAppPage.regexAndroidAppPageURL);

        console.log('Assert test 2: The "Android" app page title is displayed');
        expect(await newTab.title()).toMatch(androidAppPage.androidAppPageTitle);
    });

    test('Open "Apple" app page from the "Get our Apps" section on home page', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click the "Apple" app link on header and open new tab');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.appleAppIconOnGetOurApps.click(),
        ]);

        await newTab.waitForLoadState();
        const iPhoneAppPage = new IPhoneAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(iPhoneAppPage.regexiPhoneAppPageURL);

        console.log('Assert test 2: The "iTunce" main text is displayed');
        await expect(await iPhoneAppPage.iPhoneAppMainText).toBeVisible();
    });

    test('Open "Apple TV" app page from the "Get our Apps" section on home page', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click the "Apple TV" app link on header and open new tab');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.appleTvAppIconOnGetOurApps.click(),
        ]);

        await newTab.waitForLoadState();
        const iPhoneAppPage = new IPhoneAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(iPhoneAppPage.regexiPhoneAppPageURL);

        console.log('Assert test 2: The "iTunce" main text is displayed');
        await expect(await iPhoneAppPage.iPhoneAppMainText).toBeVisible();
    });

    test('Open "Fire TV" app page from the "Get our Apps" section on home page', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click the "Fire TV" app link on header and open new tab');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.fireTvAppIconOnGetOurApps.click(),
        ]);

        await newTab.waitForLoadState();
        const fireTVAppPage = new FireTVAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(fireTVAppPage.regexFireTVAppPageURL);

        console.log('Assert test 2: The "Fire TV" main text is displayed');
        await expect(await newTab.title()).toBe(fireTVAppPage.fireTVAppPageTitle);
    });
});

test.describe('Sidebar apps', () => {
    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`PreCondition 2: Open sidebar : ${testInfo.title}`);
        const homePage = new HomePage(page);

        await homePage.sideBarButton.click();
        await homePage.appsSidebarButton.waitFor();
    });

    test('Open the "Apps" page from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);
        const appsPage = new AppsPage(page);

        console.log('Step 1: Click the "Apps" link');
        await homePage.appsSidebarButton.click();

        console.log('Assert tests: The "App" page have correct url and title');
        await expect(page).toHaveURL(appsPage.urlAppPage);
        await expect(page).toHaveTitle(appsPage.appsTitle);
    });

    test('Open the "Apps" dropdown list on sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Assert test 1: The "Apps" drop down menu is hidden');
        await expect(homePage.appsDropDownMenuOnSidebar).toBeHidden();

        console.log('Step 1: Click the "Apps" drodrop down button');
        await homePage.appsDropDownButtonOnSidebar.click();

        console.log('Assert test 2: The Apps drop down menu is visible');
        await expect(homePage.appsDropDownMenuOnSidebar).toBeVisible();

        console.log('Assert test 3: All shows links on drop down menu is displayed');
        await expect(homePage.appsLinksOnSideBarDropDownMenu).toContainText(['Roku', 'Android', 'iPhone', 'Apple TV', 'Fire TV']);
    });

    test('Open the "Roku" app page from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click the "Apps" drop down button ');
        await homePage.appsDropDownButtonOnSidebar.click();

        console.log('Step 2: Click the "Roku" app link');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.rokuAppLinkOnDropDownMenuSidebar.click(),
        ]);

        await newTab.waitForLoadState();
        const rokuAppPage = new RokuAppPage(newTab);

        console.log('Assert test 1: New tab with the correct URL open');
        expect(newTab.url()).toMatch(rokuAppPage.regexRokuAppPageURL);

        console.log('Assert test 2: Main text is displayed on Roku app page');
        await expect(rokuAppPage.rokuAppMainText).toBeVisible();
    });

    test('Open the "Android" app page from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click the "Apps" drop down button ');
        await homePage.appsDropDownButtonOnSidebar.click();

        console.log('Step 2: Click the "Android" app link');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.androidAppLinkOnDropDownMenuSidebar.click(),
        ]);

        await newTab.waitForLoadState();
        const androidAppPage = new AndroidAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        expect(newTab.url()).toMatch(androidAppPage.regexAndroidAppPageURL);

        console.log('Assert test 2: The "Android" app page title is displayed');
        expect(await newTab.title()).toMatch(androidAppPage.androidAppPageTitle);
    });

    test('Open the "iPhone" app page from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click the "Apps" drop down button ');
        await homePage.appsDropDownButtonOnSidebar.click();

        console.log('Step 2: Click the "iPhone" app link');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.iPhoneAppLinkOnDropDownMenuSidebar.click(),
        ]);

        await newTab.waitForLoadState();
        const iPhoneAppPage = new IPhoneAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(iPhoneAppPage.regexiPhoneAppPageURL);

        console.log('Assert test 2: The "iTunce" main text is displayed');
        await expect(await iPhoneAppPage.iPhoneAppMainText).toBeVisible();
    });

    test('Open the "Apple TV" app page from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click the "Apps" drop down button ');
        await homePage.appsDropDownButtonOnSidebar.click();

        console.log('Step 2: Click the "Apple TV" app link');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.appleTvAppLinkOnDropDownMenuSidebar.click(),
        ]);

        await newTab.waitForLoadState();
        const iPhoneAppPage = new IPhoneAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(iPhoneAppPage.regexiPhoneAppPageURL);

        console.log('Assert test 2: The "iTunce" main text is displayed');
        await expect(await iPhoneAppPage.iPhoneAppMainText).toBeVisible();
    });

    test('Open the "Fire TV" app page from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Click the "Apps" drop down button ');
        await homePage.appsDropDownButtonOnSidebar.click();

        console.log('Step 2: Click the "Fire TV" app link');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await homePage.fireTvAppLinkOnDropDownMenuSidebar.click(),
        ]);

        await newTab.waitForLoadState();
        const fireTVAppPage = new FireTVAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(fireTVAppPage.regexFireTVAppPageURL);

        console.log('Assert test 2: The "Fire TV" main text is displayed');
        await expect(await newTab.title()).toBe(fireTVAppPage.fireTVAppPageTitle);
    });
});

test.describe('Apps on the "APP" page', () => {
    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`PreCondition 2: Open the "App" page : ${testInfo.title}`);
        const homePage = new HomePage(page);
        const appsPage = new AppsPage(page);

        await homePage.appsHeaderButton.click();
        await appsPage.appsMainText.waitFor();
        await appsPage.scrollText.scrollIntoViewIfNeeded();
    });

    test('Open "Roku" page from the "App" page', async ({ page }) => {
        const appsPage = new AppsPage(page);

        console.log('Step 1: Click the "Roku" app icon');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await appsPage.rokuAppIcon.click(),
        ]);

        await newTab.waitForLoadState();
        const rokuAppPage = new RokuAppPage(newTab);

        console.log('Assert test 1: New tab with the correct URL open');
        expect(newTab.url()).toMatch(rokuAppPage.regexRokuAppPageURL);

        console.log('Assert test 2: Main text is displayed on Roku app page');
        await expect(rokuAppPage.rokuAppMainText).toBeVisible();
    });
    test('Open "Android" page from the "App" page', async ({ page }) => {
        const appsPage = new AppsPage(page);

        console.log('Step 1: Click the "Android" app icon');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await appsPage.androidAppIcon.click(),
        ]);

        await newTab.waitForLoadState();
        const androidAppPage = new AndroidAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        expect(newTab.url()).toMatch(androidAppPage.regexAndroidAppPageURL);

        console.log('Assert test 2: The "Android" app page title is displayed');
        expect(await newTab.title()).toMatch(androidAppPage.androidAppPageTitle);
    });

    test('Open "Apple" page from the "App" page', async ({ page }) => {
        const appsPage = new AppsPage(page);

        console.log('Step 1: Click the "Apple" app icon');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await appsPage.appleAppIcon.click(),
        ]);

        await newTab.waitForLoadState();
        const iPhoneAppPage = new IPhoneAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(iPhoneAppPage.regexiPhoneAppPageURL);

        console.log('Assert test 2: The "iTunce" main text is displayed');
        await expect(await iPhoneAppPage.iPhoneAppMainText).toBeVisible();
    });

    test('Open "Apple TV" page from the "App" page', async ({ page }) => {
        const appsPage = new AppsPage(page);

        console.log('Step 1: Click the "Apple TV" app icon');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await appsPage.appleTvAppIcon.click(),
        ]);

        await newTab.waitForLoadState();
        const iPhoneAppPage = new IPhoneAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(iPhoneAppPage.regexiPhoneAppPageURL);

        console.log('Assert test 2: The "iTunce" main text is displayed');
        await expect(await iPhoneAppPage.iPhoneAppMainText).toBeVisible();
    });

    test('Open "Fire TV" page from the "App" page', async ({ page }) => {
        const appsPage = new AppsPage(page);

        console.log('Step 1: Click the "Apple TV" app icon');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await appsPage.fireTvAppIcon.click(),
        ]);

        await newTab.waitForLoadState();
        const fireTVAppPage = new FireTVAppPage(newTab);

        console.log('Assert test 1: New tab have the correct URL');
        await expect(newTab.url()).toMatch(fireTVAppPage.regexFireTVAppPageURL);

        console.log('Assert test 2: The "Fire TV" main text is displayed');
        await expect(await newTab.title()).toBe(fireTVAppPage.fireTVAppPageTitle);
    });
});

test.describe('Footer apps', () => {
    test('Open "Apps" page from Footer', async ({ page }) => {
        const homePage = new HomePage(page);
        const appsPage = new AppsPage(page);

        console.log('Step 1: Click the "Download" button on header');

        await homePage.downloadNowButtonOnFooter.scrollIntoViewIfNeeded();
        await homePage.downloadNowButtonOnFooter.click();

        console.log('Assert tests: The "App" page have correct url and title');
        await expect(page).toHaveURL(appsPage.urlAppPage);
        await expect(page).toHaveTitle(appsPage.appsTitle);
    });
});

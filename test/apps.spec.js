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

    await testValue.open_Dev_Url();
    await projectPasswordPage.enterProjectPaswordOnDev();
    await homePage.homeTitle.waitFor();
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

        console.log('Assert test 2: The "iPhone" main text is displayed');
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

        console.log('Assert test 2: The "Apple TV" main text is displayed');
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

test.describe('Sidebar apps', () => {

});

test.describe(' Apps on the "APP" page', () => {

});

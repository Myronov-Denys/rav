const { test, expect } = require('@playwright/test');
const { AppsPage } = require('./pages/appsPage');
const { HomePage } = require('./pages/homePage');
const { ProjectPasswordPage } = require('./pages/projectPasswordPage');
const { RokuAppPage } = require('./pages/rokuAppPage');
const { TestValue } = require('./pages/testValue');

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`enter Project Password  ${testInfo.title}`);
    const testValue = new TestValue(page);
    const projectPasswordPage = new ProjectPasswordPage(page);
    const homePage = new HomePage(page);

    await testValue.open_Dev_Url();
    await projectPasswordPage.enterProjectPaswordOnDev();
    await homePage.homeTitle.waitFor();
});

test.describe('Header apps', () => {


    test('Open shows from header', async ({ page }) => {
        const homePage = new HomePage(page)
        const appsPage = new AppsPage(page)

        await homePage.appsHeaderButton.click();
        await expect(appsPage.appsTitle).toBeVisible();
    });

    test('Open the "Apps" drop down menu from header', async ({ page }) => {
        const homePage = new HomePage(page);

        await expect(homePage.appsDropDownMenuOnHeader).toBeHidden();
        await homePage.appsHeaderButton.hover();
        await expect(homePage.appsDropDownMenuOnHeader).toBeVisible();
    });

    test('Open the "Roku" app from drop down menu on header', async ({ page }) => {
        const homePage = new HomePage(page);
        const appsPage = new AppsPage(page);
        const testValue = new TestValue(page);

        console.log('Step 1: Hover to the "App" button on header');
        await homePage.appsHeaderButton.hover();

        console.log('Step 2: Click the "Roku" app link on header ');
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            homePage.rokuAppOnHeader.click(),
        ]);
        await newTab.waitForLoadState();

        console.log('Assert test: New tab with the correct URL open');
        expect(newTab.url()).toContain(testValue.rokuAppUrl);
    });


    test.only('test', async ({ page }) => {
        const homePage = new HomePage(page)
        const appsPage = new AppsPage(page)
        const testValue = new TestValue(page);

        await homePage.appsHeaderButton.hover();

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            homePage.rokuAppOnHeader.click(),
        ]);


        await newTab.waitForLoadState();

        const rokuAppPage = new RokuAppPage(newTab);

        await expect(newTab.url()).toContain(testValue.rokuAppUrl);

        await expect(rokuAppPage.rokuAppTitleh1).toBeVisible();








        // expect(newTab.url()).toContain(testValue.rokuAppUrl);
        //expect(rokuAppPage.rokuAppTitleh1).toBeVisible();


        //console.log(newTab, page);
        //console.log(newTab.constructor, page.constructor);



        // console.log("Title for roku page: " +  newTab.url());
        //console.log("Title for 1 page: " + await page.title());
        //console.log("Title for new page: " + await newTab.title());


        //await expect(newTab.locator("//h1[contains(text(),'Voice')]")).toBeVisible();
        //await expect(newTab.locator(appsPage.rokuAppTitleh1)).toHaveText("Real America\'s Voice");

        //await expect(rokuAppPage.rokuAppTitleh1).toEqual('Real America\'s Voice');


    });



});
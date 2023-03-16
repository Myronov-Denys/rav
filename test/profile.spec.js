const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/homePage');
const { ProjectPasswordPage } = require('./pages/projectPasswordPage');
const { SignInPage } = require('./pages/signInPage');
const { TestValue } = require('./pages/testValue');

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`PreCondition : Enter the project password and then run the test : ${testInfo.title}`);
    const testValue = new TestValue(page);
    const projectPasswordPage = new ProjectPasswordPage(page);
    const homePage = new HomePage(page);

    await testValue.open_Dev_Url();
    await projectPasswordPage.enterProjectPaswordOnDev();
    await homePage.homeTitle.waitFor();
    await homePage.clickCloseCookieBar();
});

test.describe('Header profile', () => {
    test('Open profile popup window from header', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Hover to "Profile" icon on header');
        await homePage.hoverToProfileIconHeader();

        // Asserts

        console.log('Assert tests: The profile popup window from header are displayed');
        await expect(homePage.loginButtonOnProfilePopUpWindowOnHeader).toBeVisible();
        await expect(homePage.createNewAccountButtonOnProfilePopUpWindowOnHeader).toBeVisible();
        await expect(homePage.youAreNotLoggedInTextOnProfilePopUpWindowOnHeader).toBeVisible();
        await expect(homePage.profileIconOnProfilePopUpWindowOnHeader).toBeVisible();
    });

    test('Open login page from header', async ({ page }) => {
        const homePage = new HomePage(page);
        const signInPage = new SignInPage(page);

        console.log('Step 1: Hover to "Profile" icon on header');
        await homePage.hoverToProfileIconHeader();

        console.log('Step 2: Click a "Login" button on header');
        await homePage.clickLoginButtonOnHeader();

        console.log('Assert tests: The "Login" page is open');
        await expect(signInPage.signInTitle).toBeVisible();
        await expect(signInPage.emailField).toBeVisible();
        await expect(signInPage.passwordField).toBeVisible();
    });
});

test.describe('Sidebar profile', () => {
    test('Open profile popup window from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Open sidebar');
        await homePage.clickSideBarMenu();

        console.log('Step 1: Hover to "Profile" icon on sidebar');
        await homePage.hoverToProfileIconSidebar();

        // Asserts

        console.log('Assert tests: The profile popup window from sidebar are displayed');
        await expect(homePage.loginButtonOnProfilePopUpWindowOnSidebar).toBeVisible();
        await expect(homePage.createNewAccountButtonOnProfilePopUpWindowOnSidebar).toBeVisible();
        await expect(homePage.youAreNotLoggedInTextOnProfilePopUpWindowOnSidebar).toBeVisible();
        await expect(homePage.profileIconOnProfilePopUpWindowOnSidebar).toBeVisible();
    });
});

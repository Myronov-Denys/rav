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

    test('Open login page from header via profile popup window', async ({ page }) => {
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
        await expect(signInPage.signInButton).toBeVisible();
    });

    test('Open login page from header via profile button', async ({ page }) => {
        const homePage = new HomePage(page);
        const signInPage = new SignInPage(page);

        console.log('Step 1: Click to "Profile" icon on header');
        await homePage.clickProfileInHeader();

        console.log('Assert tests: The "Login" page is open');
        await expect(signInPage.signInTitle).toBeVisible();
        await expect(signInPage.emailField).toBeVisible();
        await expect(signInPage.passwordField).toBeVisible();
        await expect(signInPage.signInButton).toBeVisible();
    });
});

test.describe('Sidebar profile', () => {
    test('Open profile popup window from sidebar', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Step 1: Open sidebar');
        await homePage.clickSideBarMenu();

        console.log('Step 2: Hover to "Profile" icon on sidebar');
        await homePage.hoverToProfileIconSidebar();

        // Asserts

        console.log('Assert tests: The profile popup window from sidebar are displayed');
        await expect(homePage.loginButtonOnProfilePopUpWindowOnSidebar).toBeVisible();
        await expect(homePage.createNewAccountButtonOnProfilePopUpWindowOnSidebar).toBeVisible();
        await expect(homePage.youAreNotLoggedInTextOnProfilePopUpWindowOnSidebar).toBeVisible();
        await expect(homePage.profileIconOnProfilePopUpWindowOnSidebar).toBeVisible();
    });

    test('Open login page from sidebar via profile popup window', async ({ page }) => {
        const homePage = new HomePage(page);
        const signInPage = new SignInPage(page);

        console.log('Step 1: Open sidebar');
        await homePage.clickSideBarMenu();

        console.log('Step 2: Hover to "Profile" icon on sidebar');
        await homePage.hoverToProfileIconSidebar();

        console.log('Step 3: Click a "Login" button on sidebar');
        await homePage.clickLoginButtonOnSidebar();

        console.log('Assert tests: The "Login" page is open');
        await expect(signInPage.signInTitle).toBeVisible();
        await expect(signInPage.emailField).toBeVisible();
        await expect(signInPage.passwordField).toBeVisible();
        await expect(signInPage.signInButton).toBeVisible();
    });

    test('Open login page from sidebar via profile button', async ({ page }) => {
        const homePage = new HomePage(page);
        const signInPage = new SignInPage(page);

        console.log('Step 1: Open sidebar');
        await homePage.clickSideBarMenu();

        console.log('Step 2: Click a "Profile" button on sidebar');
        await homePage.clickProfileIconOnSidebar();

        console.log('Assert tests: The "Login" page is open');
        await expect(signInPage.signInTitle).toBeVisible();
        await expect(signInPage.emailField).toBeVisible();
        await expect(signInPage.passwordField).toBeVisible();
        await expect(signInPage.signInButton).toBeVisible();
    });
});

// Profile page

test.describe('General Information', () => {
    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`PreCondition 2: Log in and open "Profile" page : ${testInfo.title}`);
        const signInPage = new SignInPage(page);

        await signInPage.logIn();
    });

    test.only('The "First Name" field maximum allowed number of characters', async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.clickProfileInHeader();
    });
});

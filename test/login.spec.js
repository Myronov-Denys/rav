/* eslint-disable max-len */
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

    console.log('Open Login page');
    await homePage.clickProfileInHeader();
});

test.describe('Valid login', () => {
    test('Valid login via email and pass', async ({ page }) => {
        const signInPage = new SignInPage(page);
        const homePage = new HomePage(page);
        const testValue = new TestValue(page);

        console.log('Step 1: Enter valid email in field');
        await signInPage.enterValidEmail();

        console.log('Step 2: Enter valid password in field');
        await signInPage.enterValidPassword();

        console.log('Step 3: Click the "Sign in" button');
        await signInPage.signInButton.click();
        await page.waitForLoadState();

        console.log('Step 4: Hover to "Profile" icon on header');
        await homePage.hoverToProfileIconHeader();

        // Asserts

        console.log('Assert tests: The profile popup window from header are displayed');
        await expect(homePage.loggedInUserEmailOnHeaderProfileWindow).toHaveText(testValue.validEmail);
    });
});

test.describe('Invalid login', () => {
    test('Login with incorrect email (without @)', async ({ page }) => {
        const signInPage = new SignInPage(page);
        const homePage = new HomePage(page);
        const testValue = new TestValue(page);

        console.log('Step 2: Enter email without @ on the "Email" field');
        await signInPage.enterEmailWithoutAt();

        console.log('Step 3: Enter a valid Password');
        await signInPage.enterValidPassword();

        console.log('Step 4: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Step 5: Wait the error message');

        console.log('Assert tests');
    });

    test('Login with incorrect email (with double @)', async ({ page }) => {

    });

    test('Login with incorrect email (without domen)', async ({ page }) => {

    });

    test('Login with incorrect email (with extra letters)', async ({ page }) => {

    });

    test('Login with not registered email)', async ({ page }) => {

    });

    test('Login with incorrect password)', async ({ page }) => {

    });

    test('Login with empty email field)', async ({ page }) => {
        console.log('Step 1: Enter a Valid Password');

        console.log('Step 2: Click the "Sign In" button');

        console.log('Assert tests');
    });

    test('Login with empty password field)', async ({ page }) => {

    });

    test('Login with empty email and password)', async ({ page }) => {

    });

    test('Enter email in password field and password in email field)', async ({ page }) => {

    });
});

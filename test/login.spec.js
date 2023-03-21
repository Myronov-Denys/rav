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

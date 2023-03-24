/* eslint-disable max-len */
const { test, expect } = require('@playwright/test');
const { sign } = require('crypto');
// const { sign } = require('crypto');
const { HomePage } = require('./pages/homePage');
const { ProjectPasswordPage } = require('./pages/projectPasswordPage');
const { SignInPage } = require('./pages/signInPage');
const { TestValue } = require('./pages/testValue');

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`PreCondition 1: Enter the project password and then run the test : ${testInfo.title}`);
    const testValue = new TestValue(page);
    const projectPasswordPage = new ProjectPasswordPage(page);
    const homePage = new HomePage(page);

    await testValue.open_Dev_Url();
    await projectPasswordPage.enterProjectPaswordOnDev();
    await homePage.homeTitle.waitFor();
    await homePage.clickCloseCookieBar();

    console.log('PreCondition 2: Open Login page');
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

        console.log('Step 1: Enter email without @ on the "Email" field');
        await signInPage.enterEmailWithoutAt();

        console.log('Step 2: Enter a valid Password');
        await signInPage.enterValidPassword();

        await expect(await signInPage.incorrectUsernameOrPasswordErrorMessage).not.toBeVisible();

        console.log('Step 3: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Assert tests: Incorrect username or password error message is displayed');

        await expect(await signInPage.incorrectUsernameOrPasswordErrorMessage).toBeVisible();
        await expect(await homePage.homeTitle).not.toBeVisible();
    });

    test('Login with incorrect email (with double @@)', async ({ page }) => {
        const signInPage = new SignInPage(page);
        const testValue = new TestValue(page);

        console.log('Step 1: Enter email with @@ on the "Email" field');
        await signInPage.emailField.fill(testValue.emailWithDoubleAt);

        console.log('Step 2: Enter a valid Password');
        await signInPage.enterValidPassword();

        console.log('Step 3: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Assert tests: Incorrect username or password error message is displayed');

        await expect(await signInPage.incorrectUsernameOrPasswordErrorMessage).toBeVisible();
    });

    test('Login with incorrect email (without domen)', async ({ page }) => {
        const signInPage = new SignInPage(page);
        const testValue = new TestValue(page);

        console.log('Step 1: Enter email without domen on the "Email" field');
        await signInPage.emailField.fill(testValue.emailWithoutDomen);

        console.log('Step 2: Enter a valid Password');
        await signInPage.enterValidPassword();

        console.log('Step 3: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Assert tests: Incorrect username or password error message is displayed');

        await expect(await signInPage.incorrectUsernameOrPasswordErrorMessage).toBeVisible();
    });

    test('Login with incorrect email (with extra letters)', async ({ page }) => {
        const signInPage = new SignInPage(page);

        console.log('Step 1: Enter email without domen on the "Email" field');
        await signInPage.emailField.fill('1234test667890@');

        console.log('Step 2: Enter a valid Password');
        await signInPage.enterValidPassword();

        console.log('Step 3: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Assert tests: Incorrect username or password error message is displayed');

        await expect(await signInPage.incorrectUsernameOrPasswordErrorMessage).toBeVisible();
    });

    test('Login with not registered email', async ({ page }) => {
        const signInPage = new SignInPage(page);
        const testValue = new TestValue(page);

        console.log('Step 1: Enter email without domen on the "Email" field');

        await signInPage.emailField.fill(testValue.notRegisteredEmail);

        console.log('Step 2: Enter a valid Password');
        await signInPage.enterValidPassword();

        console.log('Step 3: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Assert tests: Incorrect username or password error message is displayed');

        await expect(await signInPage.incorrectUsernameOrPasswordErrorMessage).toBeVisible();
    });

    test('Login with incorrect password', async ({ page }) => {
        const signInPage = new SignInPage(page);

        console.log('Step 1: Enter email without domen on the "Email" field');
        await signInPage.enterValidEmail();

        console.log('Step 2: Enter a valid Password');
        await signInPage.enetrInvalidPasswordOnPasswordField();

        console.log('Step 3: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Assert tests: Incorrect username or password error message is displayed');

        await expect(await signInPage.incorrectUsernameOrPasswordErrorMessage).toBeVisible();
    });

    test('Login with incorrect password (2 chapters)', async ({ page }) => {
        const signInPage = new SignInPage(page);

        console.log('Step 1: Enter email without domen on the "Email" field');
        await signInPage.enterValidEmail();

        console.log('Step 2: Enter a valid Password');
        await signInPage.passwordField.fill('12');

        console.log('Step 3: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Assert tests: Incorrect username or password error message is displayed');

        await expect(await signInPage.incorrectUsernameOrPasswordErrorMessage).toBeVisible({ timeout: 10000 });
    });

    test('Login with empty email field', async ({ page }) => {
        const signInPage = new SignInPage(page);

        console.log('Step 1: Enter a Valid Password');
        await signInPage.enterValidPassword();

        console.log('Step 2: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Assert tests');

        await expect(signInPage.emailField).toHaveJSProperty('validationMessage', 'Please fill out this field.');
        await expect(signInPage.emailField).toHaveJSProperty('value', '');
    });

    test('Login with empty password field', async ({ page }) => {
        const signInPage = new SignInPage(page);

        console.log('Step 1: Enter a valid email');
        await signInPage.enterValidEmail();

        console.log('Step 2: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Assert tests');

        await expect(signInPage.passwordField).toHaveJSProperty('validationMessage', 'Please fill out this field.');
        await expect(signInPage.passwordField).toHaveJSProperty('value', '');
    });

    test('Login with empty email and password', async ({ page }) => {
        const signInPage = new SignInPage(page);
        const homePage = new HomePage(page);

        console.log('Step 1: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Assert tests');

        await expect(await homePage.homeTitle).not.toBeVisible();

        await expect(signInPage.passwordField).toHaveJSProperty('value', '');
        await expect(signInPage.emailField).toHaveJSProperty('value', '');
    });

    test('Enter email in password field and password in email field', async ({ page }) => {
        const signInPage = new SignInPage(page);
        const homePage = new HomePage(page);
        const testValue = new TestValue(page);

        console.log('Step 1: Enter email in password field');
        await signInPage.passwordField.fill(testValue.validEmail);

        console.log('Step 2: Enter password in email field');
        await signInPage.emailField.fill(testValue.validPassword);

        console.log('Step 2: Click the "Sign In" button');
        await signInPage.clickSignInButton();

        console.log('Assert tests');

        await expect(await homePage.homeTitle).not.toBeVisible();
        await expect(await signInPage.incorrectUsernameOrPasswordErrorMessage).toBeVisible();
    });
});

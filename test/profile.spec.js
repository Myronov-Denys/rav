/* eslint-disable max-len */
const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/homePage');
const { ProjectPasswordPage } = require('./pages/projectPasswordPage');
const { SignInPage } = require('./pages/signInPage');
const { TestValue } = require('./pages/testValue');
const { ProfileGeneralInformationPage } = require('./pages/ProfilePages/profileGeneralInformationPage');

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`PreCondition 1: Enter the project password and then run the test : ${testInfo.title}`);
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
        const homePage = new HomePage(page);

        await signInPage.logIn();
        await homePage.clickProfileInHeader();
    });
    test.describe('Maximum allowed number of characters tests', () => {
        test('The maximum number of characters allowed in the "First Name" field.', async ({ page }) => {
            const profileGeneralInformationPage = new ProfileGeneralInformationPage(page);

            console.log('Step 1: Enter in the "First Name" field more than 50 characters');
            await profileGeneralInformationPage.enter51CharactersInTheFirstNameField();

            console.log('Assert tests');

            await expect(profileGeneralInformationPage.firstNameField).toBeVisible({ timeout: 10000 });
            await expect(profileGeneralInformationPage.maxLengthFirstNameErrorMessage).toBeVisible({ timeout: 3000 });
            await expect(profileGeneralInformationPage.maxLengthFirstNameErrorMessage).toHaveText('Max length 50 characters');
            await expect(profileGeneralInformationPage.firstNameField).toHaveJSProperty('className', 'form-control is-invalid');

            await profileGeneralInformationPage.scrollToSaveButton();
            await expect(profileGeneralInformationPage.saveButton).toBeDisabled();
        });

        test('The maximum number of characters allowed in the "Last Name" field.', async ({ page }) => {
            const profileGeneralInformationPage = new ProfileGeneralInformationPage(page);

            console.log('Step 1: Enter in the "Last Name" field more than 50 characters');
            await profileGeneralInformationPage.enter51CharactersInTheLastNameField();

            console.log('Assert tests');

            await expect(profileGeneralInformationPage.lastNameField).toBeVisible({ timeout: 10000 });
            await expect(profileGeneralInformationPage.maxLengthLastNameErrorMessage).toBeVisible({ timeout: 3000 });
            await expect(profileGeneralInformationPage.maxLengthLastNameErrorMessage).toHaveText('Max length 50 characters');
            await expect(profileGeneralInformationPage.lastNameField).toHaveJSProperty('className', 'form-control is-invalid');

            await profileGeneralInformationPage.scrollToSaveButton();
            await expect(profileGeneralInformationPage.saveButton).toBeDisabled();
        });

        test('The maximum number of characters allowed in the "Nickname" field.', async ({ page }) => {
            const profileGeneralInformationPage = new ProfileGeneralInformationPage(page);

            console.log('Step 1: Enter in the "Nickname" field more than 50 characters');
            await profileGeneralInformationPage.enter51CharactersInTheNicknameField();

            console.log('Assert tests');

            await expect(profileGeneralInformationPage.nicknameField).toBeVisible({ timeout: 10000 });
            await expect(profileGeneralInformationPage.maxLengthNicknameErrorMessage).toBeVisible({ timeout: 3000 });
            await expect(profileGeneralInformationPage.maxLengthNicknameErrorMessage).toHaveText('Max length 50 characters');
            await expect(profileGeneralInformationPage.nicknameField).toHaveJSProperty('className', 'mb-1 form-control is-invalid');
        });

        test('The maximum number of characters allowed in the "Status" field.', async ({ page }) => {
            const profileGeneralInformationPage = new ProfileGeneralInformationPage(page);

            console.log('Step 1: Enter in the "Status" field 100 characters');
            await profileGeneralInformationPage.enter100CharactersInTheStatusField();

            console.log('Assert test: Errore message is not displayed');
            await expect(profileGeneralInformationPage.maxLength100CharactersOnStatusErrorMessage).not.toBeVisible();
            await expect(profileGeneralInformationPage.statusOnProfileCard).toHaveText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam non facilisis ligula. Fusce euismod dia!');
            await expect(profileGeneralInformationPage.statusField).toHaveText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam non facilisis ligula. Fusce euismod dia!');
            await expect(profileGeneralInformationPage.statusField).not.toHaveJSProperty('className', 'mb-1 form-control is-invalid');
            // await page.locator(profileGeneralInformationPage.saveButton).scrollIntoViewIfNeeded();
            await profileGeneralInformationPage.scrollToSaveButton();
            await expect(profileGeneralInformationPage.saveButton).toBeEnabled();

            console.log("Step 2: Enter 2 more characters in the 'Status' field");
            await profileGeneralInformationPage.enter102CharactersInTheStatusField();

            console.log('Assert tests: Max length status error message');

            await expect(profileGeneralInformationPage.maxLength100CharactersOnStatusErrorMessage).toBeVisible({ timeout: 10000 });
            await expect(profileGeneralInformationPage.maxLength100CharactersOnStatusErrorMessage).toHaveText('Max length 100 characters');
            await expect(profileGeneralInformationPage.statusField).toHaveJSProperty('className', 'mb-1 form-control is-invalid');
            await expect(profileGeneralInformationPage.statusOnProfileCard).toHaveText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam non facilisis ligula. Fusce euismod dia!1');
            await expect(profileGeneralInformationPage.statusField).not.toHaveText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam non facilisis ligula. Fusce euismod dia!12');
            await expect(profileGeneralInformationPage.saveButton).toBeDisabled();
        });
    });

    test.describe('Enter HTML tags in profile fields', () => {
        test('Enter HTML tags in the "First Name" field', async ({ page }) => {
            const profileGeneralInformationPage = new ProfileGeneralInformationPage(page);

            console.log('Step 1: Enter a HTML link in "First Name" field');
            await profileGeneralInformationPage.enterHTMLTagsInTheFirstNameField();

            console.log('Assert tests');

            await expect(profileGeneralInformationPage.firstNameField).toHaveValue('link');
            await expect(profileGeneralInformationPage.saveButton).toBeEnabled();
        });

        test('Enter HTML tags in the "Last Name" field', async ({ page }) => {
            const profileGeneralInformationPage = new ProfileGeneralInformationPage(page);

            console.log('Step 1: Enter a HTML link in the "Last Name" field');
            await profileGeneralInformationPage.enterHTMLTagsInTheLastNameField();

            console.log('Assert tests');

            await expect(profileGeneralInformationPage.lastNameField).toHaveValue('link');
            await expect(profileGeneralInformationPage.saveButton).toBeEnabled();
        });

        test('Enter HTML tags in the "Nickname" field', async ({ page }) => {
            const profileGeneralInformationPage = new ProfileGeneralInformationPage(page);

            console.log('Step 1: Enter a HTML link in the "Nickname" field');
            await profileGeneralInformationPage.enterHTMLTagsInTheNicknameField();

            console.log('Assert tests');

            await expect(profileGeneralInformationPage.nicknameField).toHaveValue('link');
            await expect(profileGeneralInformationPage.nicknameOnProfileCard).toHaveText('@link');
            await expect(profileGeneralInformationPage.saveButton).toBeEnabled();
        });

        test('Enter HTML tags in the Social fields', async ({ page }) => {
            const profileGeneralInformationPage = new ProfileGeneralInformationPage(page);

            console.log('Step 1: Enter a HTML link in the "Facebook" field');
            await profileGeneralInformationPage.enterHTMLTagsInTheFacebookField();

            console.log('Step 2: Enter a HTML link in the "Twitter" field');
            await profileGeneralInformationPage.enterHTMLTagsInTheTwitterField();

            console.log('Step 3: Enter a HTML link in the "Instagram" field');
            await profileGeneralInformationPage.enterHTMLTagsInTheInstagramField();

            console.log('Step 4: Enter a HTML link in the "LinkedIn" field');
            await profileGeneralInformationPage.enterHTMLTagsInTheLinkedinField();

            console.log('Assert tests');

            // Fields have correct text
            await expect(profileGeneralInformationPage.facebookSocialField).toHaveValue('link');
            await expect(profileGeneralInformationPage.instagramSocialField).toHaveValue('link');
            await expect(profileGeneralInformationPage.twitterSocialField).toHaveValue('link');
            await expect(profileGeneralInformationPage.linkedinSocialField).toHaveValue('link');

            // Error message is displayed
            await expect(profileGeneralInformationPage.incorrectFacebookUrlErrorMessage).toBeVisible();
            await expect(profileGeneralInformationPage.incorrectTwitterUrlErrorMessage).toBeVisible();
            await expect(profileGeneralInformationPage.incorrectInstagramUrlErrorMessage).toBeVisible();
            await expect(profileGeneralInformationPage.incorrectLinkedinUrlErrorMessage).toBeVisible();

            // Example is displayed
            await expect(profileGeneralInformationPage.facebookExampleOfURL).toBeVisible();
            await expect(profileGeneralInformationPage.twitterExampleOfURL).toBeVisible();
            await expect(profileGeneralInformationPage.instagramExampleOfURL).toBeVisible();
            await expect(profileGeneralInformationPage.linkedinExampleOfURL).toBeVisible();

            // Save button is not active
            await expect(profileGeneralInformationPage.saveButton).toBeDisabled();
        });

        test('Enter HTML tags in the "Status" field', async ({ page }) => {
            const profileGeneralInformationPage = new ProfileGeneralInformationPage(page);

            console.log('Step 1: Enter a HTML link in the "Status" field');
            await profileGeneralInformationPage.enterHTMLTagsInTheStatusField();

            console.log('Assert tests');

            await expect(profileGeneralInformationPage.statusField).toHaveText('link');
            await expect(profileGeneralInformationPage.statusOnProfileCard).toHaveText('link');
            await expect(profileGeneralInformationPage.saveButton).toBeEnabled();
        });
    });
    test.describe('Paste social links on social fields', () => {
        test(' Paste valid HTTPS social links on social field', async ({ page }) => {
            const profileGeneralInformationPage = new ProfileGeneralInformationPage(page);

            console.log('Step 1: Enter HTTPS social links in the social fields');
            await profileGeneralInformationPage.enterHTMLTagsInTheStatusField();

            console.log('Assert tests');

            await expect(profileGeneralInformationPage.statusField).toHaveText('link');
            await expect(profileGeneralInformationPage.statusOnProfileCard).toHaveText('link');
            await expect(profileGeneralInformationPage.saveButton).toBeEnabled();
        });
    });
});

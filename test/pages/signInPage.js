const { expect } = require('@playwright/test');
const { TestValue } = require('./testValue');
const { HomePage } = require('./homePage');

exports.SignInPage = class SignInPage {
    constructor(page) {
        this.page = page;

        // Sign in with your email and password SECTION

        // Elements
        this.signInTitle = page.locator("//div[@class='panel panel-left-border col-md-6 col-lg-6']//span[@class='textDescription-customizable ']");
        this.emailField = page.locator("//div[@class='panel panel-left-border col-md-6 col-lg-6']//input[@id='signInFormUsername']");
        this.passwordField = page.locator("//div[@class='panel panel-left-border col-md-6 col-lg-6']//input[@id='signInFormPassword']");
        this.signInButton = page.locator('//div[@class="panel panel-left-border col-md-6 col-lg-6"]//input[@name="signInSubmitButton"]');

        // Errore message
        this.incorrectUsernameOrPasswordErrorMessage = page.locator('//div[contains(@class,"panel panel-left-border")]//p[@id="loginErrorMessage"]');

        // Sign In with your social account SECTION
        this.continueWithGoogleButton = page.locator("//div[contains(@class,'panel panel-right-border')]//button[@name='googleSignUpButton']");
    }

    // Actions

    async enterValidEmail() {
        const testValue = new TestValue(this.page);
        await this.emailField.fill(testValue.validEmail);
    }

    async enterEmailWithoutAt() {
        const testValue = new TestValue(this.page);
        await this.emailField.fill(testValue.emailWithoutAt);
    }

    async enterValidPassword() {
        const testValue = new TestValue(this.page);
        await this.passwordField.fill(testValue.validPassword);
    }

    async enetrInvalidPasswordOnPasswordField() {
        const testValue = new TestValue(this.page);
        await this.passwordField.fill(testValue.invalidPassword);
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }

    async logIn() {
        const homePage = new HomePage(this.page);
        await homePage.clickProfileInHeader();
        await this.enterValidEmail();
        await this.enterValidPassword();
        await this.clickSignInButton();
    }
};

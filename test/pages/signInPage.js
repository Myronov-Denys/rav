const { expect } = require('@playwright/test');

exports.SignInPage = class SignInPage {
    constructor(page) {
        this.page = page;

        // Elements
        this.signInTitle = page.locator("//div[@class='panel panel-left-border col-md-6 col-lg-6']//span[@class='textDescription-customizable ']");
        this.emailField = page.locator("//div[@class='panel panel-left-border col-md-6 col-lg-6']//input[@id='signInFormUsername']");
        this.passwordField = page.locator("//div[@class='panel panel-left-border col-md-6 col-lg-6']//input[@id='signInFormPassword']");
        this.signInButton = page.locator('//div[@class="panel panel-left-border col-md-6 col-lg-6"]//input[@name="signInSubmitButton"]');
    }

    // Actions
};

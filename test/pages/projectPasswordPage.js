const { expect } = require('@playwright/test');

exports.ProjectPasswordPage = class ProjectPasswordPage {
    constructor(page) {
        this.page = page;

        // Fields

        this.projectPasswordField = page.locator("//input[@aria-label='Username']");

        // Buttons
        this.enterProjectPasswordButton = page.locator("//button[@type='submit']");

        // Errore message //

        this.invalidProjectPasswordErrorMessage = page.locator("//small[@class='text-danger form-text']");
    }

    // Actions

    async click_enter_project_password_button() {
        await this.enterProjectPasswordButton.click();
    }

    async enterProjectPaswordOnDev() {
        await this.projectPasswordField.fill('123');
        await this.click_enter_project_password_button();
    }
};

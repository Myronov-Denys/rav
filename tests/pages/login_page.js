const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {

    constructor (page) {
        this.page = page;
        this.usernameFld = page.locator('#j_username') 
        this.passwordFld = page.locator('#j_password')
        this.loginBtn = page.getByRole('button', { name: 'Log in' })
        this.serrchUserFld = page.locator('(//button[@class="Polaris-TopBar-Menu__Activator"])[1]')
        this.errorMessageIncorrectEmailOroassword = page.locator('[data-test="error-section"] section:has-text("Incorrect username or password.")')
        this.rememberMeBtn = page.getByLabel('Remember me')
        this.showPasswordBtn = page.locator('#watch svg')
        this.forgotYourPasswordBtn = page.getByRole('link', { name: 'Forgot your password?' })
    }

    async goto() {
        await this.page.goto('https://hrm-dev.dev-test.pro/');
      }

    async waitForHrmURL() {
        await this.page.waitForHrmURL('https://hrm-dev.dev-test.pro/')
    }  

    async validLogin() {

        await this.usernameFld.fill('anton.dyachenko')
        await this.passwordFld.fill('e46i5G4u8fgrG')
        await this.page.getByLabel('Remember me').check()
        await this.loginBtn.click()
        await this.page.waitForURL('https://hrm-dev.dev-test.pro/');
        await this.serrchUserFld.click();
    }
}


// await page.goto('https://hrm-dev.dev-test.pro/')
// await page.locator('#j_username').fill('anton.dyachenko')
// await page.locator('#j_password').fill('e46i5G4u8fgrG')
// await page.getByLabel('Remember me').check()
// await page.getByRole('button', { name: 'Log in' }).click()
// await page.waitForURL('https://hrm-dev.dev-test.pro/')
// await page.locator('(//button[@class="Polaris-TopBar-Menu__Activator"])[1]').click();
//     await page.waitForTimeout(1000)
//     await page.getByRole('textbox', { name: 'Поиск' }).click();
//     await page.locator('textbox', { name: 'Поиск' })
//     await page.pause()
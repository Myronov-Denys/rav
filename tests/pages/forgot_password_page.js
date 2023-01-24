const {expect} = require('@playwright/test');
exports.ForgotPasswordPage = class ForgotPasswordPage {
    
    constructor(page) {
        this.page = page;
        this.usernameFldFP = page.locator('input[name="username"]')
        this.UserEmailFldFP = page.locator('input[name="email"]')
        this.sendEmailBtnFP = page.getByRole('button', { name: 'Send email' })
        this.forgottenMyPasswordChackboxFP = page.locator('text=I have forgotten my password')
        this.forgottenMyUsernameChackboxFP = page.locator('text=I have forgotten my username')
    }
}
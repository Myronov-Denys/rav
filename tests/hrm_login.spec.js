const {test, expect} = require('@playwright/test');
const { ForgotPasswordPage } = require('./pages/forgot_password_page');
const { LoginPage } = require('./pages/login_page');


test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Поиск сотрудника ${testInfo.title}`);
    const loginPage = new LoginPage(page) 
        await loginPage.goto();
})

test('Вход на страницу логина с валидными данными логина и пароля', async ({page})=> {
    const loginPage = new LoginPage(page)
    await loginPage.usernameFld.fill('anton.dyachenko')
    await loginPage.passwordFld.fill('e46i5G4u8fgrG')
    await loginPage.loginBtn.click()
    await page.waitForURL('https://hrm-dev.dev-test.pro/')

})
test('Вход на страницу логина с невалидными данными логина', async ({page})=> {
    const loginPage = new LoginPage(page)
    await loginPage.usernameFld.fill('qa')
    await loginPage.passwordFld.fill('e46i5G4u8fgrG')
    await loginPage.loginBtn.click()
    await page.locator('[data-test="error-section"] section:has-text("Incorrect username or password.")')
})

test('Вход на страницу логина с невалидными данными пароля', async ({page})=> {
    const loginPage = new LoginPage(page)
    await loginPage.usernameFld.fill('anton.dyachenko')
    await loginPage.passwordFld.fill('password')
    await loginPage.loginBtn.click()
    await page.locator('[data-test="error-section"] section:has-text("Incorrect username or password.")')
})

test('Проверка работы чекбокса Remember me', async ({page})=> {
    const loginPage = new LoginPage(page)
    await loginPage.usernameFld.fill('anton.dyachenko')
    await loginPage.passwordFld.fill('e46i5G4u8fgrG')
    await loginPage.rememberMeBtn.click()
    await loginPage.loginBtn.click()
    await page.waitForURL('https://hrm-dev.dev-test.pro/')
})

test('Проверка работы кнопки видимости пароля', async ({page})=> {      //TODO - додати елемент за яким буде видно пароль
    //TODO - ПОтрібно елемент за яким можлива перевірка Remember me функції
    const loginPage = new LoginPage(page)
    await loginPage.usernameFld.fill('anton.dyachenko')
    await loginPage.passwordFld.fill('e46i5G4u8fgrG')
    await loginPage.showPasswordBtn.click();
    await expect(page.locator('xpath=//input[@value="e46i5G4u8fgrG"]')).toBeVisible()
   
})

test('Проверка функции "Forgot your password?" - восстановление логина', async ({page})=> {
    const loginPage = new LoginPage(page)
    const forgotPasswordPage = new ForgotPasswordPage(page)

    await loginPage.forgotYourPasswordBtn.click()
    await forgotPasswordPage.forgottenMyPasswordChackboxFP.click()
    await forgotPasswordPage.usernameFldFP.fill('anton dyachenko');
    await forgotPasswordPage.sendEmailBtnFP.click()
    await expect(page.locator('text=Reset password!')).toBeVisible()


    // const loginPage = new LoginPage(page)
    
    // await loginPage.forgotYourPassword.click()
    // await page.getByLabel('I have forgotten my password').check()

    // await page.pause()
    // await forgotPasswordPage.usernameFldFP.click()
}) 

test('Проверка функции "I have forgotten my username" - восстановление логина', async ({page})=> {
    const loginPage = new LoginPage(page)
    const forgotPasswordPage = new ForgotPasswordPage(page)

    await loginPage.forgotYourPasswordBtn.click()
    await forgotPasswordPage.forgottenMyUsernameChackboxFP.click()
    await forgotPasswordPage.UserEmailFldFP.fill('anton.dyachenko@devit.group')
    await forgotPasswordPage.sendEmailBtnFP.click()
    await expect(page.locator('text=Retrieve username!')).toBeVisible()
}) 
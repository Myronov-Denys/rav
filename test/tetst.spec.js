const { test, expect } = require('@playwright/test');

const { ProjectPasswordPage } = require('./pages/projectPasswordPage');
const { TestValue } = require('./pages/testValue');
const { HomePage } = require('./pages/homePage');

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`enter Project Password  ${testInfo.title}`);
    const testValue = new TestVelue(page);
    //const projectPasswordPage = new ProjectPasswordPage(page);
    await testValue.open_Dev_Url();

});

  
 
   test('Enter valid project password', async ({ page }) => {
    const projectPasswordPage = new ProjectPasswordPage(page)
    const homePage = new HomePage(page)
    
    await projectPasswordPage.projectPasswordField.fill('123');
  
    await projectPasswordPage.click_enter_project_password_button();
    await homePage.homeTitle.waitFor();
    await expect(homePage.homeTitle).toBeVisible;
});
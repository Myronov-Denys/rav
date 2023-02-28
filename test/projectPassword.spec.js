// @Project password tests on Dev and Staging
const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/homePage');
const { ProjectPasswordPage } = require('./pages/projectPasswordPage');
const { TestValue } = require('./pages/testValue');

// pages

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`enter Project Password  ${testInfo.title}`);
  const testValue = new TestValue(page);
  await testValue.open_Dev_Url();
});

//test.describe('project password tests'), () => {

test.only('Enter valid project password', async ({ page }) => {
  const projectPasswordPage = new ProjectPasswordPage(page)
  const homePage = new HomePage(page)
  
  await projectPasswordPage.projectPasswordField.fill('123');

  await projectPasswordPage.click_enter_project_password_button();
  await homePage.homeTitle.waitFor();
  await expect(homePage.homeTitle).toBeVisible;
});


test('Enter invalid project password', async ({ page }) => {
  const projectPasswordPage = new ProjectPasswordPage(page)
  const homePage = new HomePage(page)

  await projectPasswordPage.projectPasswordField.fill('111')

  await projectPasswordPage.click_enter_project_password_button();

  await expect(projectPasswordPage.invalidProjectPasswordErrorMessage).toBeVisible();
  await expect(projectPasswordPage.invalidProjectPasswordErrorMessage).toHaveText('You input an invalid project password');
  await expect(homePage.homeTitle).not.toBeVisible()

});

test('Enter empty project password', async ({ page }) => {
  const projectPasswordPage = new ProjectPasswordPage(page)
  const homePage = new HomePage(page)

  await projectPasswordPage.projectPasswordField.fill('')

  await projectPasswordPage.click_enter_project_password_button()

  await expect(projectPasswordPage.invalidProjectPasswordErrorMessage).toHaveText('You input an invalid project password');


});


test('Enter valid project password with another chapters', async ({ page }) => {
  const projectPasswordPage = new ProjectPasswordPage(page)
  const homePage = new HomePage(page)

  await projectPasswordPage.projectPasswordField.fill('123456')

  await projectPasswordPage.click_enter_project_password_button()

  await expect(projectPasswordPage.invalidProjectPasswordErrorMessage).toHaveText('You input an invalid project password');

});

test('Enter project password by ckick "Enter" button', async ({ page }) => {
  const projectPasswordPage = new ProjectPasswordPage(page)
  const homePage = new HomePage(page)

  await projectPasswordPage.projectPasswordField.fill('123')

  await projectPasswordPage.enterProjectPasswordButton.press('Enter');

  await homePage.homeTitle.waitFor();
  await expect(homePage.homeTitle).toBeVisible();

});

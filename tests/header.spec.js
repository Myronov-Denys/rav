const {test, expect} = require('@playwright/test');
const { HeaderPage } = require('./pages/header_page');
const { LoginPage } = require('./pages/login_page');


/**
 *Хедер
 */

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Loin test ${testInfo.title}`);
    const loginPage = new LoginPage(page)
    const headerPage = new HeaderPage(page)
    await loginPage.goto()
    await loginPage.validLogin()
            await page.waitForTimeout(1000)
            await page.getByRole('textbox', { name: 'Поиск' }).click();
            await page.locator('textbox', { name: 'Поиск' })

               
})

/**
 * Logo DevIT
 */
 test('Logo DevIT', async({page}) => {
  const headerPage = new HeaderPage(page)
  await headerPage.AddUserBtn.click()
  await headerPage.homePagelink.click();
  await expect(page).toHaveURL('https://hrm-dev.dev-test.pro/') 
 })

/**
 * Выход из учетной записи
 */
 test('Выход из учетной записи', async({page}) => {
  const headerPage = new HeaderPage(page)
  await headerPage.userLogo.click()
  await page.waitForTimeout(500)
  await headerPage.clkLogOutBtn
  await page.waitForURL('https://id.devit-team.com/crowd/console/login.action#/');
 })

/**
 *  Работа dropdown menu и ее элементов
 */
test('Работа dropdown menu - Устав компании ', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Устав компании' }).click()
  ]);  
 await expect(page1).toHaveURL('https://confluence.devit-team.com/login.action?os_destination=%2Fpages%2Ftinyurl.action%3FurlIdentifier%3D8olF%2C&permissionViolation=true', {timeout: 5000})
})

test('Работа dropdown menu - DevIT Software', async({page}) => {
  const [page1] = await Promise.all([ 
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'DevIT Software' }).click() 
  ]);
  await expect(page1).toHaveURL('https://devit.software/,', {timeout: 5000})
})

test('Работа dropdown menu - DevIT Group', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'DevIT Group' }).click() 
  ]);
  await expect(page1).toHaveURL('https://devit-team.com/', {timeout: 5000})
})

test('Работа dropdown menu - Office', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Office' }).click() 
    ]);
  await expect(page1).toHaveURL('https://office.devit-team.com/login', {timeout: 5000})
})

test('Работа dropdown menu - Human Resource', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Human Resource' }).click() 
    ]);
  await expect(page1).toHaveURL('https://hr.devit.group/', {timeout: 5000})
})

test('Работа dropdown menu - Email Verify', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Email Verify' }).click() 
    ]);
  await page1.locator('text=Sign in to your account').isVisible()
})

test('Работа dropdown menu - Dashboard', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Dashboard' }).click() 
    ]);
  await page1.locator('text=Не удается получить доступ к сайту').isVisible() // Сторінка не доступна
})

test('Работа dropdown menu - Organization', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Organization' }).click() 
    ]);
  await expect(page1).toHaveURL('https://org.devit.group/', {timeout: 5000})
})

test('Работа dropdown menu - Cloud', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Cloud' }).click() 
    ]);
  await expect(page1).toHaveURL('https://cloud.devit.group/login', {timeout: 5000}) 
})

test('Работа dropdown menu - Email', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Email' }).click() 
    ]);
  await expect(page1).toHaveURL('https://mail.devit.group/,', {timeout: 5000}) 
})

test('Работа dropdown menu - Slack', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Slack' }).click() 
    ]);
  await expect(page1).toHaveURL('https://app.slack.com/,') 
})

test('Работа dropdown menu - Confluence', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Confluence' }).click() 
    ]);
  await expect(page1).toHaveURL('https://confluence.devit-team.com/login.action?os_destination=%2F%2C&permissionViolation=true') 
})

test('Работа dropdown menu - Jira', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Jira' }).click() 
    ]);
  await expect(page1).toHaveURL('https://jira.devit-team.com/,') 
})

test('Работа dropdown menu - Forms', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Forms' }).click() 
    ]);
  await expect(page1).toHaveURL('https://forms.devit.group/,') 
})

test('Работа dropdown menu - Boards', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Boards' }).click() 
    ]);
  await expect(page1).toHaveURL('https://boards.devit.group/,') 
})

test('Работа dropdown menu - Figma', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Figma' }).click() 
    ]);
  await expect(page1).toHaveURL('https://www.figma.com/,') 
})

test('Работа dropdown menu - Sentry', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Sentry' }).click() 
    ]);
  await expect(page1).toHaveURL('https://sentry.devit.software/auth/login/devit-software/') 
})
test('Работа dropdown menu - Browserstack', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Browserstack' }).click() 
    ]);
  await expect(page1).toHaveURL('https://www.browserstack.com/,') 
})

test('Работа dropdown menu - Bitbucket', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Bitbucket' }).click() 
    ]);
  await expect(page1).toHaveURL('https://bitbucket.devit.group/,') 
})

test('Работа dropdown menu - Docker', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Docker' }).click() 
    ]);
  await expect(page1).toHaveURL('https://docker.devit.group/,') 
})

test('Работа dropdown menu - CreatorD', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'CreatorD' }).click() 
    ]);
  await expect(page1).toHaveURL('https://creatord.devit.group/,') 
})

test('Работа dropdown menu - Bamboo', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Bamboo' }).click() 
    ]);
  await expect(page1).toHaveURL('https://bamboo.devit.group/,') 
})

test('Работа dropdown menu - Asset', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Asset' }).click() 
    ]);
  await expect(page1).toHaveURL('https://asset.devit.group/,') 
})

test('Работа dropdown menu - Keycloak', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Keycloak' }).click() 
    ]);
  await expect(page1).toHaveURL('https://auth.devit-team.com/,') 
})

test('Работа dropdown menu - Crowd', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Crowd' }).click() 
    ]);
  await expect(page1).toHaveURL('https://id.devit-team.com/,') 
})

test('Работа dropdown menu - grc', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'grc' }).click() 
    ]);
  await expect(page1).toHaveURL('https://grc.ua/employer/3087642,') 
})

test('Работа dropdown menu - Rabota.ua', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Rabota.ua' }).click() 
    ]);
  await expect(page1).toHaveURL('https://rabota.ua/ua/company2171706,') 
})

test('Работа dropdown menu - DOU', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'DOU' }).click() 
    ]);
  await expect(page1).toHaveURL('https://jobs.dou.ua/companies/devit/,') 
})

test('Работа dropdown menu - Jobs.ua', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Jobs.ua' }).click() 
    ]);
  await expect(page1).toHaveURL('https://jobs.ua/rus/company-devit-302892,') 
})

test('Работа dropdown menu - Work.ua', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Work.ua' }).click() 
    ]);
  await expect(page1).toHaveURL('https://www.work.ua/jobs/by-company/') 
})

test('Работа dropdown menu - LinkedIn', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'LinkedIn' }).click() 
    ]);
  await expect(page1).toHaveURL('https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fdevit-group%2F%2C') 
}) 

test('Работа dropdown menu - YouTube', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'YouTube' }).click() 
    ]);
  await expect(page1).toHaveURL('https://www.youtube.com/c/devit-group,') 
})

test('Работа dropdown menu - facebook', async({page}) => {
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'facebook' }).click() 
    ]);
  await expect(page1).toHaveURL('https://www.facebook.com/devit.group,') 
})

/** 
 * TODO - не пиправлена помилка з УРЛ  https://jira.devit-team.com/browse/HRE-186
 */

// test.only('Работа dropdown menu - Instagram', async({page}) => {
//   const [page1] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.getByRole('button', { name: 'Instagram' }).click() 
//     ]);
//   await expect(page1).toHaveURL('https://www.instagram.com/devit.group,/') 

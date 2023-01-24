

// const {test, expect} = require('@playwright/test')
// //const {helloworld, hello} = require('./pages/page')

// test.beforeEach(async ({ page }, testInfo) => {
//     console.log(`Loin test ${testInfo.title}`);
//         await page.goto('https://hrm-dev.dev-test.pro/')
//         await page.locator('#j_username').fill('anton.dyachenko')
//         await page.locator('#j_password').fill('e46i5G4u8fgrG')
//         await page.getByLabel('Remember me').check()
//         await page.getByRole('button', { name: 'Log in' }).click()
//         await page.waitForURL('https://hrm-dev.dev-test.pro/')
// })

// test('test', async ({page})=> {
   

// })
 

// // before all
// const { test } = require('@playwright/test');
// let page;
// test.beforeAll(async ({ browser }) => {
       
//     page = await browser.newPage();
//         await page.goto('https://hrm-dev.dev-test.pro/')
//         await page.locator('#j_username').fill('anton.dyachenko')
//         await page.locator('#j_password').fill('e46i5G4u8fgrG')
//         await page.getByLabel('Remember me').check()
//         await page.getByRole('button', { name: 'Log in' }).click()
//         await page.waitForTimeout(7000)
// })

// test('Поиск сотрудника (позитивный) по имени', async ()=> {
    
//     await page.waitForURL('https://hrm-dev.dev-test.pro/')
//     await page.getByPlaceholder('Поиск сотрудника').click()
//     await page.getByPlaceholder('Поиск сотрудника').fill('AnTon DyaChenko')
//     await page.getByRole('heading', { name: 'Anton Dyachenko' }).getByText('Anton Dyachenko');
// })
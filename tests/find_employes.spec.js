const {test, expect} = require('@playwright/test');
const { LoginPage } = require('./pages/login_page');
let page;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    const loginPage = new LoginPage(page)
        await loginPage.goto();
        await loginPage.validLogin();
    })
test('Поиск сотрудника (позитивный) по имени', async ()=> {
    await page.getByPlaceholder('Поиск сотрудника').click()
    await page.getByPlaceholder('Поиск сотрудника').fill('AnTon DyaChenko')
    await page.getByRole('heading', { name: 'Anton Dyachenko' }).getByText('Anton Dyachenko');
})

test('Поиск сотрудника (позитивный) по почте', async ()=> {
    await page.getByPlaceholder('Поиск сотрудника').click()
    await page.getByPlaceholder('Поиск сотрудника').fill('anton.dyachenko@devit.group')
    await page.locator('[id="\\32 1"]').getByText('anton.dyachenko@devit.group')
})

test('Поиск сотрудника (негативный) - 🤖', async ()=> {
    await page.getByPlaceholder('Поиск сотрудника').click()
    await page.getByPlaceholder('Поиск сотрудника').fill('🤖')
    await expect(page.locator('div.Polaris-TextContainer > p')).toHaveText('сотрудников не найдены');
})
test('Поиск сотрудника (негативный) - латиною', async ()=> {
    await page.getByPlaceholder('Поиск сотрудника').click()
    await page.getByPlaceholder('Поиск сотрудника').fill('антон')
    await expect(page.locator('div.Polaris-TextContainer > p')).toHaveText('сотрудников не найдены');
})    
test('Поиск сотрудника (негативный) - цифрами', async ()=> {
    await page.getByPlaceholder('Поиск сотрудника').click()
    await page.getByPlaceholder('Поиск сотрудника').fill('22')
    await expect(page.locator('div.Polaris-TextContainer > p')).toHaveText('сотрудников не найдены');
}) 
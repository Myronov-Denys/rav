const {test, expect} = require('@playwright/test');
const { AddingUser } = require('./pages/adding_uses.page');
const { LoginPage } = require('./pages/login_page');

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`adding users  ${testInfo.title}`);
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.validLogin();
})

 test('оздание профиля сотрудника с валидными данными', async ({page})=> {
  const adding_uses = new AddingUser(page)
  function randomString(len, an) {
      an = an && an.toLowerCase();
      var str = "",
        i = 0,
        min = an == "a" ? 10 : 0,
        max = an == "n" ? 10 : 62;
      for (; i++ < len;) {
        var r = Math.random() * (max - min) + min << 0;
        str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
      }
      return str;
    }
    console.log(randomString(10));      // i.e: "4Z8iNQag9v"
    console.log(randomString(10, "a")); // i.e: "aUkZuHNcWw"
    console.log(randomString(10, "n")); // i.e: "9055739230"

  await adding_uses.validLogin('Boris' + randomString(10, "a"), 'Britva')
  await expect (page.getByText('Данные сотрудника созданы')).toBeVisible()
})

 test('Создание профиля сотрудника с невалидными данными поля "Имя" (цифра)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.wrongYear('123456789', 'Britva')
  await expect (page.getByText('Поле может содержать только латинские буквы')).toBeVisible()
})

test('Создание профиля сотрудника с невалидными данными поля "Имя" (кириллица)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.createUser('Борис', 'Britva')
  await expect (page.getByText('Поле может содержать только латинские буквы')).toBeVisible()
})

test('Создание профиля сотрудника с невалидными данными поля "Имя" (Цифры и спецсимволы)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.createUser('1234567890!@$%', 'Britva')
  await expect (page.getByText('Поле может содержать только латинские буквы')).toBeVisible()
})

test('Создание профиля сотрудника с невалидными данными поля "Фамилия" (кириллица)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.createUser('Boris', 'Бритва')
  await expect (page.getByText('Поле может содержать только латинские буквы')).toBeVisible()
})
test('Создание профиля сотрудника с невалидными данными поля "Фамилия" (цифра)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.createUser('Boris', '1234567890')
  await expect (page.getByText('Поле может содержать только латинские буквы')).toBeVisible()
})

test('Создание профиля сотрудника с невалидными данными поля "Имя" (пустое поле)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.createUser('', 'Boris')
  await page.getByLabel('Имя').click();  
  await expect (page.getByText('Введите имя (не менее 2 символов)')).toBeVisible()
})

test('Создание профиля сотрудника с невалидными данными поля "Фамилия" (пустое поле)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.createUser('Boris', '')
  await page.getByLabel('Фамилия').click();  
  await expect (page.getByText('Введите имя (не менее 2 символов)')).toBeVisible()
})

test('Создание профиля сотрудника с невалидными данными поля "Номер телефона" (пустое поле)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.noPhoneNumber('Boris', 'Britva', '')
  await expect (page.getByText('Неверный формат телефона')).toBeVisible()
})

test('Создание профиля сотрудника с невалидными данными поля "Номер телефона" (буквы)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.noPhoneNumber('Boris', 'Britva', 'dsfivmkl')
  await expect (page.getByText('Неверный формат телефона')).toBeVisible()
})

test('Создание профиля сотрудника с невалидными данными поля "Дата рождения" (текущая дата)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.wrongYear('Boris', 'Britva')
  await expect (page.getByText('Введите имя (не менее 2 символов)')).toBeVisible()
}) 

test('Создание профиля сотрудника с невалидными данными поля "Дата рождения" (оставить пустым)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.noBirsdayDate('Boris', 'Britva')
  await expect (page.getByText('Сохранить')).toBeDisabled()
})

test('Создание профиля сотрудника с невалидными данными поля "Новый пароль" (оставить пустым)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.fllPassvordFil('12345Hur', '')
  await adding_uses.newPasswordFld.click()
  await expect (page.getByText('Обязательное поле')).toBeVisible()
  await expect (page.getByText('Сохранить')).toBeDisabled()
})

test('Создание профиля сотрудника с невалидными данными поля "Новый пароль" (11111111)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.fllPassvordFil('11111111', '11111111')
  await expect (adding_uses.errorMessage6to16symbols).toBeVisible()
  await expect (adding_uses.errorMessage6to16symbolsforSecondFld).toBeVisible()
})

test('Создание профиля сотрудника с невалидными данными поля "Подтвердить новый пароль" (11111111111)', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.fllPassvordFil('12345Hur', '11111111111')
  await expect (page.locator('text = Новый пароль и подтверждение должны совпадать')).toBeVisible()
  await expect (page.locator('text = Пароль должен содержать от 8 до 16 символов, 1 цифру, 1 заглавную букву')).toBeVisible()
})

test('Создание профиля сотрудника с существующими данными', async ({page})=> {
  const adding_uses = new AddingUser(page)
  await adding_uses.validLogin('Boris', 'Britva')
  await page.waitForSelector('text=Сотрудник существует')
  await expect (page.locator('text = Сотрудник существует')).toBeVisible()
})


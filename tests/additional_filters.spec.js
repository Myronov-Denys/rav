const { test, expect, check } = require('@playwright/test');
const { AdditionalFilters } = require('./pages/additional_filters.page');
const { LoginPage } = require('./pages/login_page');

/** @type {import('@playwright/test').Page} */
let page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  const loginPage = new LoginPage(page)
    await loginPage.goto(); //Перехід на сторінку логіну
    await loginPage.validLogin(); //Логін користувача валідними данними
    
});

// /**
//  * Дополнительные фильтры
//  */

test('HRM-8 Дополнительные фильтры - Права доступа сотрудников - Редактирование', async () => {
  const addit_fltrs = new AdditionalFilters(page)
  const loginPage = new LoginPage(page)
    await addit_fltrs.openAccessRightRoledown()
    await addit_fltrs.editChkBx.isEnabled() //Перевірки чи елемент доступний
    await addit_fltrs.editChkBx.check() //поставити галочку в полі чекбокс (Редактирование) ПРАВА ДОСТУПА СОТРУДНИКОВ
    expect(await (addit_fltrs.editChkBx).isChecked()).toBeTruthy() //перевірка чи проставлений чекбокс "Редактирование"
    await addit_fltrs.performedBtn.click()
    expect(await addit_fltrs.featureToEditEmployees); //первірка чи зявився фільтр під полем Редактирование сотрудников
    await loginPage.goto(); //Перехід на сторінку логіну
});

test('HRM-9 Дополнительные фильтры - Права доступа сотрудников - Чтение', async () => {
const addit_fltrs = new AdditionalFilters(page)
const loginPage = new LoginPage(page)
    await addit_fltrs.openAccessRightRoledown()
    await addit_fltrs.readingChkBx.isEnabled(); 
    await addit_fltrs.readingChkBx.check() 
    expect(await (addit_fltrs.readingChkBx).isChecked()).toBeTruthy() 
    await addit_fltrs.performedBtn.click()
    expect(await addit_fltrs.featureViewEmployees);
    await loginPage.goto(); //Перехід на сторінку логіну
});

test('HRM-10 Дополнительные фильтры - Роли - Создание', async ( firstName ) => {
  const addit_fltrs = new AdditionalFilters(page)
  const loginPage = new LoginPage(page)
      await addit_fltrs.openAccessRightRoledown()
      await addit_fltrs.creationChkBx.isEnabled({ timeout: 10000 }); 
      await addit_fltrs.creationChkBx.check() 
      expect(await (addit_fltrs.creationChkBx).isChecked()).toBeTruthy() 
      expect(await (addit_fltrs. creationChkBx).isChecked()).toBeTruthy() 
      await addit_fltrs.performedBtn.click()
      expect(await addit_fltrs.featureCreateRoles); 
      await loginPage.goto(); //Перехід на сторінку логіну
  });


  test.only('Htest', async ( ) => {
    const addit_fltrs = new AdditionalFilters(page)
    const loginPage = new LoginPage(page)
        await addit_fltrs.openAccessR(addit_fltrs.creationChkBx)
        await loginPage.goto(); //Перехід на сторінку логіну
    });
  // test('HRM-', async ( ) => {
  //   const addit_fltrs = new AdditionalFilters(page)
  //       await addit_fltrs.openAccessRightRoledown()
  //       await addit_fltrs.  .isEnabled({ timeout: 10000 }); //чи чек бокс вже доступний
  //       await addit_fltrs. .check() //поставити галочку в полі чекбокс
  //       expect(await (addit_fltrs.  ).isChecked()).toBeTruthy() 
  //       await addit_fltrs.performedBtn.click()
  //       expect(await page.getByAltText('  ')); 
  //   });

    // test('HRM-', async ( ) => {
    //   const addit_fltrs = new AdditionalFilters(page)
    //       await addit_fltrs.openAccessRightRoledown()
    //       await addit_fltrs.  .isEnabled({ timeout: 10000 }); //чи чек бокс вже доступний
    //       await addit_fltrs. .check() //поставити галочку в полі чекбокс
    //       expect(await (addit_fltrs.  ).isChecked()).toBeTruthy() 
    //       await addit_fltrs.performedBtn.click()
    //       expect(await page.getByAltText('  ')); 
    //   });
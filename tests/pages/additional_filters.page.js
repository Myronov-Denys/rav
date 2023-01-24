const {expect, waitForTimeout, waitForSelector, isEnabled, check} = require('@playwright/test');
const { LoginPage } = require('./login_page');
exports.AdditionalFilters = class AdditionalFilters {
    
constructor(page) {
    this.page = page;
    this.additionalFiltersBtn  = page.locator('text = Дополнительные фильтры', { timeout: 1000 })
    this.accessRightsBtn = page.locator('text = Права Доступа') //Права Доступа випадаючий список

    // ПРАВА ДОСТУПА СОТРУДНИКОВ
    this.editChkBx = page.locator('#PolarisOptionList1-1 label:has-text("Редактирование") div >> nth=2') // Редактирование чек бокс
    this.featureToEditEmployees = page.getByAltText('Возможность: Редактирование сотрудников')

    this.readingChkBx = page.locator(':nth-match(:text("Чтение"), 1)') // - Чтение 
    this.featureViewEmployees = page.getByAltText('Возможность: Просмотр сотрудников')

    //РОЛИ
    this.creationChkBx = page.locator('#PolarisOptionList1-2 >> text=Создание') // - Создание
    this.featureCreateRoles = page.getByAltText('Возможность: Создание ролей')

    // this.editRolesChkBox = 
    // this.featureEditRoles = 

    // this.readingRolesChkBox = 
    // this.featureReadingRoles

    // this.deleteRolesChkBox = 
    // this.featureDeleteRoles = 

    //СОТРУДНИКИ


    this.performedBtn = page.locator('text = Выполнено')
    this.wait = page.waitForTimeout(1000)
    this.pause = page.pause()

    }
    async openAccessRightRoledown() {
        await this.additionalFiltersBtn.click(); //Відкрити меню (Дополнительные фильтры)
        await this.accessRightsBtn.click({ timeout: 3000 }); //відкрити випадаючий список (права доступу)
        await this.wait
    }  

    async openAccessR(test1) {
        //const loginPage = new LoginPage(page)
        await this.pause
        await this.additionalFiltersBtn.click(); //Відкрити меню (Дополнительные фильтры)
        await this.accessRightsBtn.click({ timeout: 3000 }); //відкрити випадаючий список (права доступу)
        await this.wait
        await this.creationChkBx.isEnabled({ timeout: 10000 }); 
        await this.creationChkBx.check() 
        expect(await (test1).isChecked()).toBeTruthy() 
        //expect(await (this.creationChkBx).isChecked()).toBeTruthy() 
        await this.performedBtn.click()
        expect(await this.featureCreateRoles); 
        
    }  


}
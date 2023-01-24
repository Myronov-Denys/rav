
const {expect} = require('@playwright/test');
exports.HeaderPage = class HeaderPage {
    
    constructor(page) {
        this.page = page;
       // this.waitForPopUp = 'https://confluence.devit-team.com/login.action?os_destination=%2Fpages%2Ftinyurl.action%3FurlIdentifier%3D8olF%2C&permissionViolation=true', {timeout: 5000})
        this.AddUserBtn = page.getByRole('button', { name: 'Добавить' })
        this.homePagelink = page.getByRole('link', { name: 'HRM | DevIT Team' })

        this.userLogo = page.getByRole('button', { name: 'Аватар с инициалами A D Anton Dyachenko anton.dyachenko@devit.group' });
        this.logOutBtn = page.getByRole('link', { name: 'Выйти' });
        this.clkLogOutBtn = page.getByRole('link', { name: 'Выйти' }).click();

    // await page.getByRole('button', { name: 'Аватар с инициалами A D Anton Dyachenko anton.dyachenko@devit.group' }).click();
  //       await page.getByRole('link', { name: 'Выйти' }).click();
  //       await page.waitForURL('https://id.devit-team.com/crowd/console/login.action#/');
  //       await page.locator('a').first().click();

    }
    async backToHomePage() {

    }

}
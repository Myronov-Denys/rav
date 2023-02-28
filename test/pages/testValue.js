const { expect } = require('@playwright/test');
exports.TestValue = class TestValue { 

    constructor (page) {
        this.page = page;

    
      }

    async open_Dev_Url() {
        await this.page.goto('https://dev.americasvoice.news/');
      }

      async open_Staging_Url() {
        await this.page.goto('https://staging.americasvoice.news/');
      }

      async open_Live_Url() {
        await this.page.goto('https://americasvoice.news/');
      }

}

exports.COMMON_TEST_DATA = {
  devURL: 'https://dev.americasvoice.news/',
}
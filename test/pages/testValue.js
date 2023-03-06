const { expect } = require('@playwright/test');
exports.TestValue = class TestValue { 

    constructor (page) {
        this.page = page;

        this.rokuAppUrl = "https://channelstore.roku.com/en-gb/details/5e1b380d0d963b69b988490cd2a0a488/americas-voice-news"
    
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
const { expect } = require('@playwright/test');

exports.RokuAppPage = class RokuAppPage {
    constructor (page) {
        this.page = page;


        
        
        
        
    
            //Roku app page
            this.rokuAppTitle = page.locator("//title[contains(text(),'Voice | TV app | Roku Channel Store | Roku')]")
            this.rokuAppTitleh1 = page.locator("//h1[contains(text(),'Voice')]")
            
        
      
    }



    //Actions



 }
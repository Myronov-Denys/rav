const { expect } = require('@playwright/test');
const { HomePage } = require('./homePage');
const { TestValue } = require('./testValue');
exports.AppsPage = class AppsPage {
    constructor (page) {
        this.page = page;


        
        // Title
        this.appsTitle = page.locator("//h1[contains(text(),'Voice Apps')]")
        
        
    
            //Roku app page
            this.rokuAppTitle = page.locator("//title[contains(text(),'Voice | TV app | Roku Channel Store | Roku')]")
            this.rokuAppTitleh1 = page.locator("//h1[contains(text(),'Voice')]")
            
        
      
    }



    //Actions



 }
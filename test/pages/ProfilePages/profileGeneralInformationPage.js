/* eslint-disable no-unused-vars */
const { expect } = require('@playwright/test');
const { TestValue } = require('../testValue');

exports.ProfileGeneralInformationPage = class ProfileGeneralInformationPage {
    constructor(page) {
        this.page = page;

        // Fields

        this.firstNameField = page.locator("//label[contains(text(),'First Name')]/../input");
        this.lastNameField = page.locator("//label[contains(text(),'Last Name')]/../input");
        this.nicknameField = page.locator("//label[contains(text(),'Nickname')]/../input");
        this.statusField = page.locator("//div[@class='position-relative']/textarea");

        // Error message
        this.maxLengthFirstNameErrorMessage = page.locator("//label[contains(text(),'First Name')]/../div[@class='invalid-feedback']");
        this.maxLengthLastNameErrorMessage = page.locator("//label[contains(text(),'Last Name')]/../div[@class='invalid-feedback']");
        this.maxLengthNicknameErrorMessage = page.locator("//div[@class='position-relative']/textarea");
        this.maxLength100CharactersOnStatusErrorMessage = page.locator("//label[contains(text(),'Status ')]/../div[@class='invalid-feedback']");
        // Social errors
        this.incorrectFacebookUrlErrorMessage = page.locator("//input[@id='fb-social']/../div[@class='invalid-feedback']");
        this.incorrectTwitterUrlErrorMessage = page.locator("//input[@id='tw-social']/../div[@class='invalid-feedback']");
        this.incorrectInstagramUrlErrorMessage = page.locator("//input[@id='inst-social']/../div[@class='invalid-feedback']");
        this.incorrectLinkedinUrlErrorMessage = page.locator("//input[@id='ln-social']/../div[@class='invalid-feedback']");

        // Social media examples
        this.facebookExampleOfURL = page.locator('//small[text()="Example of url : https://www.facebook.com/RealAmericasVoice"]');
        this.twitterExampleOfURL = page.locator('//small[text()="Example of url: https://twitter.com/RealAmVoice"]');
        this.instagramExampleOfURL = page.locator('//small[text()="Example of url: https://www.instagram.com/realamericasvoice"]');
        this.linkedinExampleOfURL = page.locator('//small[text()="Example of url: https://linkedin.com/RealAmericasVoice"]');
    

        // Profile card
        this.statusOnProfileCard = page.locator("//h4[contains(@class,'styles_nickname')]/following-sibling::div[contains(@class,'styles_status')]");
        this.firstAndLastNameOnProfileCard = page.locator("//h4[contains(@class,'styles_name')]");
        this.nicknameOnProfileCard = page.locator("//h4[contains(@class,'styles_nickname')]");

        // Buttons
        this.saveButton = page.locator("//div[@class='p-3 card-footer']//button");

        // Social public meida

        this.facebookSocialField = page.locator('#fb-social');
        this.twitterSocialField = page.locator('#tw-social');
        this.instagramSocialField = page.locator('#inst-social');
        this.linkedinSocialField = page.locator('#ln-social');
    }

    // Actions

    // Enter data
    async enter51CharactersInTheFirstNameField() {
        await this.firstNameField.fill('lOHOlkIOcDOlZLlpOydTJlATxllrlOIulOHOlkIOcDOlZLlpOyd'); // 51 chapters
    }

    async enter51CharactersInTheLastNameField() {
        await this.lastNameField.fill('lOHOlkIOcDOlZLlpOydTJlATxllrlOIulOHOlkIOcDOlZLlpOyd'); // 51 chapters
    }

    async enter51CharactersInTheNicknameField() {
        await this.nicknameField.fill('lOHOlkIOcDOlZLlpOydTJlATxllrlOIulOHOlkIOcDOlZLlpOyd'); // 51 chapters
    }

    async enter100CharactersInTheStatusField() {
        await this.statusField.fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam non facilisis ligula. Fusce euismod dia!'); // 100 chapters
    }

    async enter102CharactersInTheStatusField() {
        await this.statusField.fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam non facilisis ligula. Fusce euismod dia!12'); // 102 chapters
    }
    // Enter HTMl tags

    async enterHTMLTagsInTheFirstNameField() {
        const testValue = new TestValue(this.page);
        await this.firstNameField.fill(testValue.htmlLinkWithLinkText);
    }

    async enterHTMLTagsInTheLastNameField() {
        const testValue = new TestValue(this.page);
        await this.lastNameField.fill(testValue.htmlLinkWithLinkText);
    }

    async enterHTMLTagsInTheNicknameField() {
        const testValue = new TestValue(this.page);
        await this.nicknameField.fill(testValue.htmlLinkWithLinkText);
    }

    async enterHTMLTagsInTheFacebookField() {
        const testValue = new TestValue(this.page);
        await this.facebookSocialField.fill(testValue.htmlLinkWithLinkText);
    }

    async enterHTMLTagsInTheTwitterField() {
        const testValue = new TestValue(this.page);
        await this.twitterSocialField.fill(testValue.htmlLinkWithLinkText);
    }

    async enterHTMLTagsInTheInstagramField() {
        const testValue = new TestValue(this.page);
        await this.instagramSocialField.fill(testValue.htmlLinkWithLinkText);
    }

    async enterHTMLTagsInTheLinkedinField() {
        const testValue = new TestValue(this.page);
        await this.linkedinSocialField.fill(testValue.htmlLinkWithLinkText);
    }

    async enterHTMLTagsInTheStatusField() {
        const testValue = new TestValue(this.page);
        await this.statusField.fill(testValue.htmlLinkWithLinkText);
    }

    // Scroll
    async scrollToSaveButton() {
        await this.page.locator('//div[@class="p-3 card-footer"]').scrollIntoViewIfNeeded();
    }
};
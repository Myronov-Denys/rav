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
        this.maxLengthNicknameErrorMessage = page.locator("//label[contains(text(),'Nickname')]/../div[@class='invalid-feedback']");
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
        this.facebookIconOnProfileCard = page.locator("//h4[contains(@class,'styles_nickname')]/..//a[contains(@href,'facebook')]");
        this.linkedinIconOnProfileCard = page.locator("//h4[contains(@class,'styles_nickname')]/..//a[contains(@href,'linkedin')]");
        this.twitterIconOnProfileCard = page.locator("//h4[contains(@class,'styles_nickname')]/..//a[contains(@href,'twitter')]");
        this.instagramIconOnProfileCard = page.locator("//h4[contains(@class,'styles_nickname')]/..//a[contains(@href,'instagram')]");

        // Buttons
        this.saveButton = page.locator("//div[@class='p-3 card-footer']//button");
        this.daleteButton = page.locator("//div[@class='p-3 card-footer']//a[@class='link-danger']");

        // Social public meida

        this.facebookSocialField = page.locator('#fb-social');
        this.twitterSocialField = page.locator('#tw-social');
        this.instagramSocialField = page.locator('#inst-social');
        this.linkedinSocialField = page.locator('#ln-social');

        // PopUp Message
        this.congratulationsProfileSuccessfullyChangedPopUpMessage = page.locator("//div[contains(text(),'Congratulations!')]");

        // Delete modal windows
        this.modalDeleteAccountPopupWindow = page.locator('#contained-modal-title-vcenter');
        this.deleteButtonOnDeleteModalPopupWindow = page.locator("//div[@class='modal-footer']/button");
        this.yesImSureCheckboxOnDeleteModalPopupWindow = page.locator("//input[@id='delete-account']");
        this.yesImSureTextOnDeleteModalPopupWindow = page.locator("//label[@for='delete-account']");
        this.alsoDeleteMyMessageHistoryCheckboxOnDeleteModalPopupWindow = page.locator("//input[@id='delete-chat']");
        this.alsoDeleteMyMessageHistoryTextOnDeleteModalPopupWindow = page.locator("//label[@for='delete-chat']");
        this.closeDeleteModalPopupWindowButton = page.locator("//div[@class='modal-header']/button[@aria-label='Close']");

        // Personal information switcher
        this.hideOrShowPersonalDataSwitcher = page.locator("//input[@id='personal-data']");
        this.hideOrShowPersonalDataText = page.locator("//label[@for='personal-data']");
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

    async enterFacebookHTTPSLinkInTheFacebookSocialfield() {
        const testValue = new TestValue(this.page);
        await this.facebookSocialField.clear();
        await this.facebookSocialField.fill(testValue.httpsFacebookLink);
    }

    async enterTwitterHTTPSLinkInTheTwitterSocialfield() {
        const testValue = new TestValue(this.page);
        await this.twitterSocialField.clear();
        await this.twitterSocialField.fill(testValue.httpsTwitterLink);
    }

    async enterInstagramHTTPSLinkInTheInstagramSocialfield() {
        const testValue = new TestValue(this.page);
        await this.instagramSocialField.clear();
        await this.instagramSocialField.fill(testValue.httpsInstagramLink);
    }

    async enterLinkedinHTTPSLinkInTheLinkedinSocialfield() {
        const testValue = new TestValue(this.page);
        await this.linkedinSocialField.clear();
        await this.linkedinSocialField.fill(testValue.httpsLinkedInLink);
    }

    async enterFacebookHTTPLinkInTheFacebookSocialfield() {
        const testValue = new TestValue(this.page);
        await this.facebookSocialField.clear();
        await this.facebookSocialField.fill(testValue.httpFacebookLink);
    }

    async enterTwitterHTTPLinkInTheTwitterSocialfield() {
        const testValue = new TestValue(this.page);
        await this.twitterSocialField.clear();
        await this.twitterSocialField.fill(testValue.httpTwitterLink);
    }

    async enterInstagramHTTPLinkInTheInstagramSocialfield() {
        const testValue = new TestValue(this.page);
        await this.instagramSocialField.clear();
        await this.instagramSocialField.fill(testValue.httpInstagramLink);
    }

    async enterLinkedinHTTPLinkInTheLinkedinSocialfield() {
        const testValue = new TestValue(this.page);
        await this.linkedinSocialField.clear();
        await this.linkedinSocialField.fill(testValue.httpLinkedInLink);
    }

    async enterTheTwitterSocialLink_InTheFacebookSocialField() {
        const testValue = new TestValue(this.page);
        await this.facebookSocialField.clear();
        await this.facebookSocialField.fill(testValue.httpTwitterLink);
    }

    async enterYoutubeLinkOnTheTwitterSocialField() {
        const testValue = new TestValue(this.page);
        await this.twitterSocialField.clear();
        await this.twitterSocialField.fill(testValue.YoutubeRAVLink);
    }

    async enterTextInTheInstagramSocialField() {
        const testValue = new TestValue(this.page);
        await this.instagramSocialField.clear();
        await this.instagramSocialField.fill('Hello World');
    }

    async enterTheIncorrectLinkedinLinkInTheLinkedinSocialField() {
        const testValue = new TestValue(this.page);
        await this.linkedinSocialField.clear();
        await this.linkedinSocialField.fill(testValue.incorrectLinkedinLink);
    }

    // Clear data

    async clearSocialFileds() {
        await this.facebookSocialField.clear();
        await this.twitterSocialField.clear();
        await this.instagramSocialField.clear();
        await this.linkedinSocialField.clear();
    }

    // Scroll
    async scrollToSaveButton() {
        await this.page.locator('//div[@class="p-3 card-footer"]').scrollIntoViewIfNeeded();
    }

    // Click
    async clickSaveButton() {
        await this.saveButton.click({ timeout: 5000 });
    }

    async clickDeleteButton() {
        await this.daleteButton.click({ timeout: 5000 });
    }

    async markTheAlsoDeleteMyMessageHistoryCheckbox() {
        await this.alsoDeleteMyMessageHistoryCheckboxOnDeleteModalPopupWindow.click({ timeout: 5000 });
    }

    async markATheAlsoDeleteMyMessageHistoryText() {
        await this.alsoDeleteMyMessageHistoryTextOnDeleteModalPopupWindow.click({ timeout: 5000 });
    }

    async markYesImSureCheckboxOnDeleteModalPopupWindow() {
        await this.yesImSureCheckboxOnDeleteModalPopupWindow.click({ timeout: 5000 });
    }

    async markYesImSureTextOnDeleteModalPopupWindow() {
        await this.yesImSureTextOnDeleteModalPopupWindow.click({ timeout: 5000 });
    }

    async clickCloseDeleteWindow() {
        await this.closeDeleteModalPopupWindowButton.click({ timeout: 5000 });
    }

    async clickHideOrShowPersonalDataText() {
        await this.hideOrShowPersonalDataText.click({ timeout: 10000 });
    }

    async clickHideOrShowPersonalDataSwitcher() {
        await this.hideOrShowPersonalDataSwitcher.click({ timeout: 10000 });
    }
};

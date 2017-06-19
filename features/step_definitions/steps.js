
// require('apickli-gherkin')
const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')
const {
    bpaUrl,
    generateRandomDate,
    createBooking
} = require('../../page_objects/utils')



defineSupportCode(({Given, Then, When,After,Before,registerHandler}) => {

    Given(/^User is in home page$/, function () {
        client.windowMaximize()
        homePage = client.page.homePage();
        return homePage.expect.element('@logo').to.be.visible;
    });

    When(/^he navigates to login page$/, function () {

        this.loginPage = client.page.loginPage();
        return this.loginPage.navigate().expect.element("@username").to.be.visible;
    });

    When(/^he navigates to register page$/, function () {
        this.loginPage = this.loginPage || client.page.loginPage();
        return this.loginPage.click('@signUpLink');
    });

    Then(/^he should be in registration page$/, function () {
        this.registrationPage = client.page.registration();
        return this.registrationPage.expect.element("@firstname").to.be.visible;
    });

    When(/^he creates account with details (.*), (.*), (.*) and (.*)$/, function (firstName,lastName,email,password) {
        
        client.globals.firstName = firstName;
        this.registrationPage = this.registrationPage || client.page.registrationPage();
        return this.registrationPage.registerAsNewUser(firstName,lastName,email,password)

    });

    Then('the account should be created successfully', function () {
        userPageObject = client.page.userHomePage();
        return userPageObject.isUserRegistered()
        
    });



    //After every feature, end the client session
    After(function (scenario) {
        return client.end();
    });
    
    Before(function (scenario) {
        return client.init();
    });
    
})

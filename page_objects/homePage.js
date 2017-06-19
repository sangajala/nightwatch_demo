/**
 * Created by sriramangajala on 30/05/17.
 */


module.exports = {
    market: 'uk-en',
    otherPassengersCount: 0,
    elements: {
        body: 'body',
        searchBar: 'input[name="p"]',
        logo: '.navbar-brand'
    },
    commands: [{
        gotoRegistrationPage: function () {
            return  this.click('#customer_register_link').expect.element('#first_name').to.be.visible;
        }
    }]
}
//
// var searchPageCommands = {
//     waitForSearchPage: function () {
//         this.waitForElementPresent('.edit-journey-button__button',this.globals.waitForConditionTimeout);
//         return this.expect.element('.edit-journey-button__button').to.be.visible;
//     }
// }
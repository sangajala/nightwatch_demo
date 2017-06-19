/**
 * Created by sriramangajala on 30/05/17.
 */
const request = require('request')
const url = require('url')
const {
    bpaUrl,
    generateRandomDate,
    formatClassOfAccommodation,
    createBooking,
    parseDate
} = require('./utils')

module.exports = {
    url: 'http://commonPage.com',
    market: 'uk-en',
    otherPassengersCount: 0,
    elements: {
        body: 'body',
        searchBar: 'input[name="p"]'
    },
    commands: [{
        
        waitForSearchPage: function () {
        this.waitForElementPresent('.edit-journey-button__button',this.api.globals.waitForConditionTimeout);
        return this.expect.element('.edit-journey-button__button').to.be.visible;
        },
        searchForTrains: function () {
            return this.click('.c-booking-magnet__submit-button')
        },
        selectTrains: function (journeyType = 'return', outClass, inClass) {

            this.waitForElementVisible('button.component.c-action.c-action--primary.basket-actions__submit',this.api.globals.waitForConditionTimeout)

            this.selectTrain('outbound', outClass)
            this.api.pause(3000)
            if (journeyType.toLowerCase() === 'return') {
                this.api.pause(3000)
                this.selectTrain('inbound', inClass)
                this.api.pause(3000)
            }
        },
        selectTrain: function (direction = 'outbound', className = 'Standard') {
            if (className === 'Standard') {
                this.className = className
            }
            return this.click(`class-of-accommodation[direction="${direction}"][name="${className}"] div.coa__radio-button input[name="${direction}"]`)// Chrome doesn't seem to cope with the scroll animation
        },
    }]
}
//
// var searchPageCommands = {
//     waitForSearchPage: function () {
//         this.waitForElementPresent('.edit-journey-button__button',this.globals.waitForConditionTimeout);
//         return this.expect.element('.edit-journey-button__button').to.be.visible;
//     }
// }
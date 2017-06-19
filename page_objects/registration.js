const request = require('request')
const url = require('url')
const {
    generateRandomNumber
} = require('./utils')

module.exports = {
    url: 'http://commonPage.com',
    market: 'uk-en',
    otherPassengersCount: 0,
    elements: {
        body: 'body',
        firstname: 'input[name="firstname"]',
        lastname: 'input[name="lastname"]',
        phone: 'input[name="phone"]',
        email: 'input[name="email"]',
        password: 'input[name="password"]',
        confirmpassword: 'input[name="confirmpassword"]',
        register: '.signupbtn.btn_full'

    },
    commands: [{

        registerAsNewUser: function (firstName,lastName,email,password) {
            return this.setValue('@firstname',firstName)
            .setValue('@lastname',lastName)
            .setValue('@email',generateRandomNumber()+email)
            .setValue('@password',password)
            .setValue('@confirmpassword',password)
            .click('@register')
        },
    }]


}
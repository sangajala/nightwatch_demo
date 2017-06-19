
module.exports = {
    otherPassengersCount: 0,
    elements: {
        body: 'body',
        header: 'h3.RTL'
    },
    commands: [{

        isUserRegistered: function (firstName,lastName) {
            self = this
            this.waitForElementPresent('@header', self.api.globals.waitForConditionTimeout)
            return this.getText('@header',function (result) {
                console.log(result.value)
                return self.expect.element('@header').text.to.contain(self.api.globals.firstName)
            })
        },
       
    }]


}
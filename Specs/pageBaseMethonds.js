

var openHomePageUrl = function () {

    this.gettingTextforEle = function (element, finddata, elementtoverify) {

        try {

            element.getText().then(function (text) {


                if (text.includes(elementtoverify)) {

                    finddata = true

                    console.log(text)

                } else {

                    console.log('Text not available')
                }

            })

        } catch (error) {

            console.log(error)
        }




    }

    this.getUrl = function (url, testvalue) {

        try {

            browser.waitForAngularEnabled(false); // check for non angular app

            browser.ignoreSynchronization = true;

            browser.get(url);

            testvalue = true;



        } catch (error) {

            testvalue = false;

            console.log(error);
        }



    }

    this.VerifyingElementAvail = function (element) {

        try {
            element.isPresent().then(function (present) {

                if (!present) {

                    console.log('The card not display image');
                }

                expect(present).toEqual(true);

                console.log('image available in homepage')
            });
        } catch (error) {
            console.log(error)
        }


    }

    this.clickElement = function (element) {

        try {

            element.isPresent().then(function (present) {

                if (!present) {

                    console.log('Not present')

                } else {

                    expect(present).toEqual(true);
                    element.click();
                    console.log('clicked over element');
                }


            })

        } catch (error) {

            console.log(error)

        }





    }

    this.gettingRowData = function () {

        try {

            var byRowData = element.all(by.tagName('tr'))

            var rowcounts = byRowData.count().then(function (rowCount) {

                console.log("Some much needed data: " + rowCount)

                for (let index = 0; index < rowCount; index++) {

                    byRowData.get(index).getText().then(function (text) {

                        console.log('present Details row wise: ' + text)

                    })

                }

            })


        } catch (error) {

            console.log(error)
        }


    }

    this.dropdownSelection = function () {

        var allpetTypeField = element.all(by.css("select#type option"))
        var thirdType = allpetTypeField.get(2).click();
    }

    this.addingNewOwnerData = function ({ firstname, lastname, address, city, telephone }) {

        try {


            var ownerFirstNameArea = element(by.id('firstName'))
            ownerFirstNameArea.sendKeys(firstname)
            var ownerLastNameArea = element(by.id('lastName'))
            ownerLastNameArea.sendKeys(lastname)
            var addressArea = element(by.id('address'))
            addressArea.sendKeys(address)
            var cityArea = element(by.id('city'))
            cityArea.sendKeys(city)
            var telephoneArea = element(by.id('telephone'))
            telephoneArea.sendKeys(telephone)

        } catch (error) {
            console.log(error)

        }


    }

    this.addingPetDataToOwner = function ({ petName }) {

        try {

            var petNameField = element(by.xpath("//input[@id='name']"))
            petNameField.click()
            petNameField.sendKeys(petName)
            var birthDateField = element(by.id("birthDate"))
            console.log('clicing on date option')
            birthDateField.click().clear().sendKeys('2017-04-04')
            var addButton = element(by.xpath("//button[@class='btn btn-default']"))
            addButton.click()
            console.log(" pet added to owner... ")

        } catch (error) {
            console.log(error)

        }




    }

    this.verifyingElements = function (element, elementtoverify) {

        try {

            element.getText().then(function (text) {

                expect(text).toEqual(elementtoverify);
                console.log(text)

            })

        } catch (error) {
            console.log(error)

        }





    }



}

module.exports = new openHomePageUrl();
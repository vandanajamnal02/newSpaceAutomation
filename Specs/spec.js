var petHomepage = require('./pageBaseMethonds');
var usersData = require('./userData');

var testvalue = true;

homepageurl = "http://localhost:8080/"


describe('homepage todo list', function () {

    it('should open  open homepage', function () {

        petHomepage.getUrl(homepageurl,testvalue);
        expect(testvalue).toBe(true);
       
    });

    it('should check for homepage image', function () {

        var homepageImage = element(by.xpath("//img[@class='img-responsive']"))

        petHomepage.VerifyingElementAvail(homepageImage)


        });


    it('should check for table contnet here', function () {

        var findOwners = element(by.xpath('//a[@title="find owners"]'))
        petHomepage.clickElement(findOwners)

        var getOwnersData = element(by.xpath("//button[@class='btn btn-default']"))
        petHomepage.clickElement(getOwnersData)
        petHomepage.gettingRowData()


    });

    it('it should open vaterian section',function(){


        var veterinariansSection = element(by.xpath("//a[@title='veterinarians']"))
        petHomepage.clickElement(veterinariansSection)
        petHomepage.gettingRowData()


    })


    it('adding a new owner ', function(){ 

        var findOwnersTab = element(by.xpath('//a[@title="find owners"]'))
        var addNewOwnerButton = element(by.xpath("//a[@class='btn btn-default']"))

        petHomepage.clickElement(findOwnersTab)      
        petHomepage.clickElement(addNewOwnerButton)

        petHomepage.addingNewOwnerData(usersData.getOwnerNewData())

        var submitDetailsButton = element(by.xpath("//button[@class='btn btn-default']"))
        petHomepage.clickElement(submitDetailsButton)


    })

    it('adding pet for created owner', function(){

        var  addNewPetButton = element(by.xpath('//div/div/a[2]'))
        petHomepage.clickElement(addNewPetButton)
        petHomepage.dropdownSelection()    
        petHomepage.addingPetDataToOwner(usersData.getPetDetails())


    })

    it('verifying owner name details',function(){

        var ownerName = element(by.xpath("//table[1]/tbody/tr[1]/td/b"))
        petHomepage.VerifyingElementAvail(ownerName)
        var finddata = true;
        petHomepage.gettingTextforEle(ownerName,finddata, usersData.getOwnerNewData().firstname)
        expect(finddata).toBe(true);


    })
    it('verifying owner Address details',function(){

        var ownerAddress = element(by.xpath('//table[1]/tbody/tr[2]/td'))
        petHomepage.VerifyingElementAvail(ownerAddress)
        petHomepage.verifyingElements(ownerAddress, usersData.getOwnerNewData().address)

    })
    it('verifying owner city details',function(){

        var ownerCity = element(by.xpath('//table[1]/tbody/tr[3]/td'))
        petHomepage.VerifyingElementAvail(ownerCity)
        petHomepage.verifyingElements(ownerCity, usersData.getOwnerNewData().city)
    })

    it('verifying owner telephone details',function(){

        var ownerTelephone = element(by.xpath('//table[1]/tbody/tr[4]/td'))
        petHomepage.VerifyingElementAvail(ownerTelephone)
        petHomepage.verifyingElements(ownerTelephone, usersData.getOwnerNewData().telephone)

    })

    it('verifying owner pet details',function(){

        var patName = element(by.xpath('//table[2]/tbody/tr/td[1]/dl/dd[1]'))
        petHomepage.VerifyingElementAvail(patName)
        petHomepage.verifyingElements(patName, usersData.getPetDetails().petName)

    })





});

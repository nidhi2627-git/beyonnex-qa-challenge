import HomePage from "../pageobjects/home.page.ts"

describe('Home page functionality tests', () => {

    beforeEach(async() => {
        await HomePage.open()
    })

    it('verify if Header tooltip icon is existing & popup appears on click', async() => {
        var toolTipIcon = await HomePage.popoverTask
        expect(toolTipIcon).toBeExisting()
        await toolTipIcon.click()

        var popup = await HomePage.popoverBody
        expect(popup).toBeDisplayed()
        expect(await popup.getText()).toContain('Shop for moisturizers if the weather is below 19 degrees. Shop for suncreens if the weather is above 34 degrees.')
    })

    it('verify the navigation of Buy sunscreens & Buy moisturizers buttons', async() => {
        var temperatureElem = await (await HomePage.spanTemperature).getText()

        var temperatureValue = temperatureElem.split(" ")[0]
        
        if(parseInt(temperatureValue) < 19) {
            await HomePage.clickOnBuyBtns('moisturizers')
            expect(await browser.getUrl()).toContain('/moisturizer')
        }
        else if(parseInt(temperatureValue) > 34) {
            await HomePage.clickOnBuyBtns('sunscreens')
            expect(await browser.getUrl()).toContain('/sunscreen')
        }
    })

})
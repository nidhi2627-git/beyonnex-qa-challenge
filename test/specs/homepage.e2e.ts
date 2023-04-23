describe('Home page functionality tests', () => {

    beforeEach(async() => {
        await browser.url('https://weathershopper.pythonanywhere.com/')
    })

    it('verify if Header tooltip icon is existing & popup appears on click', async() => {
        var toolTipIcon = await $('*[data-original-title=\'Your task\']')
        expect(toolTipIcon).toBeExisting()
        await toolTipIcon.click()

        var popup = await $('div.popover-body')
        expect(popup).toBeDisplayed()
        expect(await popup.getText()).toContain('Shop for moisturizers if the weather is below 19 degrees. Shop for suncreens if the weather is above 34 degrees.')
    })

    it('verify the navigation of Buy sunscreens & Buy moisturizers buttons', async() => {
        var temperatureElem = await (await $('span#temperature')).getText()

        var temperatureValue = temperatureElem.split(" ")[0]
        
        if(parseInt(temperatureValue) < 19) {
            await (await $('=Buy moisturizers')).click()
            expect(await browser.getUrl()).toContain('/moisturizer')
        }
        else if(parseInt(temperatureValue) > 34) {
            await (await $('=Buy sunscreens')).click()
            expect(await browser.getUrl()).toContain('/sunscreen')
        }
    })

})
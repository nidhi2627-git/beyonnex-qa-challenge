describe('Home page functionality tests', () => {

    it('verify if Header tooltip icon is existing & popup appears on click', async() => {
        await browser.url('https://weathershopper.pythonanywhere.com/')
        await browser.maximizeWindow()

        var toolTipIcon = await $('*[data-original-title=\'Your task\']')
        expect(toolTipIcon).toBeExisting()
        await toolTipIcon.click()

        var popup = await $('div.popover-body')
        expect(popup).toBeDisplayed()
        expect(await popup.getText()).toContain('Shop for moisturizers if the weather is below 19 degrees. Shop for suncreens if the weather is above 34 degrees.')
    })

})
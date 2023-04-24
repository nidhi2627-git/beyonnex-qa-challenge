import MoisturizerPage from "../pageobjects/moisturizer.page.ts"

describe('Moisturizers page functionality tests', () => {

    beforeEach(async() => {
        MoisturizerPage.open()
    })

    it('verify if Header tooltip icon is existing & popup appears on click', async() => {
        var toolTipIcon = await MoisturizerPage.popoverTask
        expect(toolTipIcon).toBeExisting()
        await toolTipIcon.click()

        var popup = await MoisturizerPage.popoverBody
        expect(popup).toBeDisplayed()
        expect(await popup.getText()).toContain('Add two moisturizers to your cart. First, select the least expensive mositurizer that contains Aloe. For your second moisturizer, select the least expensive moisturizer that contains almond. Click on cart when you are done.')
    })

})
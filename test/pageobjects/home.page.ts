import Page from "./page.ts"

class HomePage extends Page {

    public get popoverTask() {
        return $('*[data-original-title=\'Your task\']')
    }

    public get popoverBody() {
        return $('div.popover-body')
    }

    public get spanTemperature() {
        return $('span#temperature')
    }

    public get btnBuyMoisturizers() {
        return $('=Buy moisturizers')
    }

    public get btnBuySunscreens() {
        return $('=Buy sunscreens')
    }
    
    public open() {
        return super.open('')
    }

    public async clickOnBuyBtns(textContaining: string) {
        if(textContaining === 'moisturizers') {
            await (await this.btnBuyMoisturizers).click()
        }
        else {
            await (await this.btnBuySunscreens).click()
        }
    }
}

export default new HomePage()
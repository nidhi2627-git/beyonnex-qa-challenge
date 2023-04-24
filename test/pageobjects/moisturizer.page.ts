import Page from "./page.ts";

class MoisturizerPage extends Page {

    public get popoverTask() {
        return $('*[data-original-title=\'Your task\']')
    }

    public get popoverBody() {
        return $('div.popover-body')
    }
    
    public open() {
        return super.open('moisturizer')
    }
}

export default new MoisturizerPage()
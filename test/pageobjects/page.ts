export default class Page {

    public open(path: string) {
        return browser.url(`https://weathershopper.pythonanywhere.com/${path}`)
    }
}
module.exports = class Page{
    open() {
        return browser.url('https://www.digi24.ro/')
    }
}
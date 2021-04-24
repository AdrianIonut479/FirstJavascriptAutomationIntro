const Digi24Page = require('../pageobjects/digi24.page')
//const {clickOnPolitica} = require('../pageobjects/digi24.utils');
const Digi24Utils = require('../utils/digi24.utils');


describe('Go to Digi24 page', () => {
    it('Open Page', async () => {
        Digi24Page.open();
        await browser.pause(5000);
        await Digi24Utils.clickOnPolitica();
        await browser.pause(5000);
    })
})

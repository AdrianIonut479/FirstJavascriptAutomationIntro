const Digi24Page = require('../pageobjects/digi24.page')
const Digi24PageMagazin = require('../pageobjects/digi24.pageMagazin')
//const {clickOnPolitica} = require('../pageobjects/digi24.utils');
const Digi24Utils = require('../utils/digi24.utils');


describe('Go to Digi24 page', () => {
    it('Open Page', async () => {
        Digi24Page.open();
        await browser.pause(3000);
        await Digi24Utils.clickOnMagazin();
        await browser.pause(3000);
        await Digi24Utils.clickOnCookie();
        await browser.pause(3000);
        await Digi24Utils.clickOnArticol();
        await browser.pause(3000);
        await Digi24Utils.clickOnMaiMulte();
        await browser.pause(3000);
        await Digi24Utils.clickOnEducatie();
        await browser.pause(3000);

    })
  
})

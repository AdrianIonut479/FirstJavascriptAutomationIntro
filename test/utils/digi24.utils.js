const digi24Page = require('../pageobjects/digi24.page')
const digi24PageMagazin = require('../pageobjects/digi24.pageMagazin')
const Digi24Page = require('../pageobjects/digi24.page')
const Digi24Utils = {

clickOnPolitica: async () => {
    const politica = await digi24Page.politica;
    await politica.click();
    await browser.pause(5000);
},

clickOnMagazin: async () => {
    const politica = await digi24Page.magazin;
    await politica.click();
    await browser.pause(2000);
},


clickOnCookie: async () => {
    const coockie = await digi24PageMagazin.cookie;
    await coockie.click();
    await browser.pause(2000);
},

clickOnArticol: async () => {
    const articol = await digi24PageMagazin.articol;
    await articol.click();
    await browser.pause(2000);
},

clickOnMaiMulte: async () => {
    const maiMulte = await digi24PageMagazin.maiMulte;
    await maiMulte.click();
    await browser.pause(2000);
},
clickOnEducatie: async () => {
    const educatie = await digi24PageMagazin.educatie;
    await educatie.click();
    await browser.pause(2000);
}



}

module.exports = Digi24Utils;
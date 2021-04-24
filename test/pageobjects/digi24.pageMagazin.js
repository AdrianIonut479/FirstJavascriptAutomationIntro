const PageMagazin = require('./pageMagazin');

class DigiPage extends PageMagazin {
    get articol () {return $('body > main > section > div.container > div > div.col-4.col-md-5.col-sm-12 > article:nth-child(1) > h4 > a')}
    get cookie() {return $('#gdpr > div > div.gdpr-button.gdpr-trigger')}
    get maiMulte() {return $('body > header > div.container.gutter-col-0 > div > nav > button')}
    get educatie() {return $('body > header > nav > div > ul > li:nth-child(2) > nav > a:nth-child(4)')}
    open(){
      return  super.open();
    }

}

module.exports = new DigiPage();
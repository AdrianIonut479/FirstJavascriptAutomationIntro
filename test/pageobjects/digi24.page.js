const Page = require('./page');

class DigiPage extends Page {
    get politica () { return $('.container .flex .nav .nav-list-item:nth-child(1) a')}
    get magazin () { return $('.container .flex .nav .nav-list-item:nth-child(7) a')}
    open(){
      return  super.open();
    }

}

module.exports = new DigiPage();
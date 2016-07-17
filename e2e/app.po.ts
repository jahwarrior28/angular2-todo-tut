export class Angular2TotoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-toto-app-app h1')).getText();
  }
}

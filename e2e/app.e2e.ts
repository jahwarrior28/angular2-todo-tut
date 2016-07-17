import { Angular2TotoAppPage } from './app.po';

describe('angular2-toto-app App', function() {
  let page: Angular2TotoAppPage;

  beforeEach(() => {
    page = new Angular2TotoAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-toto-app works!');
  });
});

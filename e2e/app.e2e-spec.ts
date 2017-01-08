import { Angular2WithCLIPage } from './app.po';

describe('angular2-with-cli App', function() {
  let page: Angular2WithCLIPage;

  beforeEach(() => {
    page = new Angular2WithCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

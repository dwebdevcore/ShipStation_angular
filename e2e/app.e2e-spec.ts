import { ShipStationPage } from './app.po';

describe('ship-station App', () => {
  let page: ShipStationPage;

  beforeEach(() => {
    page = new ShipStationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

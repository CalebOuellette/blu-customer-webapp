import { BlueCustomerWebappPage } from './app.po';

describe('blue-customer-webapp App', () => {
  let page: BlueCustomerWebappPage;

  beforeEach(() => {
    page = new BlueCustomerWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

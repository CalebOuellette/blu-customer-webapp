import { BluCustomerWebappPage } from './app.po';

describe('blu-customer-webapp App', () => {
  let page: BluCustomerWebappPage;

  beforeEach(() => {
    page = new BluCustomerWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { Ng4ProtractorFormsTestPage } from './app.po';

describe('ng4-protractor-forms-test App', () => {
  let page: Ng4ProtractorFormsTestPage;

  beforeEach(() => {
    page = new Ng4ProtractorFormsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

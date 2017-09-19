import { HomePage } from './app.po';

describe('ng4-protractor-forms-test App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display form title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Formulario de pedido');
  });

  it('should Show button when checkbox is checked', () => {
    page.navigateTo();
    page.submitForm();
  });

});

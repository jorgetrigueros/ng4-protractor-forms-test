import { browser, element, by } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h3')).getText();
  }

  submitForm() {
    element(by.cssContainingText('option', 'Producto-1')).click();
    element(by.css('input[id="cantidad"]')).sendKeys('2');
    element(by.css('input[id="email"]')).sendKeys('jorgetriguerosfalque@gmail.com');
    element(by.css('[id="chkTerminos"]')).click();
    element(by.css('button[id="btnSend"]')).click();
  }
}

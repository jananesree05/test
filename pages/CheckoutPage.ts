import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  constructor(page: Page) { this.page = page; }

  async proceedToCheckout() {
    await this.page.click('#checkout');
    await this.page.waitForSelector('#first-name');
  }

  async fillCustomer(first: string, last: string, postal: string) {
    await this.page.fill('#first-name', first);
    await this.page.fill('#last-name', last);
    await this.page.fill('#postal-code', postal);
    await this.page.click('#continue');
  }
}

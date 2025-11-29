import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async beginCheckout(first: string, last: string, zip: string) {
    await this.page.locator('#checkout').click();
    await this.page.locator('#first-name').fill(first);
    await this.page.locator('#last-name').fill(last);
    await this.page.locator('#postal-code').fill(zip);
    await this.page.locator('#continue').click();
  }

  async finishCheckout() {
    await this.page.locator('#finish').click();
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}
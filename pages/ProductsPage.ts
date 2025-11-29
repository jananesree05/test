import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  constructor(page: Page) { this.page = page; }

  async addBackpackToCart() {
    await this.page.waitForSelector('#add-to-cart-sauce-labs-backpack', { state: 'visible' });
    await this.page.click('#add-to-cart-sauce-labs-backpack');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
    await this.page.waitForSelector('.cart_list');
  }
}

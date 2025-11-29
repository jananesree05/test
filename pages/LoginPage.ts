import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) { this.page = page; }
  async goto() {
    await this.page.goto('https://www.saucedemo.com/', { waitUntil: 'networkidle', timeout: 60000 });
  }
  async login(username: string, password: string) {
    await this.page.locator('#user-name').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#login-button').click();
    await this.page.waitForURL(/inventory.html/, { timeout: 30000 });
  }
}

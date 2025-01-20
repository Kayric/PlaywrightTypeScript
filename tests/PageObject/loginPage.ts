import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly locators: Record<string, Locator>;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      usernameInput: this.page.locator('input[data-test="username"]'), 
      passwordInput: this.page.locator('input[data-test="password"]'), 
      loginButton: this.page.locator('input[data-test="login-button"]'),
      errorMessage: this.page.locator('div[class="error-message-container error"]'),
    };
  }

  async navigateToLoginPage(): Promise<void> {
    await this.page.goto(`${process.env.baseURL}`);
  }

  async inputUsername(username: string): Promise<void> {
    await this.locators.usernameInput.fill(username);
  }

  async inputValidPassword(): Promise<void> {
    await this.locators.passwordInput.fill(`${process.env.validPassword}`);
  }

  async clickLoginButton(): Promise<void> {
    await this.locators.loginButton.click();
  }

  async checkErrorMessage(): Promise<void> {
    await expect(this.locators.errorMessage).toBeVisible();
  }
}
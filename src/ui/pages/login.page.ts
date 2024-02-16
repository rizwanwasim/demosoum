import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  //   readonly welcome: Locator;
  //   readonly emailLabel: Locator;
  //   readonly passwordLabel: Locator;
  //   readonly email: Locator;
  readonly password: Locator;
  readonly login: Locator;
  //   readonly loginText: Locator;
  //   readonly signUpButton: Locator;
  //   readonly forgetPassButton: Locator;
  readonly labsLogo: Locator;
  readonly username: Locator;
  readonly errorLocked: Locator;
  readonly sideMenu: Locator;
  readonly openSideMenu: Locator;
  readonly logoutButton: Locator;

  // const emailis = "riz@getMaxListeners.xom";
  constructor(page: Page) {
    this.page = page;
    this.labsLogo = page.getByText("Swag Labs");
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');

    this.errorLocked = page.locator('[data-test="error"]');

    this.sideMenu = page.getByRole("button", { name: "Open Menu" });
    this.openSideMenu = page
      .locator("div")
      .filter({ hasText: /^All ItemsAboutLogoutReset App State$/ });
    this.logoutButton = page.getByRole("link", { name: "Logout" });

    this.login = page.locator('[data-test="login-button"]');
  }
  // Method to set the email input field
  async setEmail(emailValue: string) {
    if (emailValue) {
      // this.username.click();
      // console.log(emailValue);
      await this.username.fill(emailValue);
    }
  }

  // Method to set the password input field
  async setPassword(passwordValue: string) {
    if (passwordValue) {
      this.password.click();
      await this.password.fill(passwordValue);
    }
  }
}

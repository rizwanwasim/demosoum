import { expect } from "@playwright/test";
import { LoginPage } from "./login.page";
// import { CartPage } from "./cart.page";
// import { DashboardPage } from "../../../Buildware/pages/Dashboard/DashboardPage";
// import { LoginPage } from "../pages/LoginPage";

export async function LoginUser(
  page: any,
  username?: string,
  password?: string
) {
  const loginPage = new LoginPage(page);
  await loginPage.username.click();
  //   await loginPage.setEmail("standard_user");
  await loginPage.setEmail(username!);
  await loginPage.password.click();
  await loginPage.setPassword(password!);
  await loginPage.login.click();
  await page.waitForTimeout(2000);

  // await dashPage.pendingInvitesIgnoreButton.click();
}
// export async function setEmail(emailValue: string) {
//     if (emailValue) {
//         this.username.click();
//         await this.username.fill(emailValue);
//     }
// }

// // Method to set the password input field
// export async function setPassword(passwordValue: string) {
//     if (passwordValue) {
//         this.password.click();
//         await this.password.fill(passwordValue);
//     }
// }
export async function loginPageErrorVisible(loginPage: any) {
  // await MainPage.waitForTimeout(3000);
  await expect(loginPage.errorLocked).toBeVisible();
  await expect(loginPage.errorLocked).toHaveText(
    "Epic sadface: Sorry, this user has been locked out."
  );
  // await expect(MainPage.labsLogo).toBeVisible();
  // // Get the current URL
  // const currentUrl = await page.url();
  // // Check if the current URL contains "inventory.html
  // const containsInventory = currentUrl.includes("inventory.html");
  // // Assertion to check if the URL contains "inventory.html"
  // expect(containsInventory).toBe(true);
  // await expect(MainPage.cartIcon).toBeVisible();
  // await expect(MainPage.filterIcon).toBeVisible();
  // await browser.close();
}
export async function LogoutUser(
  page: any
  // username?: string,
  // password?: string
) {
  // const logoutPage = new LogoutPage(page);
  const loginPage = new LoginPage(page);
  await loginPage.sideMenu.click();
  expect(loginPage.sideMenu).toBeVisible();
  await loginPage.logoutButton.click();
  expect(loginPage.labsLogo).toBeVisible();
  // Get the current URL of the page
  //   await loginPage.setEmail("standard_user");
  // await loginPage.setEmail(username!);
  // await loginPage.password.click();
  // await loginPage.setPassword(password!);
  // await loginPage.login.click();
  // Get the current URL of the page
  const currentUrl = page.url();

  // Verify the URL after logout
  expect(currentUrl).toBe(process.env.BASE_URL);

  // await dashPage.pendingInvitesIgnoreButton.click();
}

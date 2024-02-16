import { expect } from "@playwright/test";
import { LoginPage } from "./login.page";

export async function LoginUser(
  page: any,
  username?: string,
  password?: string
) {
  const loginPage = new LoginPage(page);
  await loginPage.username.click();
  await loginPage.setEmail(username!);
  await loginPage.password.click();
  await loginPage.setPassword(password!);
  await loginPage.login.click();
  await page.waitForTimeout(2000);
}

export async function loginPageErrorVisible(loginPage: any) {
  // await MainPage.waitForTimeout(3000);
  await expect(loginPage.errorLocked).toBeVisible();
  await expect(loginPage.errorLocked).toHaveText(
    "Epic sadface: Sorry, this user has been locked out."
  );
}
export async function LogoutUser(mainPage: any, loginPage: any) {
  // const logoutPage = new LoginPage(page);
  // const mainPage = new MainPage(MainPage);
  await mainPage.sideMenu.click();
  expect(mainPage.sideMenu).toBeVisible();
  await mainPage.logoutButton.click();
  expect(loginPage.labsLogo).toBeVisible();
  expect(loginPage.username).toBeVisible();
  expect(loginPage.password).toBeVisible();
  // const currentUrl = loginPage.url();
  // // Verify the URL after logout
  // expect(currentUrl).toBe(process.env.BASE_URL);
}

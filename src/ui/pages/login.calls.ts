import { expect } from "@playwright/test";
import { LoginPage } from "./login.page";
import { MainPage } from "./main.page";

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
export async function LogoutUser(mainPage: any, page: any) {
  // const mainPage = new MainPage(page);
  await mainPage.sideMenu.click();
  expect(mainPage.sideMenu).toBeVisible();
  await mainPage.logoutButton.click();
  // Get the current URL
  const currentUrl = await page.url();
  // Check if the current URL contains "inventory.html
  const loginUrl = currentUrl.includes(process.env.BASE_URL);
  expect(loginUrl).toBe(true);
  // await expect(MainPage.cartIcon).toBeVisible();
  // await expect(MainPage.filterIcon).toBeVisible();
}

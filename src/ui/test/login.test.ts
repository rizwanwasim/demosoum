import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import {
  LoginUser,
  LogoutUser,
  loginPageErrorVisible,
} from "../pages/login.calls";
import { MainPage } from "../pages/main.page";
import { mainPageFieldsVisible } from "../pages/main.calls";

test.describe("Login Functionality", () => {
  test(" Login Page Loaded and Signed-in Successfully ", async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto("/");
    await LoginUser(page, process.env.STANDARD, process.env.PASSWORD);
    await mainPageFieldsVisible(mainPage, page);
    await page.close();
  });

  test("Login with Error User ", async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto("/");
    await LoginUser(page, process.env.ERROR_USER, process.env.PASSWORD);
    await mainPageFieldsVisible(mainPage, page);
    await page.close();
  });

  test(" Login with locked User ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("/");
    await LoginUser(page, process.env.LOCKED_USER, process.env.PASSWORD);
    await loginPageErrorVisible(loginPage);
    await page.close();
  });
});
test.describe("Logout Functionality", () => {
  test("Verify Logout Functionality", async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto("/");
    // await page.waitForTimeout(3000);
    await LoginUser(page, process.env.STANDARD, process.env.PASSWORD);
    await mainPageFieldsVisible(mainPage, page);
    await expect(mainPage.dataContainer).toBeVisible();
    await LogoutUser(page);
    // Close the browser
    await page.close();
    // Get the current URL of the page
  });
});

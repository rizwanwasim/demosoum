import { test, expect, Page } from "@playwright/test";
import * as dotenv from "dotenv";
import { LoginPage } from "../pages/login.page";
import { LoginUser } from "../pages/login.calls";
import { MainPage } from "../pages/main.page";
import { mainPageFieldsVisible } from "../pages/main.calls";

// Load environment variables from .env file
dotenv.config();

test.describe("Login Page", () => {
  test(" Login Page Loaded and Signed-in Successfully ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    await page.goto("/");
    await LoginUser(page, process.env.STANDARD, process.env.PASSWORD);
    // await page.waitForTimeout(3000);
    await mainPageFieldsVisible(mainPage);
  });
  test(" Login with locked User ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("/");
    await LoginUser(page, process.env.LOCKED_USER, process.env.PASSWORD);
    await expect(loginPage.errorLocked).toBeVisible();
    await expect(loginPage.errorLocked).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
  test("Login with Error User ", async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto("/");
    await LoginUser(page, process.env.ERROR_USER, process.env.PASSWORD);
    // await page.waitForTimeout(3000);
    await mainPageFieldsVisible(mainPage);
  });
});

import { test, expect, Page } from "@playwright/test";
import * as dotenv from "dotenv";
import { LoginPage } from "../pages/login.page";
import { LoginUser, loginPageErrorVisible } from "../pages/login.calls";
import { MainPage } from "../pages/main.page";
import { mainPageFieldsVisible } from "../pages/main.calls";

test.describe("Login Page", () => {
  test(" Login Page Loaded and Signed-in Successfully ", async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto("/");
    await LoginUser(page, process.env.STANDARD, process.env.PASSWORD);
    await mainPageFieldsVisible(mainPage, page);
  });

  test("Login with Error User ", async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto("/");
    await LoginUser(page, process.env.ERROR_USER, process.env.PASSWORD);
    await mainPageFieldsVisible(mainPage, page);
  });

  test(" Login with locked User ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("/");
    await LoginUser(page, process.env.LOCKED_USER, process.env.PASSWORD);
    await loginPageErrorVisible(loginPage);
  });
});

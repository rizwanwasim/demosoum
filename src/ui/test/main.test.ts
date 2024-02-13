import { test, expect } from "@playwright/test";
import { LoginUser } from "../pages/login.calls";
import { MainPage } from "../pages/main.page";
import { mainPageFieldsVisible } from "../pages/main.calls";

test.describe("Main Page", () => {
  test("Navigate to Main Page", async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto("/");
    // await page.waitForTimeout(3000);
    await LoginUser(page, process.env.STANDARD, process.env.PASSWORD);
    await mainPageFieldsVisible(mainPage, page);

    //   await mainPage.myProjectsTab.click();
  });
  test("Main Page", async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto("/");
    // await page.waitForTimeout(3000);
    await LoginUser(page, process.env.STANDARD, process.env.PASSWORD);
    await mainPageFieldsVisible(mainPage, page);

    //   await mainPage.myProjectsTab.click();
  });
});

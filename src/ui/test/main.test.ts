import { test, expect } from "@playwright/test";
// import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import * as dotenv from "dotenv";
// import { LoginUser } from "../../api/resources/login/login.calls";
// import {
//   assertDashboardElementsVisible,
//   assertProjectFormFieldsVisible,
//   assertProjectFormLabelsVisible,
// } from "../../api/resources/dashboard/dashboard.calls";
import { TIMEOUT } from "dns";
import { LoginUser } from "../pages/login.calls";
import { MainPage } from "../pages/main.page";
import { mainPageFieldsVisible } from "../pages/main.calls";

// Load environment variables from .env file
dotenv.config();

test.describe("Main Page", () => {
  test("Navigate to Main Page", async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto("/");
    await page.waitForTimeout(3000);
    await LoginUser(page);
    await mainPageFieldsVisible(mainPage);

    //   await mainPage.myProjectsTab.click();
  });
});

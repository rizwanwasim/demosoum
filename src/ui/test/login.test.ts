import { test, expect, Page } from "@playwright/test";
import * as dotenv from "dotenv";
import { LoginPage } from "../pages/login.page";
import { LoginUser } from "../pages/login.calls";
// import { LoginUser } from "../../pages/login.calls";
// import { DashboardPage } from "../pages/Dashboard/DashboardPage";
// import { LoginUser } from "../../api/resources/login/login.calls";
// import { assertDashboardElementsVisible } from "../../api/resources/dashboard/dashboard.calls";

// Load environment variables from .env file
dotenv.config();

test("Login Page Loaded and Signed-in Successfully ", async ({ page }) => {
//   const dashPage = new DashboardPage(page);
  await page.goto("/");
//   await page.waitForTimeout(3000);
  await LoginUser(page);
  
//   await page.waitForTimeout(3000);
//   await assertDashboardElementsVisible(dashPage);
  // await page.waitForTimeout(3000);
  // await dashPage.pendingInvitationDialog.isVisible();
//   await dashPage.pendingInvitesIgnoreButton.click();
//   await assertDashboardElementsVisible(dashPage);
//   await dashPage.expandButton.click();
//   await expect(dashPage.logoutButton).toBeVisible();
});
test.skip("Login Page Loaded and Signed-in with Valid Email and Wrong Password  ", async ({
  page,
}) => {
//   const loginPage = new LoginPage(page);
//   const dashPage = new DashboardPage(page);
  await page.goto("/");
  // await page.waitForTimeout(3000);
  // await expect(loginPage.loginText).toBeVisible();
  // await expect(loginPage.signUpButton).toBeVisible();
  // await expect(loginPage.emailLabel).toBeVisible();
  // await expect(loginPage.passwordLabel).toBeVisible();
  // await loginPage.setEmail(process.env.correctEmial!);
  // await loginPage.setPassword(process.env.correctPass!);
  // await loginPage.login.click();
  // await expect(dashPage.dashLogo).toBeVisible();
  // await expect(dashPage.dashboardHeading).toBeVisible();
  // await expect(dashPage.notificationFeed).toBeVisible();
  // await expect(dashPage.tasksFeed).toBeVisible();
  // await expect(dashPage.myActiveProjectFeed).toBeVisible();
  // await expect(dashPage.myProjectsTab).toBeVisible();
  // await expect(dashPage.myTaksTab).toBeVisible();
  // await expect(dashPage.createProjectButton).toBeVisible();
  // await dashPage.pendingInvitesIgnoreButton.click();
  // await dashPage.expandButton.click();
  // await expect(dashPage.logoutButton).toBeVisible();
});
test.skip("Login Page Loaded and Signed-in with inValid Email and Correct Password ", async ({
  page,
}) => {
//   const loginPage = new LoginPage(page);
//   const dashPage = new DashboardPage(page);
  await page.goto("/");
  // await page.waitForTimeout(3000);
  // await expect(loginPage.loginText).toBeVisible();
  // await expect(loginPage.signUpButton).toBeVisible();
  // await expect(loginPage.emailLabel).toBeVisible();
  // await expect(loginPage.passwordLabel).toBeVisible();
  // await loginPage.setEmail(process.env.correctEmial!);
  // await loginPage.setPassword(process.env.correctPass!);
  // await loginPage.login.click();
  // await expect(dashPage.dashLogo).toBeVisible();
  // await expect(dashPage.dashboardHeading).toBeVisible();
  // await expect(dashPage.notificationFeed).toBeVisible();
  // await expect(dashPage.tasksFeed).toBeVisible();
  // await expect(dashPage.myActiveProjectFeed).toBeVisible();
  // await expect(dashPage.myProjectsTab).toBeVisible();
  // await expect(dashPage.myTaksTab).toBeVisible();
  // await expect(dashPage.createProjectButton).toBeVisible();
  // await dashPage.pendingInvitesIgnoreButton.click();
  // await dashPage.expandButton.click();
  // await expect(dashPage.logoutButton).toBeVisible();
});



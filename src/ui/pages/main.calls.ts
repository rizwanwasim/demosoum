import { expect } from "@playwright/test";

export async function assertDashboardElementsVisible(dashPage: any) {
  // Ensure that all dashboard elements are visible
  // await dashPage.timeout
  // await expect(dashPage.dashLogo).toBeVisible();
  await expect(dashPage.dashboardHeading).toBeVisible();
  await expect(dashPage.notificationFeed).toBeVisible();
  await expect(dashPage.tasksFeed).toBeVisible();
  await expect(dashPage.myActiveProjectFeed).toBeVisible();
  await expect(dashPage.myProjectsTab).toBeVisible();
  await expect(dashPage.myTaksTab).toBeVisible();

  await expect(dashPage.createProjectButton).toBeVisible();
}

export async function assertProjectFormLabelsVisible(dashPage: any) {
  // Ensure that all project information elements are visible
  await expect(dashPage.projectNameLabel).toBeVisible();
  await expect(dashPage.siteAddressLabel).toBeVisible();
  await expect(dashPage.projectBudgetLabel).toBeVisible();
  await expect(dashPage.projectStartDateLabel).toBeVisible();
  await expect(dashPage.projectEndDateLabel).toBeVisible();
  // await expect(dashPage.projectInfoCancelButton).toBeVisible(); // Fix typo in your code
  await expect(dashPage.projectInfoCreateProjectButton).toBeVisible();
  await expect(dashPage.projectInfoCrossButton).toBeVisible();
}

export async function assertProjectFormFieldsVisible(dashPage: any) {
  await expect(dashPage.projectNameField).toBeVisible();
  await expect(dashPage.siteAddressField).toBeVisible();
  await expect(dashPage.projectBudgetField).toBeVisible();
  await expect(dashPage.projectStartDateField).toBeVisible();
  await expect(dashPage.projectEndDateField).toBeVisible();
  await expect(dashPage.projectInfoCancleButton).toBeVisible();
  await expect(dashPage.projectInfoCreateProjectButton).toBeVisible();
  await expect(dashPage.projectInfoCrossButton).toBeVisible();
}

export async function mainPageFieldsVisible(MainPage: any, page: any) {
  await page.waitForTimeout(2000);
  await expect(MainPage.labsLogo).toBeVisible();
  // const page = await MainPage;
  // Get the current URL
  // const currentUrl = await page.url();

  // // Check if the current URL contains "inventory.html"
  // const containsInventory = currentUrl.includes("inventory.html");
  // // Assertion to check if the URL contains "inventory.html"
  // expect(containsInventory).toBe(true);
  await expect(MainPage.cartIcon).toBeVisible();
  await expect(MainPage.filterIcon).toBeVisible();
  // await browser.close();
}

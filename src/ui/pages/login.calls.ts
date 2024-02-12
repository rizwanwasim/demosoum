import { expect } from "@playwright/test";
import { LoginPage } from "./login.page";
// import { DashboardPage } from "../../../Buildware/pages/Dashboard/DashboardPage";
// import { LoginPage } from "../pages/LoginPage";

export async function LoginUser(page: any) {
  const loginPage = new LoginPage(page);
  // const dashPage = new DashboardPage(page);
//   await page.goto("/");
  await page.waitForTimeout(3000);
//   await expect(loginPage.emailLabel).toBeVisible();
//   await expect(loginPage.passwordLabel).toBeVisible();
  await loginPage.username.click();
//   await loginPage.setEmail("standard_user");
  await loginPage.setEmail(process.env.STANDARD!);
  await loginPage.password.click();
  await loginPage.setPassword(process.env.PASSWORD!);
  await loginPage.login.click();
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

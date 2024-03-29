import { Page, expect } from "@playwright/test";
import { CartPage } from "./cart.page";

// export async function assertDashboardElementsVisible(dashPage: any) {
//   // Ensure that all dashboard elements are visible
//   // await dashPage.timeout
//   // await expect(dashPage.dashLogo).toBeVisible();
//   await expect(dashPage.dashboardHeading).toBeVisible();
//   await expect(dashPage.notificationFeed).toBeVisible();
//   await expect(dashPage.tasksFeed).toBeVisible();
//   await expect(dashPage.myActiveProjectFeed).toBeVisible();
//   await expect(dashPage.myProjectsTab).toBeVisible();
//   await expect(dashPage.myTaksTab).toBeVisible();

//   await expect(dashPage.createProjectButton).toBeVisible();
// }

// export async function assertProjectFormLabelsVisible(dashPage: any) {
//   // Ensure that all project information elements are visible
//   await expect(dashPage.projectNameLabel).toBeVisible();
//   await expect(dashPage.siteAddressLabel).toBeVisible();
//   await expect(dashPage.projectBudgetLabel).toBeVisible();
//   await expect(dashPage.projectStartDateLabel).toBeVisible();
//   await expect(dashPage.projectEndDateLabel).toBeVisible();
//   // await expect(dashPage.projectInfoCancelButton).toBeVisible(); // Fix typo in your code
//   await expect(dashPage.projectInfoCreateProjectButton).toBeVisible();
//   await expect(dashPage.projectInfoCrossButton).toBeVisible();
// }

// export async function assertProjectFormFieldsVisible(dashPage: any) {
//   await expect(dashPage.projectNameField).toBeVisible();
//   await expect(dashPage.siteAddressField).toBeVisible();
//   await expect(dashPage.projectBudgetField).toBeVisible();
//   await expect(dashPage.projectStartDateField).toBeVisible();
//   await expect(dashPage.projectEndDateField).toBeVisible();
//   await expect(dashPage.projectInfoCancleButton).toBeVisible();
//   await expect(dashPage.projectInfoCreateProjectButton).toBeVisible();
//   await expect(dashPage.projectInfoCrossButton).toBeVisible();
// }

export async function mainPageFieldsVisible(MainPage: any, page: any) {
  // await MainPage.waitForTimeout(3000);
  await expect(MainPage.labsLogo).toBeVisible();
  // Get the current URL
  const currentUrl = await page.url();
  // Check if the current URL contains "inventory.html
  const containsInventory = currentUrl.includes("inventory.html");
  // Assertion to check if the URL contains "inventory.html"
  expect(containsInventory).toBe(true);
  await expect(MainPage.cartIcon).toBeVisible();
  await expect(MainPage.filterIcon).toBeVisible();
  // await browser.close();
}

export async function addProductsToCart(page, totalProducts) {
  for (let i = 1; i <= totalProducts; i++) {
    // Locate the product name
    const productNameLocator = `[id='item_${i}_title_link']`;
    const productNameElement = await page.waitForSelector(productNameLocator);

    // Extract the product name text and modify it
    let productNameText = (await productNameElement.textContent())?.trim();

    // Ensure productNameText is not undefined before proceeding
    if (productNameText !== undefined) {
      productNameText = productNameText.replace(/\s+/g, "-").toLowerCase();

      // Locate the "Add to Cart" button using the modified product name
      const addToCartButtonLocator = `[data-test="add-to-cart-${productNameText}"]`;
      const addToCartButton = await page.waitForSelector(
        addToCartButtonLocator
        // { visible: true }
      );

      // Scroll the button into view if needed
      await addToCartButton.scrollIntoViewIfNeeded();

      // Click on the "Add to Cart" button
      await addToCartButton.click();
      if (i.toString() == totalProducts) {
        return;
      }
    } else {
      // console.log(`Failed to retrieve product name for product ${i}.`);
    }
  }
}

export async function cartPageFieldsVisible(CartPage: any, page: any) {
  // await MainPage.waitForTimeout(3000);
  await expect(CartPage.labsLogo).toBeVisible();
  // Get the current URL
  const currentUrl = await page.url();
  // Check if the current URL contains "inventory.html
  const containsInventory = currentUrl.includes(process.env.CART);
  // Assertion to check if the URL contains "inventory.html"
  expect(containsInventory).toBe(true);
  await expect(CartPage.cartIcon).toBeVisible();
}
// Function to get count of remove buttons in cart page
export async function getRemoveButtonCount(CartPage: any): Promise<number> {
  // Constructing the selector for all remove buttons
  const removeButtonSelector = CartPage.removeButton;

  // Getting the count of remove buttons
  const removeButtonCount = await removeButtonSelector.count();
  //   const removeButtonsCount = removeButtonCount;
  return removeButtonCount;
}

import { expect, test } from "@playwright/test";
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
    await expect(mainPage.dataContainer).toBeVisible();

    //   await mainPage.myProjectsTab.click();
  });
  test("Main Page", async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto("/");
    // await page.waitForTimeout(3000);
    await LoginUser(page, process.env.STANDARD, process.env.PASSWORD);
    await mainPageFieldsVisible(mainPage, page);
    // Iterate over the four products on the page
    for (let i = 1; i <= 4; i++) {
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

        console.log(`Added ${productNameText} to cart.`);
      } else {
        console.log(`Failed to retrieve product name for product ${i}.`);
      }
    }
  });
});

import { expect, test } from "@playwright/test";
import { LoginUser } from "../pages/login.calls";
import { MainPage } from "../pages/main.page";
import {
  addProductsToCart,
  getCartItemCount,
  mainPageFieldsVisible,
} from "../pages/main.calls";
import { products } from "../resource";
import {
  cartPageFieldsVisible,
  getRemoveButtonCount,
} from "../pages/cart.calls";
import { CartPage } from "../pages/cart.page";

test.describe("Cart Page", async () => {
  test("Shopping Page to Cart", async ({ page }) => {
    const mainPage = new MainPage(page);
    await page.goto("/");
    // await page.waitForTimeout(3000);
    await LoginUser(page, process.env.STANDARD, process.env.PASSWORD);
    await mainPageFieldsVisible(mainPage, page);
    await expect(mainPage.dataContainer).toBeVisible();
    // await page.close();
    //   await mainPage.myProjectsTab.click();
  });
  test("Add to Cart with Standar User", async ({ page }) => {
    const mainPage = new MainPage(page);
    const cartPage = new CartPage(page);
    await page.goto("/");
    // await page.waitForTimeout(3000);
    await LoginUser(page, process.env.STANDARD, process.env.PASSWORD);
    await mainPageFieldsVisible(mainPage, page);
    const selectProducts = products.fourProducts;
    await addProductsToCart(page, selectProducts); // Pass 'page' and total number of products as arguments
    const cartCount = await getCartItemCount(mainPage, mainPage.cartIcon);
    expect(cartCount).toBe(selectProducts);
    await mainPage.cartIcon.click();
    await cartPageFieldsVisible(cartPage, page); // Pass 'page' and total number of products as arguments
    const addedProducts = await getRemoveButtonCount(cartPage);
    expect(cartCount).toBe(addedProducts.toString());
    await page.close();
  });
  test("Shopping Page to Cart with Error User", async ({ page }) => {
    const mainPage = new MainPage(page);
    const cartPage = new CartPage(page);
    await page.goto("/");
    // await page.waitForTimeout(3000);
    await LoginUser(page, process.env.ERROR_USER, process.env.PASSWORD);
    await mainPageFieldsVisible(mainPage, page);
    const selectProducts = products.fourProducts;
    const maxSelectedProducts = products.twoProducts;
    await addProductsToCart(page, selectProducts); // Pass 'page' and total number of products as arguments
    const cartCount = await getCartItemCount(mainPage, mainPage.cartIcon);
    expect(cartCount).toBe(maxSelectedProducts);
    await mainPage.cartIcon.click();
    await cartPageFieldsVisible(cartPage, page); // Pass 'page' and total number of products as arguments
    const addedProducts = await getRemoveButtonCount(cartPage);
    expect(cartCount).toBe(addedProducts.toString());
    await page.close();
  });
});

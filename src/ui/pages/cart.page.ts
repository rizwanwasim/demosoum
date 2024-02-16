import { test, expect, Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  readonly labsLogo: Locator;
  readonly cartIcon: Locator;
  readonly filterIcon: Locator;
  readonly dataContainer: Locator;
  readonly cartBadge: Locator;
  readonly cartValue: Locator;
  readonly removeButton: Locator;

  // const emailis = "riz@getMaxListeners.xom";
  constructor(page: Page) {
    this.page = page;
    this.labsLogo = page.getByText("Swag Labs");
    this.cartIcon = page.locator("#shopping_cart_container a");
    this.filterIcon = page.locator('[data-test="product_sort_container"]');
    this.dataContainer = page.locator("#inventory_container").nth(1);
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartValue = page.locator("a").filter({ hasText: "4" });
    this.removeButton = page.locator('[data-test^="remove-"]');
  }
}

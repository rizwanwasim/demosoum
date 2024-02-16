import { test, expect, Page, Locator } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly dashLogo: Locator;
  readonly dashboardHeading: Locator;
  readonly notificationFeed: Locator;
  readonly tasksFeed: Locator;
  readonly myActiveProjectFeed: Locator;
  readonly logoutButton: Locator;

  readonly labsLogo: Locator;
  readonly cartIcon: Locator;
  readonly filterIcon: Locator;
  readonly dataContainer: Locator;
  readonly cartBadge: Locator;
  readonly cartValue: Locator;
  readonly sideMenu: Locator;

  // const emailis = "riz@getMaxListeners.xom";
  constructor(page: Page) {
    this.page = page;
    this.labsLogo = page.getByText("Swag Labs");
    this.cartIcon = page.locator("#shopping_cart_container a");
    this.filterIcon = page.locator('[data-test="product_sort_container"]');
    this.dataContainer = page.locator("#inventory_container").nth(1);
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartValue = page.locator("a").filter({ hasText: "4" });
    this.sideMenu = page.getByRole("button", { name: "Open Menu" });
    this.logoutButton = page.getByRole("link", { name: "Logout" });

    this.dashLogo = page.getByRole("button", { name: "Logo" });
    this.dashboardHeading = page.getByRole("heading", { name: "Dashboard" });
  }

  //Method to set the email input field
  getCartValue(): Locator {
    return this.cartBadge;
  }
}

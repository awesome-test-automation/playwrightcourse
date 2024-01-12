import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {

    //navigate google
    await page.goto("https://www.thewarehouse.co.nz/", { waitUntil: 'domcontentloaded' });
    await expect.soft(page).toHaveURL("https://www.thewarehouse.co.nz/'");

});

test("Navigating to Launge of Warehouse website", async ({ page }) => {
    //hover

    var categoryRoot = await page.locator("data-test-id=category-root");

    categoryRoot.hover();
    await expect.soft(categoryRoot).toBeVisible();
    await page.locator('.mega-menu-root-list >> #category-homegarden').hover();

    await expect.soft(page.locator('.mega-menu-root-list >> #category-homegarden')).toHaveAttribute("data-targets", "#mega-menu-category-homegarden");
    await expect.soft(page.locator('.mega-menu-root-list >> #category-homegarden')).toHaveId("category-homegarde");

    await page.locator('a[role="menuitem"]:has-text("Lounge")').click();
    await expect(page.locator('.mega-menu-root-list >> #category-homegarden')).not.toBeVisible();

    await expect(page.locator('.mega-menu-root-list >> #category-homegarden')).toBeHidden();

    await expect(await page.locator(".title")).toHaveText("Lounge");

    await expect(page).toHaveTitle("Lounge Suite - Lounge Couches | The Warehouse");


});

test("Navigating to Launge of Warehouse website - 2", async ({ page }) => {
    //hover

    var categoryRoot = await page.locator("data-test-id=category-root");

    categoryRoot.hover();
    await expect.soft(categoryRoot).toBeVisible();
    await page.locator('.mega-menu-root-list >> #category-homegarden').hover();

    await expect.soft(page.locator('.mega-menu-root-list >> #category-homegarden')).toHaveAttribute("data-targets", "#mega-menu-category-homegarden");
    await expect.soft(page.locator('.mega-menu-root-list >> #category-homegarden')).toHaveId("category-homegarde");

    await page.locator('a[role="menuitem"]:has-text("Lounge")').click();
    await expect(page.locator('.mega-menu-root-list >> #category-homegarden')).not.toBeVisible();

    await expect(page.locator('.mega-menu-root-list >> #category-homegarden')).toBeHidden();

    await expect(await page.locator(".title")).toHaveText("Lounge");

    await expect(page).toHaveTitle("Lounge Suite - Lounge Couches | The Warehouse");


});


test.afterEach(async ({ page }) => {
    await page.screenshot({ path: 'screenshots/warehouse.png' });

});




import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to about:blank
  await page.goto('about:blank');

  // Go to http://eaapp.somee.com/
  await page.goto('http://eaapp.somee.com/');

  // Click text=Login
  await page.locator('text=Login').click();
  await expect(page).toHaveURL('http://eaapp.somee.com/Account/Login');

  // Click input[name="UserName"]
  await page.locator('input[name="UserName"]').click();

  // Fill input[name="UserName"]
  await page.locator('input[name="UserName"]').fill('admin');

  // Press Tab
  await page.locator('input[name="UserName"]').press('Tab');

  // Fill input[name="Password"]
  await page.locator('input[name="Password"]').fill('password');

  // Click text=Log in
  await page.locator('text=Log in').click();
  await expect(page).toHaveURL('http://eaapp.somee.com/');

  // Click text=Employee List
  await page.locator('text=Employee List').click();
  await expect(page).toHaveURL('http://eaapp.somee.com/Employee');

  // Click td:nth-child(6) >> nth=0
  await page.locator('td:nth-child(6)').first().click();
  await expect(page).toHaveURL('http://eaapp.somee.com/Employee/Delete/1');

  // Click text=Back to List
  await page.locator('text=Back to List').click();
  await expect(page).toHaveURL('http://eaapp.somee.com/Employee');

  // Click text=Log off
  await page.locator('text=Log off').click();
  await expect(page).toHaveURL('http://eaapp.somee.com/');

});
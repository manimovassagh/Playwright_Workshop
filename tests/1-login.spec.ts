import { test, expect } from '@playwright/test';
/**
 * @description login to saudemo wqebiste and check the titile of page
 */
test('login to sauce demo website', async ({ page }) => {
  await page.goto('/');
  await page.locator("#user-name").type("standard_user")
  await page.locator("#password").type("secret_sauce")
  await page.locator("#login-button").click()
  const pageLogo = page.locator(".app_logo")
  expect(await pageLogo.textContent()).toContain("Swag Labs")

});


import { Page } from "@playwright/test";

export const login = async (page: Page) => {
    await page.goto('/');
    await page.locator("#user-name").type("standard_user")
    await page.locator("#password").type("secret_sauce")
    await page.locator("#login-button").click()
}
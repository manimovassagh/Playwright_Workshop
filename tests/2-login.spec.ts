import { test, expect } from '@playwright/test';
import { login } from '../Utilities/LoginReusable';
/**
 * @description login to saudemo webiste and check the titile of page
 */
test('login to sauce demo website but with reusable login', async ({ page }) => {
    login(page)
    const pageLogo = page.locator(".app_logo")
    expect(await pageLogo.textContent()).toContain("Swag Labs")
    function login(page) {  
        return   page.goto('https://www.saucedemo.com/')}

});


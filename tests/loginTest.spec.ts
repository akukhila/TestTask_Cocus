import { test } from '@playwright/test';
import { PageManager } from '../helper/pageManager';


test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#onetrust-accept-btn-handler').click();
    await page.getByRole('button', { name: "Sign In" }).click();

})

/* The goal of the test is to login with correct credentials and check that user is loged in successfully*/

test('Login with correct credentials', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.loginPage.login(process.env.MYUSERNAME, process.env.MYPASSWORD);

});

/* The goal of the test is to log out and check taht user log out successfully*/

test('Log out from your account', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.loginPage.login(process.env.MYUSERNAME, process.env.MYPASSWORD);
    await pm.landingPage.signOut();

});
import { test } from '@playwright/test';
import { PageManager } from '../helper/pageManager';


test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#onetrust-accept-btn-handler').click();
    await page.getByRole('button', { name: "Sign In" }).click();

})
test('Login with correct credentials', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.loginPage.login(process.env.MYUSERNAME, process.env.MYPASSWORD);

});

test('Log out from your account', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.loginPage.login(process.env.MYUSERNAME, process.env.MYPASSWORD);
    await pm.landingPage.signOut();

});
import { test } from '@playwright/test';
import { PageManager } from '../helper/pageManager';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#onetrust-accept-btn-handler').click();
    await page.getByRole('button', { name: "Sign In" }).click();

})

test('Add product to the bag', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.loginPage.login(process.env.MYUSERNAME, process.env.MYPASSWORD);
    await pm.landingPage.selectCatalogLink('Tops');
    await pm.catalogPage.addFirstItemToTheBag('S 36/38');
    await pm.catalogPage.goTOBagPage('(1 item)');
});
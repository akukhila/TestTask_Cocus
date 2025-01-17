import { test } from '@playwright/test';
import { PageManager } from '../helper/pageManager';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#onetrust-accept-btn-handler').click();
    await page.getByRole('button', { name: "Sign In" }).click();

})

/*The goal of the test is to login, add item to the bag and check that it is present in the bag*/

test('Add product to the bag', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.loginPage.login(process.env.MYUSERNAME, process.env.MYPASSWORD);
    await pm.landingPage.selectCatalogLink('Tops');
    await pm.catalogPage.addFirstItemToTheBag('S 36/38');
    await pm.catalogPage.goTOBagPage('(1 item)');
});

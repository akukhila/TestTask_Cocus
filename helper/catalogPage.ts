import { expect, Locator, Page } from '@playwright/test';
export class CatalogPageHelper {
    readonly page: Page;

    constructor(page: Page) {
        this.page
        this.page = page;
    }

    async addFirstItemToTheBag(size: string) {
        await this.page.locator('article>div>a').first().click();
        await this.page.getByRole('button', { name: "Add to bag" }).click();
        await this.page.getByLabel(size).click();
        await expect(this.page.getByRole('heading', { name: "It's in the bag!" })).toBeVisible();
    }

    async goTOBagPage(amountOfItems: string) {
        await this.page.getByRole('link', { name: 'Go to bag' }).click();
        await expect(this.page.getByLabel('(1 item)')).toBeVisible();
    }
}
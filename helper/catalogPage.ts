import { expect, Locator, Page } from '@playwright/test';
export class CatalogPageHelper {
    readonly page: Page;

    constructor(page: Page) {
        this.page
        this.page = page;
    }

    async addFirstItemToTheBag(size: string) {
        await this.page.locator('article>div>a').first().click();// selecting first item in the list 
        await this.page.getByRole('button', { name: "Add to bag" }).click();
        await this.page.getByLabel(size).click();
        await expect(this.page.getByRole('heading', { name: "It's in the bag!" })).toBeVisible();// assertion to check that heading "It's in the bag is visible"
        console.log("Item was selected and added to the bag.")
        
    }

    async goTOBagPage(amountOfItems: string) {
        await this.page.getByRole('link', { name: 'Go to bag' }).click();
        await expect(this.page.getByLabel('(1 item)')).toBeVisible(); //assertion to check that item is present in the bag
        console.log("Item is present on the Bag page.")
        await this.page.getByRole('button',{name:'Remove'}).click() /*removing added item at the end of the test to avoid problem during next execution, because 
        in the test I am checking that the first and the only one item was added*/
    }
}
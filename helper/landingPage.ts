import { expect, Locator, Page } from '@playwright/test';
export class LandingPageHelper {
    readonly page: Page;

    constructor(page: Page) {
        this.page
        this.page = page;
    }


    async signOut() {
        await this.page.getByRole('button', { name: "Menu" }).click();
        await this.page.getByRole('button', { name: "Sign out" }).click();
        await expect(this.page.getByRole('button', { name: "Sign In" })).toBeVisible();// assertion to check that "Sign In" button is displayed 
        console.log("User signed out successfully.");

    }

    async selectCatalogLink(linkName: String) {
        await this.page.getByRole('link', { name: linkName }).click();// selecting one of the catalog links e.g. Tops. Coats etc
        console.log(`User selected link ${linkName}`);

    }
}
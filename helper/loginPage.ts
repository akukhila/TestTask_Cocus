import { expect, Locator, Page } from '@playwright/test';
export class LoginPageHelper {
    readonly page: Page;


    constructor(page: Page) {
        this.page
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.getByRole('textbox', { name: "Email or account number" }).fill(username);
        await this.page.getByRole('textbox', { name: "Password" }).fill(password);
        await this.page.getByRole('button', { name: "Sign In" }).click();
        await expect(this.page.getByTestId('my-account-link').last()).toBeVisible();

    }


}
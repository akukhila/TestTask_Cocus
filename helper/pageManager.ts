import { Page } from "@playwright/test";
import { LoginPageHelper } from '../helper/loginPage';
import { LandingPageHelper } from '../helper/landingPage';
import { CatalogPageHelper } from '../helper/catalogPage';

export class PageManager {
    readonly page: Page;
    readonly loginPage: LoginPageHelper;
    readonly landingPage: LandingPageHelper;
    readonly catalogPage: CatalogPageHelper;

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPageHelper(this.page)
        this.landingPage = new LandingPageHelper(this.page)
        this.catalogPage = new CatalogPageHelper(this.page)

    }

}
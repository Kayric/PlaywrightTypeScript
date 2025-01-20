import {test as base} from '@playwright/test';
import { LoginPage } from './loginPage.ts';
import { ProductsPage } from './productsPage.ts';

type baseFixtures = {
    loginPage: LoginPage;
    productPage: ProductsPage;
};

export const test = base.extend<baseFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    },
});
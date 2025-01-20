import { test } from './PageObject/baseFixtures.ts';
import { loginAsStandardUser, loginAsLockedOutUser } from './Helpers/loginHelpers.ts';

test('User should be navigated to the products page when login with standard user', async ({ loginPage, productPage }) => {
  await loginAsStandardUser(loginPage);
  await productPage.navigateToProductsPage();
});

test('User should be unable to login with locked out user', async ({ loginPage }) => {
  await loginAsLockedOutUser(loginPage);
});



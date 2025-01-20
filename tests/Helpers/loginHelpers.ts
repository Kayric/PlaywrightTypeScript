import { LoginPage } from "../PageObject/loginPage";

export async function loginAsStandardUser(loginPage: LoginPage): Promise<void> {
    await loginPage.navigateToLoginPage();
    await loginPage.inputUsername(`${process.env.standard_user}`);
    await loginPage.inputValidPassword();
    await loginPage.clickLoginButton();
}

export async function loginAsLockedOutUser(loginPage: LoginPage): Promise<void> {
    await loginPage.navigateToLoginPage();
    await loginPage.inputUsername(`${process.env.locked_out_user}`);
    await loginPage.inputValidPassword();
    await loginPage.clickLoginButton();
    await loginPage.checkErrorMessage();
}
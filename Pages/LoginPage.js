
const { expect } = require('@playwright/test');

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
        this.baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php';
    }

    async navigateToLoginPage() {
        await this.page.goto(this.baseURL + '/auth/login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
        await expect(this.dashboardHeader).toBeVisible();
    }
}
// pages/ApplyLeavePage.js
const { expect } = require('@playwright/test');

export class ApplyLeavePage {
    constructor(page) {
        this.page = page;
         this.Leave = page.locator("//span[normalize-space()='Leave']");
         this.AppyMenu = page.locator("//a[normalize-space()='Apply']")
        // Form Selectors
        this.leaveTypeDropdown = page.locator('.oxd-select-text-input').first();
        this.fromDateInput = page.locator("(//input[@placeholder='yyyy-dd-mm'])[1]");
        this.toDateInput = page.locator("(//input[@placeholder='yyyy-dd-mm'])[2]");
        this.commentTextarea = page.locator("//textarea[@class='oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical']");
        this.applyButton = page.locator("button[type='submit']");
        this.MyLeave = page.locator("//a[normalize-space()='My Leave']");
        this.Comment = page.locator("//div[contains(text(),'Automation Test Leave Request for 3 days.')]")
        this.optionSelector = page.locator("//div[@class='oxd-select-dropdown --positon-bottom']")
    }

    async navigateToApplyLeavePage() {
        await this.Leave.click();
        await this.AppyMenu.click();
        await expect(this.page).toHaveURL(/applyLeave/);
    }

    async selectLeaveType() {

        await this.leaveTypeDropdown.click();
        await this.optionSelector.first().click();
    }

    async fillLeaveDates(fromDate, toDate) {
        await this.fromDateInput.click();
        await this.fromDateInput.fill(fromDate); 
        await this.toDateInput.click();
        await this.toDateInput.fill(toDate);
    }

    async addComment(comment) {
        await this.commentTextarea.fill(comment);
    }

    async applyLeave() {
        await this.applyButton.click();
    }

    async verifyLeaveApplied() {
       await this.MyLeave.click()
        await expect(this.Comment).toBeVisible();
    }
}
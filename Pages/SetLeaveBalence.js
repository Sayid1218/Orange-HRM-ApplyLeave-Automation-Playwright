const { expect } = require('@playwright/test');
let getUserName;
export class SetLeaveBalence{
      constructor(page) {
      this.page = page;
      this.Leave = page.locator("//span[normalize-space()='Leave']");
      this.Entitlements = page.getByText('Entitlements');
      this.AddEntitlements = page.locator("//a[normalize-space()='Add Entitlements']")
      this.Name = page.locator("//p[@class='oxd-userdropdown-name']");
      this.Selector = page.locator("//div[@class='oxd-autocomplete-dropdown --positon-bottom']");
      this.EmployeeName = page.getByRole('textbox', { name: 'Type for hints...' });
      this.ClickSelect = page.getByText('-- Select --');
      this.LeaveType = page.locator("//div[@class='oxd-select-dropdown --positon-bottom']");
      this.Entitlement = page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']");
      this.Save = page.getByRole('button', { name: 'Save' });
      this.Confirm = page.getByRole('button', { name: 'Confirm' });

      }
async GoEntitlementsOption(){
    await this.Leave.click()
    await this.Entitlements.click();
    await this.AddEntitlements.click();
}
async GetUserName(){
getUserName = await this.Name.innerText()
}
async TypeEmplayeeName(){
await this.EmployeeName.fill(getUserName.slice(0,5));
await this.page.waitForSelector("//div[@class='oxd-autocomplete-dropdown --positon-bottom']");
await this.page.waitForTimeout(3000);
await this.Selector.first().click();


}
async SelectLeaveType(){
    await this.ClickSelect.first().click();
    await this.page.waitForSelector("//div[@class='oxd-select-dropdown --positon-bottom']");
    await this.LeaveType.first().click();
}
async TypeEntitlement(){
    await this.Entitlement.fill('12');
}
async SaveAndConfirm(){
await this.Save.click();
await this.page.waitForSelector("//div[@role='document']");
await this.Confirm.click();
}
async VerifyUrl(){
    await expect(this.page).toHaveURL(/viewLeaveEntitlements/);
}
}
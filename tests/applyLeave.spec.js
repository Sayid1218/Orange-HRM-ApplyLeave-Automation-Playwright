// tests/applyLeave.spec.js
import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { SetLeaveBalence } from '../Pages/SetLeaveBalence';
import { ApplyLeavePage } from '../pages/ApplyLeavePage';
const TEST_USER = 'Admin';
const TEST_PASSWORD = 'admin123'; 

const FROM_DATE = '2025-10-11'; // Use YYYY-DD-MM format
const TO_DATE = '2025-12-11';   // Use YYYY-DD-MM format
const COMMENT = 'Automation Test Leave Request for 3 days.';


test.describe('Applying Leave', () => {

test('Set Leave Balence', async ({ page }) => {
const loginPage = new LoginPage(page);
const setLeaveBalence = new SetLeaveBalence(page);
// --- Login ---
  console.log('Navigating to Login Page and logging in...');
  await loginPage.navigateToLoginPage();
  await loginPage.login(TEST_USER, TEST_PASSWORD);
  await loginPage.verifyLoginSuccess();
  console.log('Login successful.');


 // Set Leave Balence
console.log('Setting Leave Balence');
 await setLeaveBalence.GoEntitlementsOption();
 await setLeaveBalence.GetUserName();
 await setLeaveBalence.TypeEmplayeeName();
 await setLeaveBalence.SelectLeaveType();
 await setLeaveBalence.TypeEntitlement();
 await setLeaveBalence.SaveAndConfirm();
 await setLeaveBalence.VerifyUrl();
console.log('Set Leave Successfully');

});


test('should successfully apply for leave', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const applyLeavePage = new ApplyLeavePage(page);
    // ---Login ---
  console.log('Navigating to Login Page and logging in...');
  await loginPage.navigateToLoginPage();
  await loginPage.login(TEST_USER, TEST_PASSWORD);
  await loginPage.verifyLoginSuccess();
  console.log('Login successful.');
  //---Apply Leave----
        
        console.log('Navigating to Apply Leave Page...');
        await applyLeavePage.navigateToApplyLeavePage();
        await applyLeavePage.selectLeaveType();
        await applyLeavePage.fillLeaveDates(FROM_DATE, TO_DATE);
        await applyLeavePage.addComment(COMMENT);
        await applyLeavePage.applyLeave();
        console.log('Leave form submitted.');
        await applyLeavePage.verifyLeaveApplied();
        console.log('Leave applied successfully (Success message verified).');
    });
});
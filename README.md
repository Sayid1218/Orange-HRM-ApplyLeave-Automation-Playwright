# Orange-HRM-ApplyLeave-Automation-Playwright

## 🚀 [Project Name] Automation Suite
### ✨ Project Overview
This repository contains an end-to-end automation suite built using Playwright and TypeScript/JavaScript to test the \[Target Application or Feature] functionality.

## 🎯 Scope of Automation
**The current suite focuses on testing the following key workflows:**

-Scenario 1: Login 

-Scenario 2: Set up leave type and leave balence 

-Scenario 3: Apply Leave 

## 🛠️ Prerequisites

**Before running the tests, ensure you have the following installed on your machine:**

__Node.js:__ Version 16.x or higher (recommended).

__npm:__ The Node package manager, installed with Node.js.

__Git:__ For cloning the repository.

## ⚙️ Setup and Installation

**Follow these steps to set up the project locally:**

1. Clone the Repository
   
**Open your terminal or command prompt and run:**

>Bash

```git clone https://github.com/Sayid1218/Orange-HRM-ApplyLeave-Automation-Playwright.git ```

cd Orange-HRM-ApplyLeave-Automation-Playwright

2. Install Dependencies
   
Install the project dependencies, including Playwright and necessary libraries:

>Bash

```npm install```

3. Install Playwright Browsers

**Playwright needs browser binaries to run tests. Install them using the Playwright CLI:**

>Bash

```npx playwright install```

## 💻 How to Run Tests

1. Execute All Tests
   
**To run the entire test suite in headless mode (default):**

>Bash

```npx playwright test```

2. Run in Headed Mode (with Browser UI)
   
**To see the tests execute in the browser for debugging or demonstration:**

>Bash

```npx playwright test --headed```

3. Run Specific Files or Tests
   
**To run a single spec file:**

>Bash

```npx playwright test tests/apply-leave.spec.ts```

**To run tests matching a specific title (using grep):**

>Bash

```npx playwright test --grep "@smoke"```

4. Run with UI Mode (Interactive Debugging)
   
**To run the tests in Playwright's interactive UI, which allows for step-by-step debugging and test inspection:**

>Bash

```npx playwright test --ui```

## 📈 Test Reporting

This project uses the built-in Playwright HTML Reporter to generate detailed, interactive test reports.

1. Generate the Report
   
The HTML report is generated automatically upon test completion and saved in the playwright-report directory.

3. View the Report
   
**To open and view the report in your default web browser, run the following command:**

>Bash

```npx playwright show-report```

**Note: The report provides a summary of all runs, test duration, steps, screenshots on failure, and recorded videos (if configured).**

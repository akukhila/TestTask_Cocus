Hello, 

There are some clarifications/instructions related to the test task:

# Initial installations:

1 Plaease check that you have all necessary istallations: Node.js, Git, IDE (e.g.VS Code)
2 Clone the project from the GitHub repo 
3 To install all dependencies from package.json please execute the command <npm install>
4 Execute command <npx playwright install> to  install all browsers: Chromium, FireFox, Webkit
5 Create .env file,  use .env.example as an example.
6 Install also Palywright extension (Playwright Test for VSCode) 

# Project structure
In the project was implemented a Page Object pattern

There are 2 main foleders:
helper 
tests

Helper folder contains files and classes for separate application pages
For exapmle, we have <loginPage.ts> file wich contain only methods related to login page. 
The same for <catalogPage.ts> and <landingPage.ts> files

Tests folder contain 2 files with tests :
  - for login test cases: <loginTest.spec.ts> file
  - for test cases related to catalog functionality: <catalogTest.spec.ts>

Each method in the separate test represent the step that could be done by the customer.

PageManager class(pageManager.ts file) contains import of all  classes describing each page: login, catalog etc.

<playwright.config.ts> file contain all necessary settings related to tests and test execution
I added to the file line about dotenv dependencie and changed reporter: allure 

I have chosen 3 test scenarios:
- Authentication Registration
- Sign Out
- Adding Products to Bag

These scenarios I estimated as the relevant as they should be executed by all customers of the application. 
Browsing the catalog is also importand but it was partially covered by 'Adding Products' to the bag' test case.

Because of big amount of other interviews I was not able to create tests for all described cases, that's why I had to choose.


# Test execution
1 You can use command line for test execution
e.g command <npx playwright test>
For more information regarding the commands plaese chaeck playwright documentation
https://playwright.dev/docs/running-tests

2 Tests coukld be executed in the UI mode
Use command <npx playwright test --ui>

3.You can also run tests directly in VSCode 
e.g. Testing tab or directly in the files with tests

# Reporting 
For the reporting I am using allure reporter. 
To use this locally it is needed to install Allure

allure dependency could be found in package.json file

Allure results folder should appear after first test execution. 
To recieve allure report execute command < allure generate ./allure-results -o ./allure-report>.
As a result it will be created an allure-report folder.
In this folder you can find index.html file that could be opened in the browser.

For the zip file that I shared with you via Google Drive:
you could unzip file and also find index.html file.
Open this file in browser.
Note! In some browser versions there are could be problems with loading.
For me report loads well in Edge browser.

# Logging
For logging I just used console.log('message') form
But it is also possible to use Winston Logger.
Winston logger is better to use with CI/CD connections.

Thank you for reviewing my task!


















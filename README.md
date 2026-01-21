# DemoQA Book Store Application using Playwright with Javascript

📘 UI Automation Assignment – DemoQA Book Store Application

📌 Project Overview

This project automates a complete UI test flow for the DemoQA Book Store Application using Playwright.
The automation covers login validation, book search, result verification, data extraction, and logout functionality.

🔗 Application URL: https://demoqa.com/

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🧪 Test Scenario Covered

The following steps are automated as part of this assignment:

• Navigate to DemoQA homepage

• Manual Step: Create a new user

⚠️ User registration is done manually and is not automated as per assignment instructions

• Navigate to Book Store Application

• Login using the newly created user credentials

• Validate:

   • Logged-in username

   • Presence of Logout button

• Click on Book Store button

• Search for the book:

    Learning JavaScript Design Patterns

• Validate that the search result contains the expected book

• Extract and print the following details into a file:

    • 📖 Title

    • ✍️ Author

    • 🏢 Publisher

• Logout from the application

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📂 Project Structure

📦 project-root

 ┣ 📂 tests
 
 ┃ ┗ 📜 bookstore.spec.js
 
 ┣ 📂 pages
 
 ┃ ┗ 📜 bookstore.page.js
 
 ┣ 📂 test-data
 
 ┃ ┗ 📜 book-details.txt
 
 ┣ 📜 playwright.config.js
 
 ┣ 📜 package.json
 
 ┗ 📜 README.md
 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🛠️ Tools & Technologies Used

 • Playwright

 • JavaScript

 • Node.js

 • Page Object Model (POM)

 • File System (fs) module for writing book details

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📄 Output File

Book details are written into a text file in the following format:

 • Title: Learning JavaScript Design Patterns

 • Author: Addy Osmani

 • Publisher: O'Reilly Media


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
▶️ How to Run the Tests

Install dependencies:

 • npm install

Run the Playwright test:

 • npx playwright test

View test results in terminal or Playwright report:

 • npx playwright show-report




 API Automation Assignment – ReqRes
 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
📌 Project Overview

This repository contains an API Automation Assignment implemented to validate core CRUD operations using the ReqRes public API.
The purpose of this assignment is to demonstrate API testing skills including request validation, response verification, data extraction, and update operations.

🔗 API Base URL: https://reqres.in/

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🧪 Automated Test Scenarios

The following API scenarios are automated as part of this assignment:

1️⃣ Create a User

  • Send a POST request to create a new user

  • Validate the HTTP response status code

  • Extract and store the generated userId from the response

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2️⃣ Get Created User Details

   Send a GET request using the stored userId

   Validate:

    • HTTP response status code

    • User details returned in the response

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

3️⃣ Update User Details

  Send a PUT / PATCH request to update the user’s name

  Validate:

     • HTTP response status code
     • Updated name in the response payload

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

📂 Project Structure

📦 project-root

 ┣ 📂 tests
 
 ┃ ┗ 📜 reqres.spec.js
 
 ┣ 📜 playwright.config.js
 
 ┣ 📜 package.json
 
 ┗ 📜 README.md

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
🛠️ Tools & Technologies Used

      • Playwright (API Testing)

      • JavaScript

      • Node.js

      • REST API (ReqRes)

      • JSON

      • Git & GitHub

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
🔍 Validations Performed

     • HTTP status code validation

     • API response body validation

     • Dynamic handling of userId

     • Update operation verification

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
▶️ How to Execute the Tests

1️⃣ Install Dependencies

    • npm install

2️⃣ Run API Tests

    • npx playwright test

3️⃣ View Execution Report

    • npx playwright show-report

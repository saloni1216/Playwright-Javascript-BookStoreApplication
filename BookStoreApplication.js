const { expect } = require("@playwright/test");
const fs = require("fs");

class BookStoreApplication {
  constructor(page) {
    this.page = page;

    // Locators
    this.bookStoreMenu = page.locator("text=Book Store Application");
    this.loginMenu = page.locator(".element-list.collapse.show").getByText("Login", { exact: true });
    this.usernameInput = page.locator("#userName");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login");
    this.logoutButton = page.getByRole("button", { name: "Log out" });
    this.loggedUserName = page.locator("#userName-value");
    this.bookStoreButton = page.locator(".element-list.collapse.show").getByText("Book Store", { exact: true });
    this.searchBox = page.locator("#searchBox");
    this.bookTitle = page.locator(".rt-tbody .rt-tr-group:first-child .rt-td:nth-child(2) a");
    this.author = page.locator(".rt-tbody .rt-tr-group:first-child .rt-td:nth-child(3)");
    this.publisher = page.locator(".rt-tbody .rt-tr-group:first-child .rt-td:nth-child(4)");
}

  // Common validation helper
  async validate(message, action) {
    try {
      await action();
      console.log(`✅ ${message}`);
    } catch (error) {
      console.log(`❌ ${message}`);
      throw error;
    }
    await this.page.waitForTimeout(3000);
  }

  // Navigate
  async navigate() {
    await this.validate("Page navigated successfully", async () => {
      await this.page.goto("https://demoqa.com/", {
        waitUntil: "networkidle",
        timeout: 90000,
      });
    });
  }

  // Scroll & open Book Store Application
  async openBookStoreApplication() {
    await this.validate("Book Store Application opened", async () => {
      await this.bookStoreMenu.scrollIntoViewIfNeeded();
      await this.bookStoreMenu.click({ timeout: 10000 });
      await this.page.waitForLoadState("networkidle");
    });
  }

  // Login flow 
  async login(username, password) {
    await this.validate("Login page opened", async () => {
      await this.loginMenu.click({ timeout: 1000 });
    });

    // Fill username
    await this.validate("Username Entered", async () => {
      await this.usernameInput.scrollIntoViewIfNeeded();
      await this.usernameInput.fill(username);
    });

    // Fill password
    await this.validate("Password Entered", async () => {
      await this.passwordInput.fill(password);
    });

    // Click Login button
    await this.validate("Login button clicked", async () => {
      await this.loginButton.scrollIntoViewIfNeeded();
      await this.loginButton.click({ timeout: 10000 });
    });
  }

  // Validate Login
  async validateLogin(expectedUsername) {
    await this.validate("User logged in successfully", async () => {
      await expect(this.loggedUserName).toBeVisible({ timeout: 15000 });
      await expect(this.loggedUserName).toHaveText(expectedUsername);
      await expect(this.logoutButton).toBeVisible();
    });
  }

  // Search book
  async searchBook(bookName) {
    await this.validate("Book searched", async () => {
      await this.searchBox.fill(bookName);
    });
  }

  // Validate search
  async validateSearchResult(bookName) {
    await this.validate("Book search validated", async () => {
      const title = await this.bookTitle.textContent();
      if (!title.includes(bookName)) {
        throw new Error("Book not found");
      }
    });
  }

  // Print book details
  async printBookDetailsToFile() {
    await this.validate("Book details printed", async () => {
      const title = await this.bookTitle.textContent();
      const author = await this.author.textContent();
      const publisher = await this.publisher.textContent();
      console.log("\n📘 Book Details");
      console.log("✅ Title     :", title);
      console.log("✅ Author    :", author);
      console.log("✅ Publisher :", publisher);

      fs.writeFileSync(
        "book_details.txt",
        `✅Title: ${title}\n✅Author: ${author}\n✅Publisher: ${publisher}`
      );
    }); 
  }

  // Logout
  async logout() {
    await this.validate("User logged out", async () => {
      await this.logoutButton.click({ timeout: 10000 });
    });
  }
}

module.exports = { BookStoreApplication };

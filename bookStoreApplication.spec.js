const { test } = require("@playwright/test");
const { BookStoreApplication } = require("../pages/BookStoreApplication");

test("DemoQA Book Store Application Test", async ({ page }) => {
  test.setTimeout(120000); 

  const bookStore = new BookStoreApplication(page);

  const username = "Saloni@231";
  const password = "Saloni@1234";

  await bookStore.navigate();
  await bookStore.openBookStoreApplication();

  await bookStore.login(username, password);
  await bookStore.validateLogin(username);

  console.log("✅ Book Store menu clicked");
  await bookStore.bookStoreButton.click({ timeout: 10000 });
  await page.waitForTimeout(3000);

  await bookStore.searchBook("Learning JavaScript Design Patterns");
  await bookStore.validateSearchResult("Learning JavaScript Design Patterns");

  await bookStore.printBookDetailsToFile();

  await bookStore.logout();

  await page.waitForTimeout(8000);
});

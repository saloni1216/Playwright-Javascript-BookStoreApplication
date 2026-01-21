import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false,          // UI must be visible
    navigationTimeout: 60000,
  },
});

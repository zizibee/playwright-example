// @ts-check
const { test, expect } = require('@playwright/test');

test('get started link', async ({ page }) => {
  await page.goto('https://www.d2l.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get Started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Get Started with D2L' })).toBeVisible();
});

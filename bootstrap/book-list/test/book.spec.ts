import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test('user can add a book', async ({ page }) => {
  await page.getByTestId('book-input-id').fill('Jane Eyre');
  await page.getByTestId('add-button-id').click();
  await expect(page.getByText('Jane Eyre')).toBeVisible();
});

test('blank titles are not added', async ({ page }) => {
  await page.getByTestId('book-input-id').fill(' ');
  await page.getByTestId('add-button-id').click();
  const items = await page
    .getByTestId('book-list-id')
    .locator('li')
    .all();
  
  expect(items.length).toBe(0);
});

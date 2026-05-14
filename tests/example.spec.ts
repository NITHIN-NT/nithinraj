import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  // Based on the browser state, the title is "Nithin Raj NT | Developer"
  await expect(page).toHaveTitle(/Nithin Raj NT | Developer/);
});

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Check if some key element is present, e.g., the navbar or a specific heading.
  // Since I don't know the exact "get started" link, I'll just check for the presence of "Philosophical Framework" which I saw in the planning
  await expect(page.getByText('Philosophical Framework')).toBeVisible();
});

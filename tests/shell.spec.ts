import { test, expect } from '@playwright/test';

test('shell', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/UX Portal/);

    await expect(page.getByTestId('header-title')).toHaveText('UX Portal');

    await expect(page.getByTestId('nav-collapsed')).toBeVisible();

    await page.getByTestId('nav-toggle').click();
    await expect(page.getByTestId('nav-expanded')).toBeVisible();
});

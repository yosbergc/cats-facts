// @ts-check
import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const texto = await page.getByRole('paragraph');
  const imagen = await page.getByRole('img');

  console.log(texto, imagen)
});
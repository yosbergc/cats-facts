// @ts-check
import { test, expect } from '@playwright/test'

test('comprobacion', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const texto = await page.getByRole('paragraph');
  const imagen = await page.getByRole('img');

  const textContent = await texto.textContent()
  const imagenSrc = await imagen.getAttribute('src')
  console.log(imagenSrc)
  await expect(textContent?.length).toBeGreaterThan(0)
});
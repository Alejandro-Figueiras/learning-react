// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST = 'http://localhost:5173/'

test('app shows random fact and image', async ({page}) => {
  await page.goto(LOCALHOST)

  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img')

  const textContent = await text.textContent();
  const imgSrc = await image.getAttribute('src');
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imgSrc?.startsWith('https://cataas.com')).toBeTruthy();
})
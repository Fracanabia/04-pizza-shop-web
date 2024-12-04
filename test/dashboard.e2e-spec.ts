import { expect, test } from '@playwright/test'

test('Dashboard display month revenue', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 200,00', { exact: true })).toBeVisible()
  await expect(page.getByText('+5% em relação ao mês passado')).toBeVisible()
})

test('Dashboard display month orders amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('200', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()
})

test('Dashboard display day orders amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('210', { exact: true })).toBeVisible()
  await expect(page.getByText('+5% em relação a ontem')).toBeVisible()
})

test('Dashboard display month canceled orders amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('250', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% em relação ao mes passado')).toBeVisible()
})

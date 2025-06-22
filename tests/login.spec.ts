import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  const baseURL = "http://localhost:5173";

  test("Login bem-sucedido", async ({ page }) => {
    await page.goto(`${baseURL}/`);

    await page.fill('input[placeholder="Email"]', "testeplayright@gmail.com");
    await page.fill('input[placeholder="Senha"]', "Testeplay123@");

    await page.click('button:has-text("Acessar")');

    await page.waitForSelector('h1:has-text("Bem-vindo")');

    const welcome = page.locator('h1:has-text("Bem-vindo")');
    await expect(welcome).toBeVisible();
  });

  test("Login com falha (dados incorretos)", async ({ page }) => {
    await page.goto(`${baseURL}/`);

    await page.fill('input[placeholder="Email"]', "testeplayright@asd.com");
    await page.fill('input[placeholder="Senha"]', "senhaErrada");

    await page.click('button:has-text("Acessar")');

    const errorSpan = page.locator("span.text-danger");
    await expect(errorSpan).toHaveText("Credenciais incorretas");
  });

  test("Login com falha (campos vazios)", async ({ page }) => {
    await page.goto(`${baseURL}/`);

    await page.click('button:has-text("Acessar")');

    const errorSpan = page.locator("span.text-danger");

    await expect(errorSpan).toBeVisible();
    await expect(errorSpan).toContainText(/e-mail/i);
  });
});

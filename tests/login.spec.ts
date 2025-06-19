import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  const baseURL = "http://localhost:5173";

  test("Login bem-sucedido", async ({ page }) => {
    await page.goto(`${baseURL}/`);

    await page.fill('input[placeholder="Email"]', "testeplayright@gmail.com");
    await page.fill('input[placeholder="Senha"]', "Testeplay123@");

    await page.click('button:has-text("Acessar")');

    // Aguarda por algo exclusivo da TelaPrincipal
    await page.waitForSelector('h1:has-text("Bem-vindo")'); // <-- ajuste isso conforme seu layout real

    // Exemplo alternativo:
    // await page.waitForSelector('.painel-principal');

    // Confirma que o conteúdo está visível
    const welcome = page.locator('h1:has-text("Bem-vindo")');
    await expect(welcome).toBeVisible();
  });

  test("Login com falha (senha incorreta)", async ({ page }) => {
    await page.goto(`${baseURL}/`);

    await page.fill('input[placeholder="Email"]', "testeplayright@gmail.com");
    await page.fill('input[placeholder="Senha"]', "senhaErrada");

    await page.click('button:has-text("Acessar")');

    const errorSpan = page.locator("span.text-danger");

    // Espera pela mensagem exata
    await expect(errorSpan).toHaveText("Credenciais inválidas");
  });

  test("Login com falha (email inválido)", async ({ page }) => {
    await page.goto(`${baseURL}/`);

    const emailInput = page.locator('input[placeholder="Email"]');
    await emailInput.fill("testeplayright");

    await page.fill('input[placeholder="Senha"]', "Testeplay123@");

    await page.click('button:has-text("Acessar")');

    // Espera que o input esteja inválido (sem @)
    await expect(emailInput).toHaveAttribute("aria-invalid", "true");
  });

  test("Login com falha (campos vazios)", async ({ page }) => {
    await page.goto(`${baseURL}/`);

    await page.click('button:has-text("Acessar")');

    const errorSpan = page.locator("span.text-danger");
    await expect(errorSpan).toBeVisible();
    await expect(errorSpan).toContainText(/e-mail/i);
  });
});

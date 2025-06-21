import { test, expect } from "@playwright/test";

test.describe("Registro", () => {
  const baseURL = "http://localhost:5173";

  test("Registro bem-sucedido", async ({ page }) => {
    await page.goto(`${baseURL}/register`);

    await page.fill('input[placeholder="Nome"]', "PlayrighTeste");
    await page.fill('input[placeholder="Email"]', "Testeregister@gmail.com");
    await page.fill('input[placeholder="Senha"]', "Testeplay123@");
    await page.fill('input[placeholder="Confirme sua senha"]', "Testeplay123@");
    await page.fill(
      'input[placeholder="CPF (xxx.xxx.xxx-xx)"]',
      "869.407.790-60"
    );

    await page.click('button:has-text("Registrar")');

    const successMessage = page.locator(".alert-success");
    await expect(successMessage).toHaveText("Registro bem-sucedido!");

    await page.waitForURL(`${baseURL}/`);

    const loginButton = page.locator('button:has-text("Acessar")');
    await expect(loginButton).toBeVisible();
  });

  test("Registro com campos vazios mostra mensagens de erro", async ({
    page,
  }) => {
    await page.goto(`${baseURL}/register`);

    await page.click('button:has-text("Registrar")');

    await expect(page.locator("text=Nome é obrigatório")).toBeVisible();
    await expect(page.locator("text=E-mail é obrigatório")).toBeVisible();
    await expect(page.locator("text=Senha é obrigatória")).toBeVisible();
    await expect(page.locator("text=Confirme sua senha")).toBeVisible();
    await expect(page.locator("text=CPF é obrigatório")).toBeVisible();
  });

  test("Senha com menos de 8 caracteres deve exibir mensagem de erro", async ({
    page,
  }) => {
    await page.goto(`${baseURL}/register`);

    await page.fill('input[placeholder="Nome"]', "TesteSenhaCurta");
    await page.fill('input[placeholder="Email"]', "senha4digitos@gmail.com");
    await page.fill('input[placeholder="Senha"]', "1234");
    await page.fill('input[placeholder="Confirme sua senha"]', "1234");
    await page.fill(
      'input[placeholder="CPF (xxx.xxx.xxx-xx)"]',
      "123.456.789-09"
    );

    await page.click('button:has-text("Registrar")');

    await expect(
      page.locator("text=Senha deve ter pelo menos 8 caracteres")
    ).toBeVisible();
  });

  test("CPF inválido deve exibir mensagem de erro", async ({ page }) => {
    await page.goto(`${baseURL}/register`);

    await page.fill('input[placeholder="Nome"]', "TesteCPFInvalido");
    await page.fill('input[placeholder="Email"]', "cpf.invalido@gmail.com");
    await page.fill('input[placeholder="Senha"]', "SenhaValida123@");
    await page.fill(
      'input[placeholder="Confirme sua senha"]',
      "SenhaValida123@"
    );
    await page.fill(
      'input[placeholder="CPF (xxx.xxx.xxx-xx)"]',
      "123.456.789-00"
    );

    await page.click('button:has-text("Registrar")');

    await expect(page.locator("text=CPF inválido")).toBeVisible();
  });
});

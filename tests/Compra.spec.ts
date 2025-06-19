import { test, expect } from "@playwright/test";

test.describe("Fluxo de compra completo", () => {
  const baseURL = "http://localhost:5173";

  test("Sucesso de compra", async ({ page }) => {
    await page.goto(`${baseURL}/`);
    await page.fill('input[placeholder="Email"]', "testeplayy@play.com");
    await page.fill('input[placeholder="Senha"]', "Testeplay123@");
    await page.click('button:has-text("Acessar")');

    await expect(page.locator("text=Bem-Vindos a DevWear")).toBeVisible();

    const card = page.locator("text=Camisa Devwear Computaria").first();
    await card.scrollIntoViewIfNeeded();
    await card.locator("..").getByRole("button", { name: "Ver mais" }).click();

    await expect(page.locator("text=Detalhes")).toBeVisible();
    await page.click('button:has-text("Comprar")');

    await expect(page).toHaveURL(/.*\/carrinho/);
    await expect(page.locator("text=Camisas selecionadas")).toBeVisible();

    await page.click('button:has-text("+")');
    await page.click('button:has-text("CONFIRMAR PEDIDO")');

    await page.fill('input[placeholder="CEP"]', "12345-678");
    await page.fill('input[placeholder="Rua"]', "Rua dos Testes");
    await page.fill('input[placeholder="Número"]', "123");
    await page.fill('input[placeholder="Complemento"]', "Apto 4B");
    await page.fill('input[placeholder="Bairro"]', "Centro");
    await page.fill('input[placeholder="Cidade"]', "Testolândia");
    await page.fill('input[placeholder="UF"]', "TS");

    await page.click('button:has-text("CARTÃO DE CRÉDITO")');

    await Promise.all([
      page.waitForURL(`${baseURL}/ObrigadoPelaCompra`, { timeout: 5000 }),
    ]);

    await expect(page.locator("img.img-obg")).toBeVisible();
  });

  test.describe("campos obrigatórios", () => {
    const baseURL = "http://localhost:5173";

    test("Dados Invalidos Compra", async ({ page }) => {
      await page.goto(`${baseURL}/`);
      await page.fill('input[placeholder="Email"]', "testeplayy@play.com");
      await page.fill('input[placeholder="Senha"]', "Testeplay123@");
      await page.click('button:has-text("Acessar")');

      await expect(page.locator("text=Bem-Vindos a DevWear")).toBeVisible();

      const card = page.locator("text=Camisa Devwear Computaria").first();
      await card.scrollIntoViewIfNeeded();
      await card
        .locator("..")
        .getByRole("button", { name: "Ver mais" })
        .click();

      await expect(page.locator("text=Detalhes")).toBeVisible();
      await page.click('button:has-text("Comprar")');

      await expect(page).toHaveURL(/.*\/carrinho/);
      await expect(page.locator("text=Camisas selecionadas")).toBeVisible();

      await page.click('button:has-text("+")');
      await page.click('button:has-text("CONFIRMAR PEDIDO")');

      await page.click('button:has-text("FINALIZAR")');

      await expect(page.locator("text=Dados não preenchidos")).toBeVisible();
    });
  });
});

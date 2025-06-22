import { test, expect } from "@playwright/test";

test.describe("Edição de Perfil", () => {
  const baseURL = "http://localhost:5173";

  test("Sucesso de edição", async ({ page }) => {
    await page.goto(`${baseURL}/`);
    await page.fill('input[placeholder="Email"]', "testeplayy@play.com");
    await page.fill('input[placeholder="Senha"]', "Testeplay123@");
    await page.click('button:has-text("Acessar")');

    await expect(page.locator("text=Bem-Vindos a DevWear")).toBeVisible();

    await page.click("text=Perfil");
    await page.click("text=Editar");

    await expect(page.locator("text=Editar Perfil")).toBeVisible();

    await page.fill("input#cpf", "048.992.970-25");
    await page.fill("input#nome", "TesteNomeAlterado");
    await page.fill("input#senha", "Testeplay123@");
    await page.fill("input#confirmarSenha", "Testeplay123@");

    await page.click('button:has-text("Atualizar")');

    await expect(page.locator("text=Alterado com sucesso!")).toBeVisible();
  });

  test.describe("campos obrigatórios na edição de perfil", () => {
    const baseURL = "http://localhost:5173";

    test("Não preenchimentos dos input", async ({ page }) => {
      await page.goto(`${baseURL}/`);
      await page.fill('input[placeholder="Email"]', "testeplayy@play.com");
      await page.fill('input[placeholder="Senha"]', "Testeplay123@");
      await page.click('button:has-text("Acessar")');

      await expect(page.locator("text=Bem-Vindos a DevWear")).toBeVisible();

      await page.click("text=Perfil");
      await page.click("text=Editar");

      await expect(page.locator("text=Editar Perfil")).toBeVisible();

      await page.fill("input#cpf", "");
      await page.fill("input#nome", "");
      await page.fill("input#senha", "");
      await page.fill("input#confirmarSenha", "");

      await page.click('button:has-text("Atualizar")');

      await expect(page.locator("text=CPF é obrigatório.")).toBeVisible();
      await expect(page.locator("text=Nome é obrigatório.")).toBeVisible();
      await expect(page.locator("text=Senha é obrigatória.")).toBeVisible();
      await expect(page.locator("text=Confirme a senha.")).toBeVisible();
    });
  });

  test.describe("Senha Fraca", () => {
    const baseURL = "http://localhost:5173";

    test("Senha sem Regex", async ({ page }) => {
      await page.goto(`${baseURL}/`);
      await page.fill('input[placeholder="Email"]', "testeplayy@play.com");
      await page.fill('input[placeholder="Senha"]', "Testeplay123@");
      await page.click('button:has-text("Acessar")');

      await expect(page.locator("text=Bem-Vindos a DevWear")).toBeVisible();

      await page.click("text=Perfil");
      await page.click("text=Editar");

      await expect(page.locator("text=Editar Perfil")).toBeVisible();

      await page.fill("input#cpf", "048.992.970-25");
      await page.fill("input#nome", "TesteNomeAlterado");
      await page.fill("input#senha", "123");
      await page.fill("input#confirmarSenha", "123");

      await page.click('button:has-text("Atualizar")');

      await expect(
        page.locator(
          "text=A senha deve conter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma minúscula e um caractere especial."
        )
      ).toBeVisible();
    });
  });
});

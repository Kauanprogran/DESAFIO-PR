import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("deve carregar o hero com título e CTA", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Help Pet");
    await expect(page.getByRole("link", { name: "Ver serviços" })).toBeVisible();
  });

  test("deve exibir seção de serviços", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Consultas Veterinárias")).toBeVisible();
  });

  test("deve ter navbar com links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Serviços" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Pet SOS" })).toBeVisible();
  });
});

test.describe("Navegação", () => {
  test("navegar para /servicos", async ({ page }) => {
    await page.goto("/servicos");
    await expect(page.locator("h1")).toContainText("Serviços Veterinários");
  });

  test("navegar para /pet-sos", async ({ page }) => {
    await page.goto("/pet-sos");
    await expect(page.locator("h1")).toContainText("Pet SOS");
  });

  test("navegar para /adocao", async ({ page }) => {
    await page.goto("/adocao");
    await expect(page.locator("h1")).toContainText("Adote um amigo");
  });

  test("navegar para /login", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByText("Entrar")).toBeVisible();
  });

  test("navegar para /register", async ({ page }) => {
    await page.goto("/register");
    await expect(page.getByText("Criar conta")).toBeVisible();
  });
});

test.describe("Responsividade", () => {
  test("deve funcionar em mobile 375px", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("deve funcionar em tablet 768px", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
  });
});

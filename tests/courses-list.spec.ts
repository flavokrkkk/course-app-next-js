import { test } from "@playwright/test";

test("create delete courses list", async ({ page }) => {
  await page.locator("body").click();
  await page.locator("body").click();
  await page.locator("body").click();
  await page.locator("div > div").first().click();
  await page.locator("div > div").first().click();
  await page.locator("div > div").first().click();
  await page.getByLabel("Close").click();
  await page.getByRole("main").click();
  await page.getByRole("main").click();
  await page.getByPlaceholder("Название").click();
  await page.getByPlaceholder("Название").press("CapsLock");
  await page.getByPlaceholder("Название").fill("T");
  await page.getByPlaceholder("Название").press("CapsLock");
  await page.getByPlaceholder("Название").fill("Test");
  await page.getByPlaceholder("Описание").click();
  await page.getByPlaceholder("Описание").press("CapsLock");
  await page.getByPlaceholder("Описание").fill("C");
  await page.getByPlaceholder("Описание").press("CapsLock");
  await page.getByPlaceholder("Описание").fill("Course ");
  await page.getByPlaceholder("Описание").press("CapsLock");
  await page.getByPlaceholder("Описание").fill("Course T");
  await page.getByPlaceholder("Описание").press("CapsLock");
  await page.getByPlaceholder("Описание").fill("Course Test");
  await page.getByRole("button", { name: "Добавить" }).click();
  await page.getByRole("button", { name: "Удалить" }).click();
  await page.getByRole("main").click();
});

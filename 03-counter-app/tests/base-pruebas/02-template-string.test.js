import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-String", () => {
  test('"get Saludo debe de retornar "Hola fernando""', () => {});
  const name = "fernando";
  const message = getSaludo(name);
  expect(message).toBe(`Hola ${name}`);
});

describe("Puebas en <demoComponent", () => {
  test("Esta prueba no debe fallar", () => {
    // 1. Inicialicacion
    const message1 = "Hola Mundo";
    // 2. Estimulo
    const message2 = message1.trim();
    //3.Observar el comportamiento.. Esperado
    expect(message1).toBe(message2);
  });
});

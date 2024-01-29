import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-Functiones", () => {
  test("Get user debe de retornar un objecto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toStrictEqual(user);
  });

  test("GetusuarioActivo  debe d eretornar un objeto", () => {
    const name = "Fernando";
    const usuarioActivo = getUsuarioActivo(name);
    // expect(name).toEqual(usuarioActivo.username);

    expect(usuarioActivo).toEqual({ uid: "ABC567", username: name });
  });
});

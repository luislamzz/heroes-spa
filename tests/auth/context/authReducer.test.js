import { authReducer, types } from "../../../src/auth";

describe("Pruebas en authReducer", () => {
  const initialState = {
    logged: false,
  };

  test("debe retornar el estado por defecto", () => {
    const newState = authReducer(initialState, {});

    expect(newState).toBe(initialState);
    expect(newState).toEqual(initialState);
  });

  test("debe de llamar el login autenticar y establecer el user", () => {
    //   const mockLogin = jest.fn();

    const action = { type: types.login, payload: { name: "LuisM", id: "123" } };
    const newState = authReducer(initialState, action);

    // console.log(newState);

    expect(newState).toEqual({
      logged: true,
      user: action.payload,
    });
    expect(newState.user.name).toBe("LuisM");
    expect(newState.logged).toBe(true);
  });

  test("debe de borrar el name del usuario y logged en false", () => {
    // const action = { type: types.login, payload: { name: "LuisM", id: "123" } };
    // const newState = authReducer(initialState, action);

    const state = {
      logged: true,
      user: { id: "123", name: "LuisM" },
    };

    const action2 = { type: types.logout };
    const newState2 = authReducer(state, action2);

    // console.log(newState2);

    expect(newState2.logged).toBe(false);
    expect(newState2).not.toBe(newState2.user);
    // expect(newState2).not.toEqual(newState);
    expect(newState2).toEqual({ logged: false });
    expect(newState2).not.toContain(newState2.user);
  });
});

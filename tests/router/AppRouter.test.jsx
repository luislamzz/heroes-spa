import { screen } from "@testing-library/react";
import { render } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe("Pruebas en <AppRouter />", () => {
  test("debe de mostrar el login si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug();
  });
});

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoutes } from "../../src/router/PrivateRoutes";

describe("pruebas en <PrivateRoute/>", () => {
  test("debe de mostrar el children SI esta autenticado", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "LuisM",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["search?q=batman"]}>
          <PrivateRoutes>
            <h1>Ruta Privada</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug();

    expect(screen.getByText("Ruta Privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "search?q=batman"
    );
  });
});

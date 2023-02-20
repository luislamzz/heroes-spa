import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* <Route path="login" element={<LoginPage />} /> */}

        {/* //*Rutas privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>
          }
        />

        {/* <Route path="/*" element={<HeroesRoutes />}/> */}
      </Routes>
    </>
  );
};

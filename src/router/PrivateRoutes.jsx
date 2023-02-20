import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);

  {
    /* //* Se guarda el path aqui , aqui es donde entra por primera vez las rutas privadas.*/
  }
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to={"/login"} />;
};

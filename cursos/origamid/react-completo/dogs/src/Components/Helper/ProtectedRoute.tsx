// Verificar se o login do context é true

import { UserContext } from "@/Contexts/UserContext";
import { useContext, type PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const { login } = useContext(UserContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return null;
  }

  // return login ? children : <Navigate to="/login" />;
}

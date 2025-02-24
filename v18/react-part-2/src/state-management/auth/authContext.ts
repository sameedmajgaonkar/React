import { createContext, ActionDispatch } from "react";
import { AuthAction } from "./AuthProvider";

interface AuthContextInterface {
  user: string;
  dispatch: ActionDispatch<[AuthAction]>;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);
AuthContext.displayName = "AuthContext";

export default AuthContext;

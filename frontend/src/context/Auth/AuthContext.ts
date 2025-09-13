import { createContext, useContext } from "react";

export interface AuthContextType {
  userName: string | null;
  email: string | null;
  token: string | null;
  login: (fullName: string, email: string, token: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

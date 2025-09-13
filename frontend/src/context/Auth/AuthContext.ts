import { createContext, useContext } from "react";

export interface AuthContextType {
  email: string | null;
  token: string | null;
  login: (email: string, token: string) => void;
  isAuthenticated :boolean ;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setAuthorized: () => void;
  setUnauthorized: () => void;
}

const AuthContext = createContext<AuthContextType|undefined>(undefined);

function AuthContextProvider({children}:{children:ReactNode}) {
  const [isAuthenticated, setIsAuthenticated] = useState(document.cookie.includes("jwt="));
  const setAuthorized = () => setIsAuthenticated(true);
  const setUnauthorized = () => {
    document.cookie = "jwt=; path=/; max-age=0";
    setIsAuthenticated(false);
  }

  return(
    <AuthContext.Provider value={{isAuthenticated, setAuthorized, setUnauthorized}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("no AuthProvider");
  }
  return context;
}

export { AuthContextProvider, useAuth };
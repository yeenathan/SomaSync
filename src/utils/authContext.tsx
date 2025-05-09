import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { getUserInfo } from "./WP";

interface AuthContextType {
  isAuthenticated: boolean;
  userInfo: any;
  loading: boolean;
  setAuthorized: () => void;
  setUnauthorized: () => void;
  fetchUserInfo: () => void;
}

const AuthContext = createContext<AuthContextType|undefined>(undefined);

function AuthContextProvider({children}:{children:ReactNode}) {
  const [isAuthenticated, setIsAuthenticated] = useState(document.cookie.includes("jwt="));
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchUserInfo() {
    try {
      const data = await getUserInfo();
      setUserInfo(data);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      setUserInfo(null);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {  
    fetchUserInfo();
  }, []) 

  const setAuthorized = () => {
    setIsAuthenticated(true);
  };
  const setUnauthorized = () => {
    document.cookie = "jwt=; path=/; max-age=0";
    setIsAuthenticated(false);
  }

  return(
    <AuthContext.Provider value={{isAuthenticated, userInfo, loading, setAuthorized, setUnauthorized, fetchUserInfo}}>
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
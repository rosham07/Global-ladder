import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize state from localStorage to persist on reload
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      const storedAuth = localStorage.getItem("isAuthenticated");
      return storedAuth === "true";
    } catch {
      return false; // fallback if localStorage access fails
    }
  });

  // Optional: sync state with localStorage if it changes elsewhere
  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem("isAuthenticated");
      if (storedAuth === "true" && !isAuthenticated) {
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.error("Failed to read auth from localStorage", err);
    }
  }, [isAuthenticated]);

  const login = (username, password) => {
    if (username === "Nischal07" && password === "Zyan@12!") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    } else {
      alert("Invalid credentials");
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

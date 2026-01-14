import { AuthContext } from "./ExportAuthContext";
import { useState, useEffect } from "react";

export default function AuthProvider({ children }) {
  const API_URL = "apiDeEjemplo";
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  const registerLoginData = (userData, token) => {
    setUser(userData);
    setIsAuthenticated(true);
    setToken(token);

    localStorage.setItem("token", token);
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const login = async (username, password) => {
    const user = username;
    const pass = password;
    if (!user || !pass) {
      throw new Error("Credenciales inválidas");
    }
    try {
      const response = await fetch({API_URL});
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const loginData = await response.json();
      const { userData, token } = loginData;
      login(userData, token);
    } catch (e) {
      console.error(e.message);
    }
  };

  const logOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    setToken("");

    localStorage.removeItem("token");
    localStorage.removeItem("userData");
  };

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const localUserData = localStorage.getItem("userData");

    if (localToken && localUserData) {
      setToken(localToken);
      setUser(JSON.parse(localUserData));
      setIsAuthenticated(true);
    } else {
      setToken("");
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, token, registerLoginData, login, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

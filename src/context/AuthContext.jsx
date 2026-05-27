import { createContext, useEffect, useState } from "react";
import API from "../services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Signup
  const signup = async (formData) => {
    const response = await API.post(
      "/auth/signup",
      formData
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    setUser(response.data);
  };

  // Login
  const login = async (formData) => {
    const response = await API.post(
      "/auth/login",
      formData
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    setUser(response.data);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
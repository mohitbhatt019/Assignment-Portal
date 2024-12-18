"use client"
import {  createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Handle simple login (e.g., after verifying credentials)
    setIsAuthenticated(true);
    localStorage.setItem("Authenticated", "true"); // Store authentication status
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("Authenticated"); // Clear authentication status
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

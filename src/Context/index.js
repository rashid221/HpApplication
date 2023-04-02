import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthenticated: false,
    user: null,
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    } else {
      localStorage.removeItem("token");
      alert("Please login your token is expire");
    }
  }, []);
  const login = (username, password) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setState({
            isAuthenticated: true,
            user: data,
          });
        } else {
          alert("username and password is not valid");
        }
      });
  };
  const logout = () => {
    localStorage.removeItem("token");
    setState({
      isAuthenticated: false,
      user: null,
    });
  };
  return (
    <>
      <AuthContext.Provider value={{ ...state, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

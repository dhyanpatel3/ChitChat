import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = async (type, userData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (data.success && data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setUser(data.userData);
        console.log("Token saved successfully:", data.token);
      }

      return data;
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: error.message };
    }
  };

  // Function to make authenticated requests
  const makeAuthenticatedRequest = async (url, options = {}) => {
    const currentToken = localStorage.getItem("token");
    console.log("Making authenticated request with token:", currentToken);

    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${currentToken}`,
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        makeAuthenticatedRequest,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

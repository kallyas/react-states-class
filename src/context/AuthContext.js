import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  function login({ username, password }) {
    setLoading(true)
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          setError(res.msg);
          setLoading(false);
          return;
        }
        setUser(res);
        localStorage.setItem("user", JSON.stringify(res));
        setLoading(false);
      })
      .catch((err) => setError(err.msg));
  }

  const values = {
    loading,
    user,
    login,
    error,
    setError
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

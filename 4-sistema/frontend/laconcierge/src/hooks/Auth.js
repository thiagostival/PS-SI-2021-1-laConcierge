import { createContext, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();

  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@laConcierge:token");
    const user = localStorage.getItem("@laConcierge:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(
    async ({ email, password }) => {
      const response = await api.post("sessions", {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem("@laConcierge:token", token);
      localStorage.setItem("@laConcierge:user", JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });

      if (user?.type === "establishment") {
        history.push("/establishment/dashboard");
        return;
      }

      history.push("/client/dashboard");
    },
    [history]
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("@laConcierge:token");
    localStorage.removeItem("@laConcierge:user");

    setData({});
  }, []);

  const updateUser = useCallback(
    (user) => {
      localStorage.setItem("@laConcierge:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token]
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };

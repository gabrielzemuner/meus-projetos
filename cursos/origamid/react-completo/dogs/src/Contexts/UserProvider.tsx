import {
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
  type TokenPostResponse,
} from "@/api";
import type { User } from "@/types";
import { UserContext } from "@/Contexts/UserContext";
import {
  useCallback,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { useNavigate } from "react-router-dom";

export function UserProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState<User | null>(null);
  const [login, setLogin] = useState<null | boolean>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const navigate = useNavigate();

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json: User = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);
      if (!tokenResponse.ok)
        throw new Error(`Erro: ${tokenResponse.statusText}`);
      const { token }: TokenPostResponse = await tokenResponse.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = useCallback(async function () {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
  }, []);

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (err) {
          console.error(err);
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
}

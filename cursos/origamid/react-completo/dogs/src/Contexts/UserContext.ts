import { createContext } from "react";
import type { User } from "@/types";

type UserContextValue = {
  data: User | null;
  error: string | null;
  loading: boolean;
  login: null | boolean;
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => Promise<void>;
};

const defaultValue: UserContextValue = {
  data: null,
  error: null,
  loading: false,
  login: null,
  userLogin: async () => {
    throw new Error("UserContext: provider não encontrado");
  },
  userLogout: async () => {
    throw new Error("UserContext: provider não encontrado");
  },
};

// export const UserContext = createContext<UserContextValue | null>(null);
export const UserContext = createContext<UserContextValue>(defaultValue);

import { createContext } from "react-router";

type UserContextType = {
  name: string;
};

export const userContext = createContext<UserContextType | null>(null);

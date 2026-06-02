import { createContext } from "react-router";

export interface UserContextType {
  id: string;
  email: string;
  name: string;
}

export const userContext = createContext<UserContextType>();

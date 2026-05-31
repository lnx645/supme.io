import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
type AuthStore = {
  jwt_token: string | null;
  setJwtToken: (token: string) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => {
      return {
        jwt_token: null,
        setJwtToken(token: string) {
          set({
            jwt_token: token,
          });
        },
      };
    },
    {
      name: "authStore",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

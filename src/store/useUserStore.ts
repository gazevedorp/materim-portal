import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserProps {
  id: number;
  name: string;
}

interface UserState {
  user: UserProps | null;
  setUser: (user: UserProps) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: {
        id: 1,
        name: "user",
      },
      setUser: (newUser: UserProps) => set({ user: newUser }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-materim-portal",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserStore;

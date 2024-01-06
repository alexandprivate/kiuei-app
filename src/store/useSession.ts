import type { Session } from "@supabase/supabase-js";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserSessionStore {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

const initialState = {
  session: null,
};

export const useSession = create<UserSessionStore>()(
  devtools((set) => ({
    ...initialState,
    setSession: (session) => set({ session }),
  })),
);

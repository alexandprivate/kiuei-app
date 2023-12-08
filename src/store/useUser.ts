import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Session } from '@supabase/supabase-js';

interface UserStore {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

const initialState = {
  session: null
};

export const useUser = create<UserStore>()(
  devtools((set) => ({
    ...initialState,
    setSession: (session) => set({ session })
  }))
);

import { create } from "zustand";
import { persist } from "zustand/middleware";

const sessionStorageWrapper = {
  getItem: (name) => {
    const item = sessionStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    sessionStorage.removeItem(name);
  },
};

export const useUserStore = create(
  persist(
    (set) => ({
      // State variables
      user: null,
      loadingUser: true,
      isAuthenticated: false,
      tokenRefreshed: false,

      isOpen: false,
      message: '',
      type: 'info',

      // Modal actions
      openModal: (message, type = 'info') =>
        set((state) => {
          if (state.isOpen && state.message === message && state.type === type) {
            return state;
          }
          return { isOpen: true, message, type };
        }),

      closeModal: () =>
        set((state) => {
          if (!state.isOpen) return state;
          return { isOpen: false, message: '', type: 'info' };
        }),

      // Auth actions
      toggleTokenRefreshed: () => set((state) => ({ tokenRefreshed: !state.tokenRefreshed })),

      setUser: (update) =>
        set((state) => ({
          user: typeof update === "function" ? update(state.user) : update,
          loadingUser: false,
          isAuthenticated: !!update,
        })),

      clearUser: () => set({ 
        user: null, 
        loadingUser: false, 
        isAuthenticated: false 
      }),
    }),
    {
      name: "user-storage", // Unique name for localStorage
      storage: sessionStorageWrapper,
      partialize: (state) => ({
        // Only persist these states
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);
import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  loadingUser: true, // Initial loading state
  setUser: (update) =>
    set((state) => ({
      user: typeof update === "function" ? update(state.user) : update,
      loadingUser: false, // Mark loading as complete when setting the user
    })),
  clearUser: () => set({ user: null, loadingUser: false }), // Clear user and mark loading as complete
  tokenRefreshed: false, // Add tokenRefreshed state
  toggleTokenRefreshed: () => set((state) => ({ tokenRefreshed: !state.tokenRefreshed })), // Add toggle function
}));

export default useUserStore;

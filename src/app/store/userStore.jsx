import { create } from 'zustand'

export const userStore = create((set) => ({
  loading: false,
  error: null,

  updateLoading: (loading) => set(() => ({loading })),
  updateError: (error) => set(() => ({error })),
  
  isOpen: false,
  message: '',
  type: 'info', // can be 'success', 'error', 'info', 'warning'

  openModal: (message, type = 'info') =>
    set((state) => {
      if (state.isOpen && state.message === message && state.type === type) {
        // Avoid unnecessary updates
        return state;
      }
      return { isOpen: true, message, type };
    }),

  closeModal: () =>
    set((state) => {
      if (!state.isOpen) {
        // Avoid unnecessary updates
        return state;
      }
      return { isOpen: false, message: '', type: 'info' };
    }),
}))

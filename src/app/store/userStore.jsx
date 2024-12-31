import { create } from 'zustand'

export const userStore = create((set) => ({
  user:null,
  loading: false,
  error: null,

  updateUser: (user) => set(() => ({user })),
  updateLoading: (loading) => set(() => ({loading })),
  updateError: (error) => set(() => ({error })),
  
  isOpen: false,
  message: '',
  type: 'info', // can be 'success', 'error', 'info', 'warning'
  openModal: (message, type = 'info') => set({ isOpen: true, message, type }),
  closeModal: () => set({ isOpen: false, message: '', type: 'info' }),
}))

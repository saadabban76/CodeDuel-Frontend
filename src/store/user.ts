import { create } from 'zustand'

export const userStore = create((set) => ({
  user: {
    isLoggedin: false,
    data: null
  },

  updateUser: (newUser: any) => (state: any) => ({
    user: {...state.user, ...newUser}
  })
}))


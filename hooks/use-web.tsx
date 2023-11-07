import { create } from "zustand"

interface WebInterfce {
  miniSidebar: boolean
  cartBar: boolean
  //   miniNavbar: boolean
  miniFilter: boolean
  toggleSidebar: () => void
  setCartBarFalse: () => void
  setCartBarTrue: () => void
  toggleCartbar: () => void
  //   setMiniNavbarFalse: () => void
  //   setMiniNavbarTrue: () => void
  setMiniFilterFalse: () => void
  setMiniFilterTrue: () => void
}

const useWeb = create<WebInterfce>((set) => ({
  miniSidebar: false,
  cartBar: false,
  //   miniNavbar: false,
  miniFilter: false,
  toggleSidebar: () =>
    set((state) => ({
      ...state,
      cartBar: false,
      miniFilter: false,
      miniSidebar: !state.miniSidebar,
    })),
  setCartBarFalse: () => set((state) => ({ ...state, cartBar: false })),
  setCartBarTrue: () =>
    set((state) => ({
      ...state,
      miniSidebar: false,
      miniFilter: false,
      cartBar: true,
    })),
  toggleCartbar: () =>
    set((state) => ({
      ...state,
      cartBar: !state.cartBar,
      miniFilter: false,
      miniSidebar: false,
    })),
  setMiniFilterFalse: () => set((state) => ({ ...state, miniFilter: false })),
  setMiniFilterTrue: () =>
    set((state) => ({
      ...state,
      miniSidebar: false,
      cartBar: false,
      miniFilter: true,
    })),
}))

export default useWeb

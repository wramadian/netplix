import { create } from "zustand";

const useAlertStore = create((set) => ({
  openAlert: false,
  handleOpenAlert: () =>
    set((state) => ({
      ...state,
      openAlert: !state.openAlert,
    })),
}));

export default useAlertStore;

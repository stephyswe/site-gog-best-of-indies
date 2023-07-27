import { create } from "zustand";

interface MenuStateStore {
  idOpen: number | null;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: (id: string) => void;
}

const useProductExpandState = create<MenuStateStore>((set) => ({
  idOpen: null,
  isOpen: false,
  onOpen: (id: any) => set({ idOpen: id, isOpen: true }),
  onClose: () => set({ idOpen: null, isOpen: false }),
}));

export default useProductExpandState;

import { create } from "zustand";

interface MenuStateStore {
  idOpen: string;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: (id: string) => void;
}

const useMenuState = create<MenuStateStore>((set) => ({
  idOpen: "",
  isOpen: false,
  onOpen: (id: any) => set({ idOpen: id, isOpen: true }),
  onClose: () => set({ idOpen: "", isOpen: false }),
}));

export default useMenuState;

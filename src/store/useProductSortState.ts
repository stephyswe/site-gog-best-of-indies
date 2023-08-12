import { create } from "zustand";

interface State {
    sortId: string;
    setSortId: (term: string) => void;
}

export const useProductSortState = create<State>((set) => ({
    sortId: "",
    setSortId: (term: string) => set({ sortId: term })
}));


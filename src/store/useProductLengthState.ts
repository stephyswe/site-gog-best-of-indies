import { create } from "zustand";

interface State {
  allGamesLength: number;
  setAllGamesLength: (length: number) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useProductLengthState = create<State>((set) => ({
  allGamesLength: 0,
  setAllGamesLength: (length: number) => set({ allGamesLength: length }),
  searchTerm: "",
  setSearchTerm: (term: string) => set({ searchTerm: term }),
}));

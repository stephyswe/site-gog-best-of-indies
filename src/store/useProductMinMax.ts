import { create } from "zustand";

interface State {
  minMax: { min: number, max: number } | null;
  setMinMax: (value: { min: number, max: number } | null) => void;

  values: [number, number];
  setValues: (value: [number, number]) => void;
}

export const useProductMinMaxState = create<State>((set) => ({
  minMax: null, 
  setMinMax: (value: { min: number, max: number } | null) => set({ minMax: value }),

  // assuming default values are [0, 0]
  values: [0, 0],
  setValues: (value: [number, number]) => set({ values: value })
}));

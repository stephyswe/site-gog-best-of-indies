import { create } from "zustand";

interface Position {
    top: number;
    left: number;
}

interface State {
    expandedPosition: Position;
    setExpandedPosition: (pos: Position) => void;
}

export const useProductExpandPosState = create<State>((set) => ({
    // Define the initial state for expandedPosition
    expandedPosition: { top: 0, left: 0 },
    // Define the action to update expandedPosition
    setExpandedPosition: (pos: Position) => set({ expandedPosition: pos })
}));


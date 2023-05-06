import { create } from "zustand";

interface TimerState {
  seconds: number;
  reset: () => void;
}

const useTimerStore = create<TimerState>()((set) => ({
  seconds: 0,
  setSeconds: (seconds: number) => set({ seconds }),
  reset: () => set({ seconds: 0 }),
}));

export default useTimerStore;

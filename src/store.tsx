import { create } from "zustand";

interface StepState {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

//  Here, we define a StepState interface to describe our store's shape,
// including the step state and methods to increment and decrement it.

export const useStepState = create<StepState>((set) => ({
  step: 1,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 }))
}));

import { create } from "zustand";
type FormState = {
    isFormVisible : boolean,
    toggleFormVisibility() : void;
}
export const useFormStore = create<FormState>((set) => ({

    isFormVisible: false, 
    toggleFormVisibility: () => set((state) => ({ isFormVisible: !state.isFormVisible })),
  }));
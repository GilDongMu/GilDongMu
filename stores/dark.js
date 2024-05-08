import { create } from "zustand";

const useDark = create(set => ({
  dark: "white",
  setDark: text => set({ dark: text }),
}));

export default useDark;

import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state, payload) => {
      console.log("called with state");
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, payload) => {
      console.log("close menu")
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;

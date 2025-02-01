import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    cake: 5,
    caisse: 100,
  },
  reducers: {
    buyCake: (state, action) => {
      state.cake -= action.payload;
      state.caisse += action.payload * 3.5;
    },
    restockCake: (state, action) => {
      state.cake += action.payload;
      state.caisse -= action.payload * 1.5;
    },
  },
});

export const { buyCake, restockCake } = cakeSlice.actions;
export default cakeSlice.reducer;

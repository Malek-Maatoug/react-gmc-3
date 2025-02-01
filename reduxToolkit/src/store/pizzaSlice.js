import { createSlice } from "@reduxjs/toolkit";

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    Number: 10,
    caisse: 100,
  },
  reducers: {
    sellPizza: (state, action) => {
      state.Number -= action.payload;
      state.caisse += action.payload * 5;
    },
    restockPizza: (state, action) => {
      state.Number += action.payload;
      state.caisse -= action.payload * 2;
    },
  },
});
export const { sellPizza, restockPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import cake from "./cakeSlice";
import pizza from "./pizzaSlice";
const store = configureStore({ reducer: { cake, pizza } });
export default store;

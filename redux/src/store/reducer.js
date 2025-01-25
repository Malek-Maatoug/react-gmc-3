import { BUY_CAKE, RESTOCK_CAKE } from "./actions";
const initialState = {
  cake: 5,
  caisse: 100,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case BUY_CAKE:
      return {
        ...state,
        cake: state.cake - actions.payload,
        caisse: state.caisse + actions.payload * 3.5,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        cake: state.cake + actions.payload,
        caisse: state.caisse - actions.payload * 1.5,
      };
    default:
      return state;
  }
};

export default reducer;

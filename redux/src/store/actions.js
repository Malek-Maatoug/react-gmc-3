const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";
const buyCake = (num) => {
  return {
    type: BUY_CAKE,
    payload: num,
  };
};

const restockCake = (num) => {
  return {
    type: RESTOCK_CAKE,
    payload: num,
  };
};

export { buyCake, restockCake, BUY_CAKE, RESTOCK_CAKE };

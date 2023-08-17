export const commonReducers = (state = { product: [], cart: [] }, action) => {
  if (action.type === "ADD-PRODUCT") {
    return { ...state, product: [...state.product, action.payload] };
  }
  if (action.type === "ADD-TO-CART") {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }
  return state;
};

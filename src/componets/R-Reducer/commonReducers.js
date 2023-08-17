export const commonReducers = (
  state = { product: [1, 2, 3, 4, 5, 6, 7, 8] },
  action
) => {
  if (action.type === "ADD-PRODUCT") {
    return { ...state, product: [...action.data, ...state.product] };
  }
  return state;
};

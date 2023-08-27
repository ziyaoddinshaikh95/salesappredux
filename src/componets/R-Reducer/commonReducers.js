export const commonReducers = (
  state = { product: [], cart: [], todo: [], user: {} },
  action
) => {
  if (action.type === "ADD-PRODUCT") {
    return { ...state, product: [...state.product, action.payload] };
  }
  if (action.type === "ADD-TO-CART") {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }
  if (action.type == "REMOVE") {
    const filtered = state.cart.filter((item) => item !== action.payload);
    return { ...state, cart: filtered };
  }
  if (action.type == "SIGN-UP") {
    return {
      ...state,
      user: action.payload,
    };
  }

  // if (action.type == "ADD_TODO") {
  //   return {
  //     ...state,
  //     todo: [...state.todo, action.payload],
  //   };
  // }
  return state;
};

// switch(action.type){
//   case "ADD_TODO":
//     return {
//       ...state,
//       todo: [...state.todo, action.payload],
//     };

// }

export const todoReducer = (state = { todo: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
  }
  return state;
};

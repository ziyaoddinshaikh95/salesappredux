export const todoReducer = (state = { todo: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "remove":
      const filtered = state.todo.filter((item, ind) => ind !== action.payload);
      return {
        ...state,
        todo: filtered,
      };
  }
  return state;
};

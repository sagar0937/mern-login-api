export const initialState = null;

//userReducer  function
export const userReducer = (state, action) => {
  if (action.type === "USER") {
    return action.payload;
  }
  return state;
};

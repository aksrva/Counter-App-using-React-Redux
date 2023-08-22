const initialState = 0;
const changeValue = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.incr;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default changeValue;

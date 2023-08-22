export const incrementValue = (incr) => {
  return {
    type: "INCREMENT",
    incr: incr,
  };
};

export const decrementValue = () => {
  return {
    type: "DECREMENT",
  };
};

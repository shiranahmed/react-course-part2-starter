interface Action {
  type: "INCREAMENT" | "RESET";
}

const CounterReducer = (state: number, action: Action): number => {
  if (action.type === "INCREAMENT") return state + 1;
  if (action.type === "RESET") return 0;
  return state;
};

export default CounterReducer;

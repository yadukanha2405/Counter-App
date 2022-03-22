import { createContext, useReducer } from "react";
import "./styles.css";
import Value from "./Value";

export const Context = createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ countState: state, countDispatch: dispatch }}>
      <Value />
    </Context.Provider>
  );
}

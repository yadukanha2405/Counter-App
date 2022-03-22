import { useContext } from "react";
import { Context } from "./App";

export default function Value() {
  const Consumer = useContext(Context);
  console.log(Consumer);
  return (
    <div className="conatiner">
      <h1 className="heading">Context API+ useReducers</h1>
      <h2 className="value">Value: {Consumer.countState} </h2>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => Consumer.countDispatch("increment")}
        >
          Increment
        </button>
        <button
          className="btn"
          onClick={() => Consumer.countDispatch("decrement")}
        >
          Decrement
        </button>
        <button className="btn" onClick={() => Consumer.countDispatch("reset")}>
          Reset
        </button>{" "}
      </div>
    </div>
  );
}

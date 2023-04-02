import React, { useReducer } from "react";

const Test1 = () => {
  const initialState = {
    firstCounter: 0,
    secondCounter:0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return {...state, firstCounter: state.firstCounter + action.value };
      case "decrease":
        return {...state, firstCounter: state.firstCounter - action.value };
        case "increaseTwo":
        return {...state, secondCounter: state.secondCounter + action.value };
      case "decreaseTwo":
        return {...state, secondCounter: state.secondCounter - action.value };
      case "reset":
        
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1>first {state.firstCounter}</h1>
      <h1>second {state.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increase", value: 5 })}>
        Increase
      </button>
      <br></br>
      <button onClick={() => dispatch({ type: "decrease", value: 2 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: "increaseTwo", value: 5 })}>
        IncreaseTwo
      </button>
      <button onClick={() => dispatch({ type: "decreaseTwo", value: 5 })}>
        DecreaseTwo
      </button>
      <br></br>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Test1;

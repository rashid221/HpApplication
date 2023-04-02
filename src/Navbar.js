import React, { useReducer } from "react";

const initialState = "setcolors";

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "Increment":
      return "setyellow";
    case "Decrement":
      return "setblue";
    case "Theme":
      return "setred";
    default:
      return state;
  }
};
function Navbar(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className={`head-set ${state}`}>
        <div className="centralised">
          <h1>Mohd Rashid here is my assignment</h1>
        </div>
        <div className="centralised-1">
          <select
            onChange={(e) => {
              if (e.target.value === "red") {
                dispatch({ type: "Theme" });
              } else if (e.target.value === "yellow") {
                dispatch({ type: "Increment" });
              } else if (e.target.value === "blue") {
                dispatch({ type: "Decrement" });
              }
            }}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Select Theme</option>
            <option value="red">red</option>
            <option value="yellow">yellow</option>
            <option value="blue">blue</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

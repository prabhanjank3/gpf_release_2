import React from "react";
import "./StateController.css";
export default props => {
  const clickHandler = index => {
    props.getUpdatedState(index);
    props.updateUiState(index);
    console.log("UIState");
    console.log(props.state);
  };
  const lookup = { 0: "A", 1: "D", 2: "P", 3: "C", 4: "R" };
  var finalObj = Object.keys(lookup).map(index => {
    if (index < props.state) {
      return (
        <div
          className="state-block-lightblue"
          onClick={() => clickHandler(index)}
        />
      );
    } else if (index > props.state) {
      return (
        <div className="state-block-gray" onClick={() => clickHandler(index)} />
      );
    } else {
      return (
        <div className="state-block" onClick={() => clickHandler(index)}>
          {lookup[index]}
        </div>
      );
    }
  });
  return <div className="state-box">{finalObj}</div>;
};

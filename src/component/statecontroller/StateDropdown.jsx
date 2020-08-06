import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import StateController from "./StateController";
import "./StateDropdown.css";
export default props => {
  const [stage, setStage] = useState(props.state);
  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  // const handleStateChange = (event, index, value) => {
  //   console.log("Hello");
  // };
  // const num = [
  //   "Analysis",
  //   "Defined",
  //   "In Progress",
  //   "Completed",
  //   "Ready To Ship"
  // ];
  const updateUiState = index => {
    console.log("InUi" + index);
    setStage(index);
    console.log(stage);
  };
  return (
    <div className="state-box">
      <StateController
        state={props.state}
        getUpdatedState={props.getUpdatedState}
        updateUiState={updateUiState}
      />
    </div>

    // <Dropdown
    //   className="state-dropdown"
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    //   onChange={handleStateChange}
    // >
    //   {isHovered ? (
    //     <Dropdown.Toggle
    //       id="dropdown-basic"
    //       variant="outline-primary"
    //       className="statecontroller-dropdown-btn"
    //     >
    //       <StateController state={props.state} />
    //     </Dropdown.Toggle>
    //   ) : (
    //     <StateController state={props.state} />
    //   )}

    //   <Dropdown.Menu>
    //     <Dropdown.Item href="#/action-1">Analysis</Dropdown.Item>
    //     <Dropdown.Item href="#/action-2">Defined</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3">In Progress</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3">Ready To Ship</Dropdown.Item>
    //   </Dropdown.Menu>
    // </Dropdown>
  );
};

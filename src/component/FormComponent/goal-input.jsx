import React from "react";
import { Form } from "react-bootstrap";
import GoalDropdown from "./goal-dropdown";
export default props => {
  return (
    <div className="small-info-div">
      <Form.Label>Select Goal</Form.Label>
      <br />
      <GoalDropdown
        goalData={props.goalData}
        value={props.value}
        handleChange={props.handleChange}
      />
    </div>
  );
};

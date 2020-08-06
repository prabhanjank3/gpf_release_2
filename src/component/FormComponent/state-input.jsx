import React from "react";
import { Form } from "react-bootstrap";
import StateController from "../statecontroller/StateController";
export default props => {
  return (
    <div className="small-info-div">
      <Form.Label>State</Form.Label>
      <StateController state={props.state} />
    </div>
  );
};

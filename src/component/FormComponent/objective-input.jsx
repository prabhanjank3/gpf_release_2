import React from "react";
import { Form } from "react-bootstrap";
export default props => {
  return (
    <Form.Group
      controlId="exampleForm.ControlTextarea1"
      className="description-section"
    >
      <Form.Label>Objectives</Form.Label>
      <textarea
        id="w3review"
        name="objective"
        rows="10"
        cols="125"
        onChange={props.onChange}
      >
        {props.objective}
      </textarea>
    </Form.Group>
  );
};

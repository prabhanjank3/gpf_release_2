import React from "react";
import { Form } from "react-bootstrap";
export default props => {
  return (
    <Form.Group
      controlId="exampleForm.ControlTextarea1"
      className="description-section"
    >
      <Form.Label>Description</Form.Label>
      <div>
        <textarea
          id="w3review"
          name="description"
          rows="10"
          cols="125"
          onChange={props.onChange}
        >
          {props.description}
        </textarea>
      </div>
    </Form.Group>
  );
};

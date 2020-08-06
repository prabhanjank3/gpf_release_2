import React from "react";
import { Form } from "react-bootstrap";
export default (props) => {
  return (
    <Form.Group
      controlId="exampleForm.ControlTextarea1"
      className="description-section"
    >
      <Form.Label>Additional Comments</Form.Label>
      <Form.Control
        as="textarea"
        rows="10"
        name="comments"
        value={props.comments}
        onChange={props.onChange}
      />
    </Form.Group>
  );
};

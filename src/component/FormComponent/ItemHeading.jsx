import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import "./FormComponents.css";
export default props => {
  console.log(props);
  return (
    <InputGroup className="mb-3">
      <Form.Label>Title</Form.Label>
      <input
        name="title"
        className="title-input"
        value={props.title}
        onChange={props.onChange}
      />
    </InputGroup>
  );
};

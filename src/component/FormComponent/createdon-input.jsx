import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from "../datepicker/DatePicker";
export default props => {
  return (
    <div className="small-info-div">
      <Form.Label>Created On</Form.Label>
      <br />
      <DatePicker selected={props.createdOn} />
    </div>
  );
};

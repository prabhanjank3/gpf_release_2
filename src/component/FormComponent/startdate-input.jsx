import React from "react";
import { Form } from "react-bootstrap";
export default props => {
  console.log(new Date(props.startDate));
  return (
    <div className="small-info-div">
      <Form.Label>Start Date</Form.Label>
      <br />
      <input
        type="date"
        name="startDate"
        value={
          new Date(props.startDate).getFullYear() +
          "-" +
          ("0" + (new Date(props.startDate).getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + new Date(props.startDate).getDate()).slice(-2)
        }
        onChange={props.onChange}
      />
    </div>
  );
};

import React from "react";
import { Form } from "react-bootstrap";
export default props => {
  return (
    <div className="small-info-div">
      <Form.Label>Close Date</Form.Label>
      <br />
      <input
        type="date"
        name="closeDate"
        value={
          props.closeDate.getFullYear() +
          "-" +
          ("0" + (props.closeDate.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + props.closeDate.getDate()).slice(-2)
        }
        onChange={props.onChange}
      />
    </div>
  );
};

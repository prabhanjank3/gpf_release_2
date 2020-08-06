import React from "react";
import { Form } from "react-bootstrap";
export default props => {
  return (
    <div className="small-info-div">
      <Form.Label>Pts</Form.Label>
      <div>
        <input
          name="Pts"
          className="pts-input"
          onChange={props.onChange}
          type="number"
          value={props.Pts}
        />
      </div>
    </div>
  );
};

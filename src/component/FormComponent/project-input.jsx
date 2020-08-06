import React from "react";
import { Form } from "react-bootstrap";
import ProjectDropdown from "./project-dropdown";
export default props => {
  return (
    <div className="small-info-div">
      <Form.Label>Select Project</Form.Label>
      <br />
      <ProjectDropdown
        goalData={props.projectData}
        value={props.value}
        handleChange={props.handleChange}
      />
    </div>
  );
};

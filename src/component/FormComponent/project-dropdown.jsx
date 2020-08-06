import React from "react";
export default props => {
  console.log(props);
  return (
    <select name="projectId" onChange={props.handleChange}>
      {Object.keys(props.projectData).map(projectId => {
        return (
          <option value={projectId}>
            {props.projectData[projectId].title}
          </option>
        );
      })}
    </select>
  );
};

import React from "react";
export default props => {
  console.log(props);
  return (
    <select name="goalId" onChange={props.handleChange}>
      {Object.keys(props.goalData).map(goalId => {
        return <option value={goalId}>{props.goalData[goalId].title}</option>;
      })}
    </select>
  );
};

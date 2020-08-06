import React from "react";
import ProjectItemInList from "../ProjectItem/ProjectItemInList";
export default props => {
  return (
    <div>
      {props.goalList.map(item => {
        return <ProjectItemInList projectItem={item} />;
      })}
    </div>
  );
};

import React, { useEffect } from "react";
import ProjectItemInList from "../Project/ProjectItem/ProjectItemInList";
import GoalTaskList from "../Goal_TaskItemList.jsx/Goal_TaskItemList";
import { convertChildToArray } from "../../container/duration/CommonFunctions";
export default props => {
  useEffect(() => {
    // var elementArray = document.getElementsByClassName("goaltasklist");
    // if (elementArray.length) {
    //   Object.keys(elementArray).forEach(index => {
    //     elementArray[index].style.display = "none";
    //   });
    // }
  }, []);
  return (
    <div>
      {props.projectList.map(projectItem => {
        return !Object.keys(projectItem["childs"]).length ? (
          <></>
        ) : (
          <div>
            <ProjectItemInList projectItem={projectItem} />
            <div
              id={"goaltasklist-" + projectItem.id}
              className="goaltasklist"
              /*style={{ display: "none" }}*/
            >
              <GoalTaskList
                updateTaskState={props.updateTaskState}
                handleTaskBlocking={props.handleTaskBlocking}
                updateTaskCloseDate={props.updateTaskCloseDate}
                goalList={convertChildToArray(projectItem["childs"])}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

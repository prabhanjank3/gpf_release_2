import React from "react";
import TaskItemInList from "../TaskItem/TaskItemInList";
export default props => {
  return (
    <div>
      {props.taskList.map(item => {
        return (
          <TaskItemInList
            item={item}
            updateTaskState={props.updateTaskState}
            updateTaskCloseDate={props.updateTaskCloseDate}
            handleTaskBlocking={props.handleTaskBlocking}
          />
        );
      })}
    </div>
  );
};

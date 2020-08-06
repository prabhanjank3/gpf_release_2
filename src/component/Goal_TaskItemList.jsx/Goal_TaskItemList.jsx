import React from "react";
import TaskItemList from "../Task/TaskItemList/TaskItemList";
import TaskListHeading from "../Task/TaskItem/TaskListHeading";
import GoalItem from "../Goal/GoalItem/GoalItemInList";
import { convertChildToArray } from "../../container/duration/CommonFunctions";
export default props => {
  return (
    <div className="goal-task-list-div">
      <TaskListHeading />
      {props.goalList.map(goalItem => {
        return (
          <div>
            <GoalItem goalItem={goalItem} />
            <div id={"tasklist-" + goalItem.id} /*style={{ display: "none" }}*/>
              <TaskItemList
                updateTaskState={props.updateTaskState}
                taskList={convertChildToArray(goalItem["childs"])}
                updateTaskCloseDate={props.updateTaskCloseDate}
                handleTaskBlocking={props.handleTaskBlocking}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

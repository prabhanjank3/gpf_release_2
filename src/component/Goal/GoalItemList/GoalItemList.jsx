import React from "react";
import GoalItemInList from "../GoalItem/GoalItemInList";
export default props => {
  return (
    <div>
      {props.goalList.map(item => {
        return <GoalItemInList goalItem={item} />;
      })}
    </div>
  );
};

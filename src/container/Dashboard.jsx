import React, { Component } from "react";
import { connect } from "react-redux";
import DurationPalat from "./duration/DurationPalat";
import GoalTaskList from "../component/Goal_TaskItemList.jsx/Goal_TaskItemList";
import {
  convertChildToArray,
  refreshState,
  updateStatusOfTask,
  updateCloseDateofTask,
  updateTasktoBlocked,
  updateTasktoUnblocked
} from "./duration/CommonFunctions";
import LoginForm from "./Forms/Auth/Login";
import { Redirect } from "react-router-dom";
import ProjectGoalTaskList from "../component/Project_GoalList/Project_GoalList";
import "./Dashboard.css";
import Loader from "../component/Loader/Spinner";
import ErrorModal from "../component/Modal/ErrorModal";
class Dashboard extends Component {
  setDataload = () => {
    this.props.sendSetDataloadAction("DATALOADING_ON");
  };
  unsetDataLoad = () => {
    this.props.sendSetDataloadAction("DATALOADING_OFF");
  };
  updateDataTree = datatree => {
    this.props.sendUpdateDataTreeAction("UPDATE_DATATREE", datatree);
  };
  updateDuration = duration => {
    this.props.sendUpdateDurationAction("UPDATE_DURATION", duration);
  };
  updateTaskState = (projectId, goalId, taskId, newstate) => {};
  fetchState = async (fromDate, toDate) => {
    var newState = await refreshState(fromDate, toDate);
    this.updateDataTree(newState.datatree);
  };
  updateDurationButtonHandler = async (fromDate, toDate) => {
    this.setDataload();
    var newState = await refreshState(fromDate, toDate);
    console.log("Hello");
    console.log(newState);
    this.updateDataTree(newState.datatree);
    this.props.sendUpdateAction("UPDATE_SEPARATEDATA_LOOKUP", newState);
    await this.unsetDataLoad();
  };
  updateTaskCloseDate = (goalId, taskId, newCloseDate) => {
    this.setDataload();
    updateCloseDateofTask(taskId, newCloseDate)
      .then(response => {
        this.props.sendUpdateAction("UPDATE_CLOSEDATE", {
          projectId: this.props.lookup[goalId],
          goalId: goalId,
          taskId: taskId,
          newCloseDate: newCloseDate
        });
        this.unsetDataLoad();
      })
      .catch(err => console.log(err));
  };
  updateTaskState = async (goalId, taskId, newstate) => {
    this.setDataload();
    updateStatusOfTask(taskId, newstate)
      .then(response => {
        if (response.status === 200) {
          //this.updateTaskState("PR77254", goalId, taskId, newstate);
          this.props.sendUpdateStateAction("UPDATE_STATEDATA", {
            projectId: this.props.lookup[goalId],
            goalId: goalId,
            taskId: taskId,
            newState: newstate,
            object: { newState: newstate }
          });
          this.unsetDataLoad();
        }
      })
      .catch(err => console.log(err));
  };
  handleTaskBlocking = (goalId, taskId, newBlockedState) => {
    var blockPromise = newBlockedState
      ? updateTasktoBlocked(taskId)
      : updateTasktoUnblocked(taskId);
    this.setDataload();
    blockPromise
      .then(response => {
        if (response.status === 200) {
          this.props.sendUpdateStateAction("UPDATE_ISBLOCKED", {
            projectId: this.props.lookup[goalId],
            goalId: goalId,
            taskId: taskId,
            isBlocked: newBlockedState
          });
          this.unsetDataLoad();
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    return this.props.authData.isLoggedIn ? (
      <div>
        {this.props.isDataLoading ? (
          <Loader />
        ) : (
          <div className="dashboard-body-section">
            <DurationPalat
              duration={this.props.duration}
              isDataLoading={this.props.isDataLoading}
              updateDurationButtonHandler={this.updateDurationButtonHandler}
              updateDuration={this.updateDuration}
            />
            <ProjectGoalTaskList
              projectList={convertChildToArray(this.props.dataTree)}
              updateTaskState={this.updateTaskState}
              handleTaskBlocking={this.handleTaskBlocking}
              updateTaskCloseDate={this.updateTaskCloseDate}
            />
          </div>
        )}
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
  componentDidMount() {
    this.updateDurationButtonHandler(
      this.props.duration.fromDate,
      this.props.duration.toDate
    );
  }
}
const mapStateToProps = state => {
  return {
    dataTree: state.dataTree,
    goalData: state.data.goalData,
    duration: state.duration,
    isDataLoading: state.isDataLoading,
    lookup: state.lookup,
    authData: state.authData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    sendSetDataloadAction: actionType => {
      dispatch({ type: actionType });
    },
    sendUpdateDataTreeAction: (actionType, obj) => {
      dispatch({ type: actionType, payLoad: obj });
    },
    sendUpdateDurationAction: (actionType, obj) => {
      dispatch({ type: actionType, payLoad: obj });
    },
    sendUpdateStateAction: (actionType, obj) => {
      dispatch({ type: actionType, payLoad: obj });
    },
    sendUpdateAction: (actionType, obj) => {
      dispatch({ type: actionType, payLoad: obj });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

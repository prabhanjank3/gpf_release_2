import React, { Component } from "react";
import "./taskinfo.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import TaskInfoFunc from "./taskinfoFunc";
import { updateTask } from "../duration/CommonFunctions";
import Loader from "../../component/Loader/Spinner";
class TaskInfo extends Component {
  state = { isSubmitSuccess: false };
  updateTaskRequest = (id, updateObj) => {
    this.props.sendSetDataloadAction("DATALOADING_ON");
    updateTask(id, updateObj)
      .then(response => {
        console.log(response);
        if (response.data.ok) {
          this.setState({ ...this.state, isSubmitSuccess: true });
        }
        this.props.sendSetDataloadAction("DATALOADING_OFF");
      })
      .catch(err => alert("Error Occured. Please Try again.."));
  };
  render() {
    console.log("In Taskingo");
    console.log(this.props);
    return this.props.isLoading ? (
      <Loader />
    ) : this.state.isSubmitSuccess ? (
      <Redirect to="/" />
    ) : (
      <TaskInfoFunc
        taskData={this.props.taskData}
        match={this.props.match}
        updateTask={this.updateTaskRequest}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    taskData: state.data.taskData,
    isLoading: state.isDataLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    sendSetDataloadAction: actionType => {
      dispatch({ type: actionType });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskInfo);

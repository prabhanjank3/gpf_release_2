import React, { Component } from "react";
import "./taskinfo.css";
import { connect } from "react-redux";
import TaskInsertFunc from "./taskinsertFunc";
import { insertTask } from "../duration/CommonFunctions";
import Loader from "../../component/Loader/Spinner";
import { Redirect } from "react-router-dom";
class TaskInfo extends Component {
  state = { isSubmitSuccess: false };
  inserTaskRequest = taskItem => {
    this.props.sendSetDataloadAction("DATALOADING_ON");
    insertTask(taskItem)
      .then(response => {
        console.log(response);
        this.props.sendSetDataloadAction("DATALOADING_OFF");
        if (response.data.id) {
          this.setState({ ...this.state, isSubmitSuccess: true });
        } else {
          alert("Oops..something went wrong..");
        }
      })
      .catch(err => alert("Error Occured. Please try again.."));
  };
  render() {
    return this.props.isLoading ? (
      <Loader />
    ) : this.state.isSubmitSuccess ? (
      <Redirect to="/" />
    ) : (
      <TaskInsertFunc
        goalData={this.props.goalData}
        insertTask={this.inserTaskRequest}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    goalData: state.data.goalData,
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

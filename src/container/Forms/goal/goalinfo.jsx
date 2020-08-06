import React, { Component } from "react";
import "./goalinfo.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import GoalInfoFunc from "./goalinfoFunc";
import { updateGoal } from "../../duration/CommonFunctions";
import Loader from "../../../component/Loader/Spinner";
class TaskInfo extends Component {
  state = { isSubmitSuccess: false };
  updateGoalRequest = (id, updateObj) => {
    this.props.sendSetDataloadAction("DATALOADING_ON");
    updateGoal(id, updateObj)
      .then(response => {
        console.log("resp");
        console.log(response);
        if (response.data.ok) {
          this.setState({ ...this.state, isSubmitSuccess: true });
        } else {
          alert("Opps..Something went wrong.");
        }
        this.props.sendSetDataloadAction("DATALOADING_OFF");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log("Goal info ");
    console.log(this.props);
    return this.props.isLoading ? (
      <Loader />
    ) : this.state.isSubmitSuccess ? (
      <Redirect to={{ pathname: "/" }} />
    ) : (
      <GoalInfoFunc
        goalData={this.props.goalData}
        match={this.props.match}
        updateGoal={this.updateGoalRequest}
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

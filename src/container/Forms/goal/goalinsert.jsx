import React, { Component } from "react";
import { connect } from "react-redux";
import GoalInsertFunc from "./goalinsertFunc";
import { Redirect } from "react-router-dom";
import { insertGoal } from "../../duration/CommonFunctions";
import Loader from "../../../component/Loader/Spinner";
class GoalInfo extends Component {
  state = { isSubmitSuccess: false };
  inserGoalRequest = goalItem => {
    this.props.sendSetDataloadAction("DATALOADING_ON");
    insertGoal(goalItem)
      .then(response => {
        console.log(response);
        if (response.data.hasOwnProperty("id")) {
          this.setState({ ...this.state, isSubmitSuccess: true });
          this.props.sendSetDataloadAction("DATALOADING_OFF");
        } else {
          alert("Oops..Something went wrong");
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
      <GoalInsertFunc
        projectData={this.props.projectData}
        insertGoal={this.inserGoalRequest}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    projectData: state.data.projectData,
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
)(GoalInfo);

import React, { Component } from "react";
import LoginForm from "../../../component/AuthForms/login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../duration/CommonFunctions";
import axios from "axios";
class LoginFormContainer extends Component {
  handleSubmit = values => {
    login(values).then(resp => {
      if (resp.data.status === 200) {
        this.props.setAuthAction("SET_LOGGED_IN");
      } else {
        alert(resp.data.msg);
      }
    });
  };
  render() {
    return !this.props.authData.isLoggedIn ? (
      <LoginForm handleSubmit={this.handleSubmit} />
    ) : (
      <Redirect to="/" />
    );
  }
}
const mapStateToProps = state => {
  return {
    authData: state.authData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setAuthAction: (actionType, obj) => {
      dispatch({ type: actionType, payLoad: obj });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);

import React, { Component } from "react";
import SignupForm from "../../../component/AuthForms/signup";
import { Redirect } from "react-router-dom";
import { signup } from "../../duration/CommonFunctions";

class SignupFormContainer extends Component {
  state = { isSignupSuccessful: false };
  handleSubmit = (values) => {
    signup(values)
      .then((resp) => {
        console.log(resp);
        if (resp.data) {
          this.setState({ isSignupSuccessful: true });
        } else {
          alert("Oops..Something went wrong..");
        }
      })
      .catch((err) => alert("Oops..Something went wrong.."));
  };
  render() {
    return !this.state.isSignupSuccessful ? (
      <SignupForm handleSubmit={this.handleSubmit} />
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default SignupFormContainer;

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../store/reducer";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "../container/Dashboard";
import TaskInfo from "../container/Forms/taskinfo";
import TaskInsert from "../container/Forms/taskinsert";
import GoalInsert from "../container/Forms/goal/goalinsert";
import GoalInfo from "../container/Forms/goal/goalinfo";
import LoginForm from "../container/Forms/Auth/Login";
import SignupForm from "../container/Forms/Auth/Signup";
import "../styles.css";
const rootElement = document.getElementById("root");
const store = createStore(reducer);
const routing = (
  <Router>
    <Provider store={store}>
      <Route exact path="/" component={Dashboard} />
      <Route path="/taskinfo/:taskId" component={TaskInfo} />
      <Route path="/taskinsert/" component={TaskInsert} />
      <Route path="/goalinsert/" component={GoalInsert} />
      <Route path="/goalinfo/:goalId" component={GoalInfo} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
    </Provider>
  </Router>
);
ReactDOM.render(routing, rootElement);

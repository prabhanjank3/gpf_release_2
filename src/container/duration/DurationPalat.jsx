import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./DurationPalat.css";
import { Link } from "react-router-dom";
import DatePicker from "../../component/datepicker/DatePicker";
class DurationPalat extends Component {
  state = {
    duration: {
      fromDate: this.props.duration.fromDate,
      toDate: this.props.duration.toDate
    },
    isStyleSet: false
  };
  handleFromChange = date => {
    this.setState(prevState => {
      return {
        ...prevState,
        duration: {
          ...prevState.duration,
          fromDate: date
        }
      };
    });
  };
  handleToChange = date => {
    this.setState(prevState => {
      return {
        ...prevState,
        duration: {
          ...prevState.duration,
          toDate: date
        }
      };
    });
  };
  updateDuration = () => {
    console.log(this.state.duration);
    this.props.updateDuration(this.state.duration);
    this.props.updateDurationButtonHandler(
      this.state.duration.fromDate,
      this.state.duration.toDate
    );
  };
  goToNextWeek = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        duration: {
          fromDate: new Date(
            prevState.duration.fromDate.setDate(
              prevState.duration.fromDate.getDate() + 7
            )
          ),
          toDate: new Date(
            prevState.duration.toDate.setDate(
              prevState.duration.toDate.getDate() + 7
            )
          )
        }
      };
    });
  };
  goToPreviousWeek = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        duration: {
          fromDate: new Date(
            prevState.duration.fromDate.setDate(
              prevState.duration.fromDate.getDate() - 7
            )
          ),
          toDate: new Date(
            prevState.duration.toDate.setDate(
              prevState.duration.toDate.getDate() - 7
            )
          )
        }
      };
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="duration-palat-div">
        <span className="iteration-status-label">Iteration Status</span>
        <Button
          className="previous-duration-btn"
          variant="primary"
          onClick={this.goToPreviousWeek}
        >
          <span className="arrow-text">&lt;</span>
        </Button>
        <label for="female" className="palat-label">
          From
        </label>
        <DatePicker
          selected={this.state.duration.fromDate}
          handleChange={this.handleFromChange}
          className="palat-datepicker"
        />
        <label for="female" className="palat-label">
          To
        </label>
        <DatePicker
          selected={this.state.duration.toDate}
          handleChange={this.handleToChange}
          className="palat-datepicker"
        />
        <Button
          className="next-duration-btn"
          variant="primary"
          onClick={this.goToNextWeek}
        >
          <span className="arrow-text">&gt;</span>
        </Button>
        <Button
          className="update-duration-btn"
          variant="primary"
          onClick={this.updateDuration}
        >
          Update
        </Button>
        <Link
          className="add-task-link"
          to={{
            pathname: "/taskinsert"
          }}
        >
          Add Task
        </Link>
        <Link
          className="add-goal-link"
          to={{
            pathname: "/goalinsert"
          }}
        >
          Add Goal
        </Link>
      </div>
    );
  }
  componentDidMount() {}
}

export default DurationPalat;

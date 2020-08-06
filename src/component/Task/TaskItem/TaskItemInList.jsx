import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoStop } from "react-icons/go";
import { MdAssignment } from "react-icons/md";
import { FaCalendar, FaBug } from "react-icons/fa";
import "./TaskItemInList.css";
import StateDropdown from "../../statecontroller/StateDropdown";
import DatePicker from "../../datepicker/DatePicker";
import { Link } from "react-router-dom";
export default props => {
  const handleDateChange = closeDate => {
    console.log(closeDate);
    props.updateTaskCloseDate(props.item.goalId, props.item.id, closeDate);
  };
  const getUpdatedState = index => {
    console.log("In TaskItem");
    console.log(index);
    props.updateTaskState(props.item.goalId, props.item.id, index);
  };
  const handleBlocking = () => {
    props.handleTaskBlocking(
      props.item.goalId,
      props.item.id,
      props.item.hasOwnProperty("isBlocked") && props.item.isBlocked === true
        ? false
        : true
    );
  };

  return (
    <div className="task-item-row">
      <Container fluid>
        <Row>
          <Col className="col" lg="1" />
          <Col className="col row-item-id-col" lg="1" xs="12">
            <MdAssignment className="row-item-id-icon" size="1.3em" />
            <span className="row-item-id">
              <Link
                to={{
                  pathname: "/taskinfo/" + props.item.id
                }}
              >
                {props.item.id}
              </Link>
            </span>
          </Col>
          <Col className="col" lg="3" xs="12">
            <span className="row-item-title">{props.item.title}</span>
          </Col>
          <Col className="col state-control-dropdown-col" lg="2" xs="12">
            <StateDropdown
              state={props.item.state}
              getUpdatedState={getUpdatedState}
            />
          </Col>
          <Col className="col row-item-closedate-col" lg="2" xs="12">
            <DatePicker
              selected={new Date(props.item.closeDate)}
              handleChange={handleDateChange}
            />
            <FaCalendar className="row-item-calender-icon" size="1.2em" />
          </Col>
          <Col className="col" lg="1" xs="12">
            {props.item.Pts}
          </Col>
          <Col className="col center-align" lg="1" xs="12">
            <GoStop
              size="1.3em"
              onClick={handleBlocking}
              style={
                props.item.hasOwnProperty("isBlocked") && props.item.isBlocked
                  ? { color: "red" }
                  : { color: "#707A8A" }
              }
            />
          </Col>
          <Col className="col center-align" lg="1" xs="12">
            <FaBug size="1.3em" color="#707A8A" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

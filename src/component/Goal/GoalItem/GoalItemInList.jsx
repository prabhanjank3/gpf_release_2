import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdAssignment } from "react-icons/md";
import "./GoalItemInList.css";
import { Link } from "react-router-dom";
export default props => {
  return (
    <div className="goal-item-row">
      <Container fluid>
        <Row>
          <Col className="col" lg="1">
            <IoMdAddCircleOutline
              className="row-item-add-icon"
              size="1.3em"
              onClick={() => {
                var element = document.getElementById(
                  "tasklist-" + props.goalItem.id
                );
                if (element.style.display === "none") {
                  element.style.display = "initial";
                } else {
                  element.style.display = "none";
                }
              }}
            />
          </Col>
          <Col className="col row-item-id-col" lg="1">
            <MdAssignment className="row-item-id-icon" size="1.3em" />
            <Link to={{ pathname: "/goalinfo/" + props.goalItem.id }}>
              <span className="row-item-id">{props.goalItem.id}</span>
            </Link>
          </Col>
          <Col className="col" lg="5">
            <span className="row-item-title">{props.goalItem.title}</span>
          </Col>
          <Col className="col" lg="2" />
          <Col className="col" lg="1" />
          <Col className="col center-align" lg="2" />
        </Row>
      </Container>
    </div>
  );
};

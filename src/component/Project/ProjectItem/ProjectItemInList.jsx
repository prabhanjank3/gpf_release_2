import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdAssignment } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import "./ProjectItemInList.css";
export default props => {
  return (
    <div className="project-item-row">
      <Container fluid>
        <Row>
          <Col className="col" lg="1">
            <IoMdAddCircleOutline
              className="row-item-add-icon"
              size="1.3em"
              onClick={() => {
                var element = document.getElementById(
                  "goaltasklist-" + props.projectItem.id
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
            <span className="row-item-id">{props.projectItem.id}</span>
          </Col>
          <Col className="col" lg="5">
            <span className="row-item-title">{props.projectItem.title}</span>
          </Col>
          <Col className="col" lg="2" />
          <Col className="col" lg="1" />
          <Col className="col center-align" lg="2" />
        </Row>
      </Container>
    </div>
  );
};

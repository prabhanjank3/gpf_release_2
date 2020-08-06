import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./TaskListHeading.css";
export default props => {
  return (
    <div className="task-item-heading-row">
      <Container fluid>
        <Row>
          <Col className="col heading-col" lg="1">
            RANK
          </Col>
          <Col className="col heading-col" lg="1">
            ID
          </Col>
          <Col className="col heading-col" lg="3">
            TITLE
          </Col>
          <Col className="col heading-col" lg="2">
            STATE
          </Col>
          <Col className="col heading-col" lg="2">
            CLOSEDATE
          </Col>
          <Col className="col heading-col" lg="1">
            PTS
          </Col>
          <Col className="col heading-col" lg="1">
            BLOCKED
          </Col>
          <Col className="col heading-col" lg="1">
            DEFECT
          </Col>
        </Row>
      </Container>
    </div>
  );
};

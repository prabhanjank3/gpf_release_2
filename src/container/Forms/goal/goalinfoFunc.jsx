import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
import "./goalinfo.css";

import DescriptionInput from "../../../component/FormComponent/description-input";
import ObjectiveInput from "../../../component/FormComponent/objective-input";
import CommentsInput from "../../../component/FormComponent/comments-input";
import CloseDateInput from "../../../component/FormComponent/closedate-input";
import CreatedOnInput from "../../../component/FormComponent/createdon-input";
import ItemHeadingUpdate from "../../../component/FormComponent/ItemHeadingUpdate";
import ButtonPanel from "../../../component/FormComponent/save-cancel-btn";
import StartDateInput from "../../../component/FormComponent/startdate-input";

import { formik, useFormik } from "formik";
import { Link } from "react-router-dom";

export default (props) => {
  console.log(props);
  const formik = useFormik({
    initialValues: {
      id: props.goalData[props.match.params.goalId].id,
      description: props.goalData[props.match.params.goalId].description,
      title: props.goalData[props.match.params.goalId].title,

      closeDate: props.goalData[props.match.params.goalId].closeDate,
      createdOn: props.goalData[props.match.params.goalId].createdOn,

      startDate: props.goalData[props.match.params.goalId].hasOwnProperty(
        "startDate"
      )
        ? props.goalData[props.match.params.goalId].startDate
        : new Date(),
      objective: props.goalData[props.match.params.goalId].hasOwnProperty(
        "objective"
      )
        ? props.goalData[props.match.params.goalId].objective
        : "",
      comments: props.goalData[props.match.params.goalId].hasOwnProperty(
        "comments"
      )
        ? props.goalData[props.match.params.goalId].comments
        : ""
    },
    onSubmit: (values) => {
      props.updateGoal(formik.values.id, formik.values);
    }
  });
  return (
    <Container className="form-container">
      <Link to="/">Go To Dashboard</Link>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col lg="8">
            <ItemHeadingUpdate
              id={formik.values.id}
              title={formik.values.title}
              onChange={formik.handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="8">
            <div className="details-heading">Details</div>
            <DescriptionInput
              onChange={formik.handleChange}
              description={formik.values.description}
            />
            <ObjectiveInput
              onChange={formik.handleChange}
              objective={formik.values.objective}
            />
            <CommentsInput
              onChange={formik.handleChange}
              comments={formik.values.comments}
            />
          </Col>
          <Col lg="4" className="small-info-column">
            <CreatedOnInput createdOn={new Date(formik.values.createdOn)} />
            <StartDateInput
              startDate={formik.values.startDate}
              onChange={formik.handleChange}
            />
            <CloseDateInput
              onChange={formik.handleChange}
              closeDate={new Date(formik.values.closeDate)}
            />
            <ButtonPanel />
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

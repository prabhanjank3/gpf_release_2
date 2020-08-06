import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
import "./taskinfo.css";

import DescriptionInput from "../../component/FormComponent/description-input";
import ObjectiveInput from "../../component/FormComponent/objective-input";
import CommentsInput from "../../component/FormComponent/comments-input";
import PtsInput from "../../component/FormComponent/PtsInput";
import CloseDateInput from "../../component/FormComponent/closedate-input";
import CreatedOnInput from "../../component/FormComponent/createdon-input";
import StateInput from "../../component/FormComponent/state-input";
import ItemHeadingUpdate from "../../component/FormComponent/ItemHeadingUpdate";
import ButtonPanel from "../../component/FormComponent/save-cancel-btn";
import StartDateInput from "../../component/FormComponent/startdate-input";

import { formik, useFormik } from "formik";
import { Link } from "react-router-dom";

export default (props) => {
  const formik = useFormik({
    initialValues: {
      id: props.taskData[props.match.params.taskId].id,
      description: props.taskData[props.match.params.taskId].description,
      title: props.taskData[props.match.params.taskId].title,
      Pts: props.taskData[props.match.params.taskId].Pts,
      closeDate: props.taskData[props.match.params.taskId].closeDate,
      createdOn: props.taskData[props.match.params.taskId].createdOn,
      state: props.taskData[props.match.params.taskId].state,
      startDate: props.taskData[props.match.params.taskId].hasOwnProperty(
        "startDate"
      )
        ? props.taskData[props.match.params.taskId].startDate
        : new Date(),
      objective: props.taskData[props.match.params.taskId].hasOwnProperty(
        "objective"
      )
        ? props.taskData[props.match.params.taskId].objective
        : "",
      comments: props.taskData[props.match.params.taskId].comments
    },
    onSubmit: (values) => {
      props.updateTask(formik.values.id, formik.values);
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
            <PtsInput onChange={formik.handleChange} Pts={formik.values.Pts} />
            <CreatedOnInput createdOn={new Date(formik.values.createdOn)} />
            <StateInput state={formik.values.state} />
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

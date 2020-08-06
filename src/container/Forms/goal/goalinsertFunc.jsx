import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
import "../taskinfo.css";

import DescriptionInput from "../../../component/FormComponent/description-input";
import ObjectiveInput from "../../../component/FormComponent/objective-input";
import CommentsInput from "../../../component/FormComponent/comments-input";
import CloseDateInput from "../../../component/FormComponent/closedate-input";
import CreatedOnInput from "../../../component/FormComponent/createdon-input";
import ItemHeading from "../../../component/FormComponent/ItemHeading";
import ButtonPanel from "../../../component/FormComponent/save-cancel-btn";
import StartDateInput from "../../../component/FormComponent/startdate-input";
import ProjectDropdown from "../../../component/FormComponent/project-dropdown";
import { formik, useFormik } from "formik";
import { Link } from "react-router-dom";

export default props => {
  console.log(props);
  const formik = useFormik({
    initialValues: {
      description: "",
      title: "",
      closeDate: new Date(),
      createdOn: new Date(),
      startDate: new Date(),
      objective: "",
      projectId: Object.keys(props.projectData)[0]
    },
    onSubmit: values => {
      props.insertGoal(formik.values);
    }
  });
  return (
    <Container className="form-container">
      <Link to="/">Go To Dashboard</Link>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col lg="8">
            <ItemHeading
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
            <CommentsInput />
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
            <ProjectDropdown
              projectData={props.projectData}
              handleChange={formik.handleChange}
              value={formik.values.goalValue}
              insertTask={props.insertTask}
            />
            <ButtonPanel />
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

import React from "react";
import "./login.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Button, FormControl } from "react-bootstrap";
export default (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      props.handleSubmit(values);
    }
  });
  return (
    <Container className="login-form-container">
      <Form onSubmit={formik.handleSubmit}>
        <div auth-form-container>
          <FormControl
            name="email"
            type="email"
            placeholder="email"
            onChange={formik.handleChange}
            className="auth-input-field"
          />
        </div>
        <div>
          <FormControl
            name="password"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            className="auth-input-field"
          />
        </div>
        <div>
          <Button type="submit" className="auth-submit-btn">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
};

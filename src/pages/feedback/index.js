import React from "react";
import { Formik } from "formik";
import Layout from "../layout";
import { Button, Card, Container, Form } from "react-bootstrap";

const Feedback = () => (
  <div>
    <Layout>
      <Container>
        <Formik
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 4000);
          }}
          initialValues={{ name: "", email: "", contactNo: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.contactNo) {
              errors.contactNo = "Required";
            }
            if (!values.message) {
              errors.message = "Required";
            }
            return errors;
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <h1>Feedback Form</h1>
              <div className="mb-2">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  className={errors.name ? "is-invalid" : ""}
                  onChange={handleChange}
                  value={values.name}
                />
                <div class="invalid-feedback">
                  {errors.name && touched.name && errors.name}
                </div>
              </div>
              <div className="mb-2">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  className={errors.email ? "is-invalid" : ""}
                  onChange={handleChange}
                  value={values.email}
                />
                <div class="invalid-feedback">
                  {errors.email && touched.email && errors.email}
                </div>
              </div>

              <div className="mb-2">
                <Form.Label>Contact No.:</Form.Label>
                <Form.Control
                  type="number"
                  name="contactNo"
                  placeholder="+91"
                  className={errors.contactNo ? "is-invalid" : ""}
                  onChange={handleChange}
                  value={values.contactNo}
                />
                <div class="invalid-feedback">
                  {errors.contactNo && touched.contactNo && errors.contactNo}
                </div>
              </div>

              <div className="mb-2">
                
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={3}
                  className={errors.message ? "is-invalid" : ""}
                  onChange={handleChange}
                  value={values.message}
                />
                <div class="invalid-feedback">
                  {errors.message && touched.message && errors.message}
                </div>
              </div>

              <Card.Footer style={{ textAlign: "right" }}>
                <Button type="submit" className="mx-2">
                  Submit
                </Button>
                <Button type="button" variant="danger">
                  Cancel
                </Button>
              </Card.Footer>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  </div>
);

export default Feedback;

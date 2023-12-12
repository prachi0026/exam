import { Button, Card, Form } from "react-bootstrap";
import Layout from "../pages/layout";
import * as Yup from "yup";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

const Register = () => {
  const isLoggedIn = localStorage.getItem('token');

  const navigate = useNavigate();
  useEffect(()=>{
    if(!!isLoggedIn){
      navigate('/');
    }
  },[])
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      gender: "",
      hobbies: "",
      password: "",
      c_password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required().max(30),
      email: Yup.string().required().email(),
      gender: Yup.string().required('Please Select at Least One Option'),
      hobbies: Yup.string().required(),
      password: Yup.string().required().min(6),
      c_password: Yup.string()
        .required()
        .oneOf(
          [Yup.ref("password"), null],
          'Must match "password" field value'
        ),
    }),
    onSubmit: function (values) {
      console.log(values);
      setIsLoading(true);
      axios
      .post("https://api.darwinstech.com/register", values, {
          Headers: {
            Accept: "application/json",
          },
        })
        .then(function (resp) {
          console.log(resp.data.data.token);
          localStorage.setItem("token", "Bearer " + resp.data.data.token);
          navigate("/login");
          setIsLoading(false);
        })
        .catch(function (err) {
          setIsLoading(false);
          console.log(err);
        });
    },
  });
  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <Card className="my-5">
          <Card.Header className="bg-primary fw-bold text-white">
            Register New User
          </Card.Header>
          <Card.Body>
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <Form.Control
                type="text" 
                name="name"
                className={formik.errors.name ? "is-invalid" : ""}
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Enter Name"
              />
              {formik.touched.name && formik.errors.name ? (
                <span className="invalid-feedback">{formik.errors.name}</span>
              ) : null}
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <Form.Control
                type="email"
                name="email"
                className={formik.errors.email ? "is-invalid" : ""}
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter email"
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="invalid-feedback">{formik.errors.email}</span>
              ) : null}
            </div>

            <div className="mb-2">
              <label htmlFor="name" className="from-label" style={{marginRight: 10}}>
                Gender
              </label>
              <div className="mb-3" style={{display:'inline'}}>
                <Form.Check
                inline
                onChange={formik.handleChange}
                name="gender"
                className={formik.errors.gender ? "is-invalid" : ""}
                value="male"
                label="Male"
                type="radio"
                id="m"
                />
                 <Form.Check
                inline
                onChange={formik.handleChange}
                className={formik.errors.gender ? "is-invalid" : ""}
                value="female"
                name="gender"
                label="Female"
                type="radio"
                id="f"
                />
                 {formik.touched.gender && formik.errors.gender ? (
                <span className="invalid-feedback">{formik.errors.gender}</span>
              ) : null}
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="name" className="from-label" style={{marginRight: 10}}>
                Hobbies
              </label>
              <div className="mb-3">
                <Form.Check
                onChange={formik.handleChange}
                name="hobbies"
                className={formik.errors.hobbies ? "is-invalid" : ""}
                value={formik.values.hobbies}
                label="Reading"
                type="checkbox"
                id="r"
                />
                <Form.Check
                onChange={formik.handleChange}
                name="hobbies"
                className={formik.errors.hobbies ? "is-invalid" : ""}
                value={formik.values.hobbies}
                label="Dancing"
                type="checkbox"
                id="d"
                />
                <Form.Check
                onChange={formik.handleChange}
                name="hobbies"
                className={formik.errors.hobbies ? "is-invalid" : ""}
                value={formik.values.hobbies}
                label="Singing"
                type="checkbox"
                id="s"
                />
                 {formik.touched.hobbies && formik.errors.hobbies ? (
                <span className="invalid-feedback">{formik.errors.hobbies}</span>
              ) : null}
                </div>
              </div>

            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <Form.Control
                type="password"
                name="password"
                className={formik.errors.password ? "is-invalid" : ""}
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Enter password"
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="invalid-feedback">
                  {formik.errors.password}
                </span>
              ) : null}
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Confirm Password:
              </label>
              <Form.Control
                type="password"
                name="c_password"
                className={formik.errors.c_password ? "is-invalid" : ""}
                onChange={formik.handleChange}
                value={formik.values.c_password}
                placeholder="Enter confirm password"
              />
              {formik.touched.c_password && formik.errors.c_password ? (
                <span className="invalid-feedback">
                  {formik.errors.c_password}
                </span>
              ) : null}
            </div>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
          <Button type="submit" className="mx-2" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner animation="grow" size="sm" />
                  <b> Loading...</b>
                </>
              ) : (
                "Register"
              )}
            </Button>
            <Button type="button" variant="danger">
              Cancel
            </Button>
          </Card.Footer>
        </Card>
      </form>
    </Layout>
  );
};

export default Register;

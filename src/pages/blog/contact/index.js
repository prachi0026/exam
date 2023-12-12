import Layout from "../../layout";
import { Form } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <Layout>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Phone No.:-</Form.Label>
              <Form.Control type="number" placeholder="+91" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
      </Layout>
    </>
  );
};
export default Contact;

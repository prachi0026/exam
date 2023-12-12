import { Button, Card, CardBody, Form } from "react-bootstrap";
import Layout from "../pages/layout";
import { useState } from "react";
import Hobbies from "../pages/checkbox";


const Register = () => {
  const [fields, setFields] = useState({});
  const [items, setItems] = useState("");
  const [selectedOption,setSelectedOption] = useState([]);
  let item = null;
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });

  // const onValueChange = (e) =>{
  //     setSelectedOption([...selectedOption])
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FORM VALUES", fields);
    let a = [];
    for (let key in fields) {
      a.push(
        <li>
          {key.toUpperCase().replace("_", " ")} : {fields[key]}
        </li>
      );
    }
    setItems(a);
  };

  return (
    <Layout>
      <fieldset>
        <legend>Your Details</legend>
        <ul>{items}</ul>
      </fieldset>
      <Form onSubmit={handleSubmit}>
        <Card className="my-5">
          <Card.Header className="bg-primary fw-bold text-white">
            Register New User
          </Card.Header>
          <CardBody>

          <Hobbies/>
            <div className="mb-2">
              <label htmlFor="name" className="from-label">
                Name:
              </label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="name"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="name" className="from-label">
                Email:
              </label>
              <Form.Control
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="Enter Email"
              />
            </div>
            

            <div className="mb-2">
              <label htmlFor="name" className="from-label">
              Gender:
              </label>
              <label>
                <input
                  type="radio"
                  value="Male"
                  name="Gender"
                  onChange={handleChange}
                  // Checking this radio button if the selected option is "Male"
                  // checked={selectedOption === "Male"}
                  // onChange={onValueChange}
                />
                Male
                <input
                  type="radio"
                  value="Male"
                  name="Gender"
                  onChange={handleChange}
                  // Checking this radio button if the selected option is "Male"
                  // checked={selectedOption === "Male"}
                  // onChange={onValueChange}
                />
                Female
                <input
                  type="radio"
                  value="Male"
                  name="Gender"
                  onChange={handleChange}
                  // Checking this radio button if the selected option is "Male"
                  // checked={selectedOption === "Male"}
                  // onChange={onValueChange}
                />
                Others
              </label>
            </div>
            <div className="mb-2">
              <label htmlFor="name" className="from-label">
              Hobbies:
              </label>
            <Form.Check
            inline
            label="Reading"
            onChange={handleChange}
            name="Hobbies"
            />
            <Form.Check
            inline
            label="Singing"
            onChange={handleChange}
            name="Hobbies"
            />
            <Form.Check
            inline
            label="Dancing"
            onChange={handleChange}
            name="Hobbies"
            />
          </div>

            <div className="mb-2">
              <label htmlFor="name" className="from-label">
              Country:
              </label>
            <Form.Select aria-label="Default select example">
              <option>Select Country</option>
              <option value="1">India</option>  
              <option value="2">U.S.A.</option>
              <option value="3">America</option>
              <option value="3">Chaina</option>
              <option value="3">Japan</option>
            </Form.Select>
            </div>

            <div className="mb-2">
              <label htmlFor="contact" className="from-label">
                Contact No.:
              </label>
              <Form.Control
                type="number"
                onChange={handleChange}
                name="number"
                placeholder="+91-"
              />
            </div>

            <div className="mb-2">
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="Address"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </div>

            <div className="mb-2">
              <label htmlFor="name" className="from-label">
                Password:
              </label>
              <Form.Control
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="name" className="from-label">
                Confirm Password:
              </label>
              <Form.Control
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Enter Confirm Password"
              />
            </div>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                onChange={handleChange}
                name=" ChooseFile"
              />
            </Form.Group>
          </CardBody>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button type="submit" className="mx-2">
              Register
            </Button>
            <Button type="button" variant="danger">
              Cancel
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </Layout>
  );
};
};
export default Register;

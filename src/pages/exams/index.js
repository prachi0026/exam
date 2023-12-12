import axios from "axios";
import { Button, Card, CardBody, Col, Row } from "react-bootstrap";
import Layout from "../layout";
import { useEffect, useState } from "react";

const Exams = () => {
  const [exams, setExams] = useState([]);
  const getExams = () => {
    axios
      .get("https://api.darwinstech.com/api/exams", {
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(function (response) {
        console.log(response);
        setExams(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  
  useEffect(function () {
    getExams();
  }, []);
  return (
    <Layout>
      <Row className="my-5">
        {exams.map(function (value) {
          return (
            <Col sm={3}>
              <Card>
                <CardBody>
                  <Card.Title>{value.name.slice(0, 27)}...</Card.Title>
                  <Card.Text>{value.description.slice(0, 80)}...</Card.Text>
                </CardBody>
                <Card.Footer>
                  <Button className="w-100" variant="success">
                    Start Exam
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
};

export default Exams;

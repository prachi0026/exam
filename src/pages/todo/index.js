import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  InputGroup,
} from "react-bootstrap";
import Footer from "../layout/footer";
import Header from "../layout/header";
import { BsFillPlusCircleFill, BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";
import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  };

  const removeTask = (deleteValue) => {
    if (window.confirm("Are you sure you want to remove?")) {
      let newList = taskList.filter((val, key) => {
        return deleteValue !== val;
      });
      setTaskList(newList);
    }
  };

  return (
    <>
      <Header />
      <div
        className="min-vh-100 bg-light d-flex"
        style={{ alignItems: "center" }}
      >
        <Container>
          <Card>
            <Card.Header>
              Add Your Todo 
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Form.Control
                    name="task"
                    onChange={handleChange}
                    placeholder="Enter Task"
                    value={task}
                  />
                  <Button type="submit">
                    ADD <BsFillPlusCircleFill size={20} />
                  </Button>
                </InputGroup>
              </Form>
            </Card.Body>
          </Card>
          {taskList.map((value, key) => {
            return (
              <Alert
                key={key}
                variant="success"
                className="mt-2 d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <strong>
                  {key + 1}. {value}
                </strong>
                <div>
                  <Button
                    variant="danger"
                    onClick={function () {
                      removeTask(value);
                    }}
                  >
                    <BsFillTrash3Fill />
                  </Button>
                  <Button>
                    <BsPencilSquare/>
                    </Button>
                </div>
              </Alert>
            );
          })}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Todo;

import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const AddList = () => {
  const [listItem, setListItem] = useState(["Egg"]);
  const [text, setText] = useState("");

  const handleOnClick = () => {
    setListItem([...listItem, text]);
    setText("");
  };
  return (
    <Container>
      <Alert variant="success">
        <h6>
          <Row className="justify-content-md-center">
            Item Added To The List
          </Row>
        </h6>
      </Alert>
      <div className="d-flex justify-content-center">
        <h3>List Grocery Today</h3>
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            <h1>React List grocery</h1>
          </Form.Label>
          <Row>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Add grocery...."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button
                variant="primary"
                type="button"
                size="lg"
                onClick={handleOnClick}
              >
                Submit
              </Button>
            </InputGroup>
          </Row>
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Note content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listItem &&
            listItem.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td>
                    <Button
                      variant="outline-warning"
                      style={{ marginRight: "10px" }}
                    >
                      <FaRegEdit />
                    </Button>
                    <Button variant="outline-danger">
                      <FaTrashAlt />
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};
export default AddList;

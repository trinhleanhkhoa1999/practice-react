import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

const AddNotes = () => {
  const [listItem, setListItem] = useState(["khoa"]);
  console.log("check listItem: ", listItem);
  const [text, setText] = useState("");

  const handleOnClick = () => {
    setListItem([...listItem, text]);
    setText("");
  };
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            <h1>To-Do List</h1>
          </Form.Label>
          <Row>
            <Col md={10}>
              <Form.Control
                type="text"
                placeholder="Add note...."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Col>
            <Col md={2}>
              <div className="d-grid gap-2">
                <Button variant="primary" type="button" onClick={handleOnClick}>
                  Add
                </Button>
              </div>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Note content</th>
          </tr>
        </thead>
        <tbody>
          {listItem &&
            listItem.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};
export default AddNotes;

import React from "react";
import { Card, Button, Row, Container, Col } from "react-bootstrap";
const NoteCards = ({ listNotes }) => {
  return (
    <Container className="mt-5">
      <Row>
        {listNotes &&
          listNotes.map((item, index) => {
            return (
              <Col md={3} className="mb-5" key={`list-note-${index}`}>
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.note}</Card.Text>
                    <div className="d-grid gap-2">
                      <Button variant="danger" size="lg">
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};
export default NoteCards;

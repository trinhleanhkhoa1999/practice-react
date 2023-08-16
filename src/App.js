import React from "react";
import BillingAddress from "./components/BillingAddress/BillingAddress";
import { Container, Row, Col } from "react-bootstrap";
import YourCart from "./components/BillingAddress/YourCart";
import Birthday from "./components/Birthdays";
import ListFeature from "./components/ListFeature";
// import AddNotes from "./components/AddNotes";
// import AddList from "./components/AddList";

function App() {
  return (
    <>
      {/* <AddNotes />
      <AddList/> */}
      <Container>
        <Row>
          <Col md={8}>
            <BillingAddress />
          </Col>
          <Col md={4}>
            <YourCart />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container style={{ background: "#f189b1" }}>
        <Row>
          <Col md={6} className="mx-auto my-5">
            <Birthday />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <ListFeature />
      </Container>
    </>
  );
}

export default App;

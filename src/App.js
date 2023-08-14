import React, { useState } from "react";
import BillingAddress from "./components/BillingAddress/BillingAddress";
import { Container, Row, Col } from "react-bootstrap";
import YourCart from "./components/BillingAddress/YourCart";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

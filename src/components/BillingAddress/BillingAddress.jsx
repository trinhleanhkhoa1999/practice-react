import { Row, Col, Form, InputGroup } from "react-bootstrap";
const BillingAddress = () => {
  return (
    <>
      <Form.Label>
        <h1>Billing Address</h1>
      </Form.Label>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>
              <h5>First name</h5>
            </Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>
              <h5>Last name</h5>
            </Form.Label>
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>
              <h5>User name</h5>
            </Form.Label>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control type="text" placeholder="User name" />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              <h5>Email (Optional)</h5>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              <h5>Adress</h5>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter adress" />
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};
export default BillingAddress;

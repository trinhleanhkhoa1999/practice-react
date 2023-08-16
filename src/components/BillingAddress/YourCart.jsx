import {
  Form,
  Button,
  InputGroup,
  ListGroup,
  Badge,
  Stack,
  Row,
} from "react-bootstrap";
const YourCart = () => {
  const listCart = [
    { name: "Product name", description: "Brief descriptin", price: "$12" },
    { name: "Second name", description: "Brief descriptin", price: "$15" },
    { name: "Third name", description: "Brief descriptin", price: "$11" },
  ];
  return (
    <>
      <Row>
        <Stack direction="horizontal">
          <div className="p-2">
            <h1 style={{ color: "#0d6efd" }}>Your Cart</h1>
          </div>
          <div className="p-2 ms-auto">
            <h1>
              <Badge bg="primary" style={{ borderRadius: "50%" }}>
                9
              </Badge>
            </h1>
          </div>
        </Stack>
        <ListGroup as="ol" className="mt-4">
          {listCart &&
            listCart.map((item, index) => {
              return (
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  key={`Cart ${index}`}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.name}</div>
                    {item.description}
                  </div>
                  <div>{item.price}</div>
                </ListGroup.Item>
              );
            })}
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <h4>Total</h4>
              </div>
            </div>
            <div>
              <h4>$80</h4>
            </div>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup className="mt-3">
          <ListGroup.Item>
            <InputGroup>
              <Form.Control type="text" placeholder="Promo Code...." />
              <Button variant="primary" type="button" size="lg">
                Reedom
              </Button>
            </InputGroup>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </>
  );
};
export default YourCart;

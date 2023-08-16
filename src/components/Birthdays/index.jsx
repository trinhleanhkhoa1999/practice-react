import { ListGroup, Row, Col, Stack, Image, Button } from "react-bootstrap";
import avatar from "../../assets/images/avatar.png";
const Birthday = () => {
  const listBirthday = [
    { img: avatar, name: "Khoa Trịnh", age: "20" },
    { img: avatar, name: "Khoa Trịnh", age: "44" },
    { img: avatar, name: "Khoa Trịnh", age: "33" },
    { img: avatar, name: "Khoa Trịnh", age: "12" },
  ];
  return (
    <ListGroup>
      <ListGroup.Item>
        <Row className="p-5">
          <h1 className="mb-4">Birthdays Today</h1>
          <hr />
          <Stack>
            {listBirthday &&
              listBirthday.map((item, index) => {
                return (
                  <div
                    className="d-flex align-items-center mb-4"
                    key={`Birthday ${index}`}
                  >
                    <Col md={3} className="p-2">
                      <Image
                        src={item.img}
                        rounded
                        style={{ maxWidth: "100%" }}
                      />
                    </Col>
                    <Col className="p-2">
                      <h2>{item.name}</h2>
                      <h5>{`${item.age} years`}</h5>
                    </Col>
                  </div>
                );
              })}
          </Stack>
          <Button variant="danger" type="button" size="lg">
            <h4>Show more</h4>
          </Button>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  );
};
export default Birthday;

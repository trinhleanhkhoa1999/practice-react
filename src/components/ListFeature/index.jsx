import { Row, Col, Card } from "react-bootstrap";
import {
  FaFoursquare,
  FaChevronRight,
  FaCircleUser,
  FaSliders,
} from "react-icons/fa6";
const ListFeature = () => {
  const iconStyle = {
    width: "50px",
    height: "50px",
    background: "#3a81fd",
    marginBottom: "10px",
    borderRadius: "5px",
    fontSize: "30px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const listFeature = [
    {
      icon: <FaFoursquare />,
      title: "Featured Title",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Undebeatae, assumenda odio eum illum ex quidem, excepturi sed quodquam sint tempore a id tenetur facere sit possimus aut nam?",
    },
    {
      icon: <FaCircleUser />,
      title: "Featured Title",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Undebeatae, assumenda odio eum illum ex quidem, excepturi sed quodquam sint tempore a id tenetur facere sit possimus aut nam?",
    },
    {
      icon: <FaSliders />,
      title: "Featured Title",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Undebeatae, assumenda odio eum illum ex quidem, excepturi sed quodquam sint tempore a id tenetur facere sit possimus aut nam?",
    },
  ];
  return (
    <>
      <Row>
        {listFeature &&
          listFeature.map((item, index) => {
            return (
              <Col
                md={4}
                className="mx-auto my-5"
                key={`list-feature-${index}`}
              >
                <Card>
                  <Card.Body>
                    <div style={iconStyle}>{item.icon}</div>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.content}</Card.Text>
                    <Card.Link href="#">
                      <h6>
                        Call to action <FaChevronRight />
                      </h6>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
};
export default ListFeature;

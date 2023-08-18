import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Note from "../../components/Note";
import { Container, Row, Col } from "react-bootstrap";

const NotePage = () => {
  return (
    <Container>
      <Header />
      <Note />
      <Footer />
    </Container>
  );
};
export default NotePage;

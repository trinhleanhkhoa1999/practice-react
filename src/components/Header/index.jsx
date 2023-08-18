import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <Navbar style={{ background: "#f5b016" }}>
      <Container>
        <Navbar.Brand href="#home">
          <h2 style={{ color: "#fff", fontFamily: "cursive" }}>Keeper</h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;

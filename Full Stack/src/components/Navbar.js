import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import "../css/Navbar.css";
import geoface from "../components/welcomePage/images/geoface.png"
import { useNavigate } from "react-router-dom";

function HomeNavbar() {
  const navigate = useNavigate()

  return (
    <Container>
      <Navbar
        className="m-0"
        bg="light"
        expand="lg"
        style={{ marginTop: "10px", margin: "0" }}
      >
        <Container className="c-nav">
          <div className="headerImgCtl" onClick={() => {navigate("/")}}>
          <img src={geoface} width="45" href="/"/>
          <Navbar.Brand
            style={{
              color: "#76C6FC",
              fontSize: "2rem",
              fontWeight: "bold",
              margin: "0",
            }}
          >
            FaceIT
          </Navbar.Brand>
          </div>

          <Button className="contact-btn shadow-xl" variant="secondary">Contact</Button>
        </Container>
      </Navbar>
    </Container>
  );
}

export default HomeNavbar;

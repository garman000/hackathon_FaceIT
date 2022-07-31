import React from "react";
import "./welcomePage.css";
import face from "./images/face.jpg";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from "../Form";
import faceage from "./images/faceage.mp4";
import STEVEN from "./images/STEVEN.gif"

const WelcomePage = () => {
    const navigate = useNavigate()

    const userForm = () => {
        navigate("/form")
    } 
  return (
      <Container>
    <div className="pageWrapper">
      <div className="welcomeWrapper">
        <h1>FaceIT</h1>
        <h3>We kickstart your new healthier lifestyle</h3>
        <button onClick={userForm} className="welcomeBtn">Come and See</button>
      </div>
        <div className="welcomeFace">
          {/* <video className="face" muted loop autoPlay={true}>
            <source src={faceage} type="video/mp4" />
          </video> */}

          <img src={STEVEN} alt="ste"/>
        <div className="backgroundStyle"></div>
        </div>
    </div>
    </Container>
  );
};

export default WelcomePage;

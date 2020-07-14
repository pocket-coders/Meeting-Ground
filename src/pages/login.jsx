/*login.jsx*/
import React from "react";

//You have to use the link component to link between you pages
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
//$ npm install --save react react-dom
//$ npm install --save react-bootstrap

//Functional Component
const LoginPage = () => {
  return (
    <div>
      <img id="logo" src="./img/meetingGroundLogo.png" />
      <h3>Welcome to the React Router Tutorial</h3>
      <small>Main Page</small>
      <Link to="/home">
        <Button renderAs="button">
          <span>Login</span>
        </Button>
      </Link>
    </div>
  );
};

export default LoginPage;

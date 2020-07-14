/*login.jsx*/
import React from "react";
import GoogleLogin from "react-google-login";
// npm install react-google-login

//You have to use the link component to link between you pages
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
//$ npm install --save react react-dom
//$ npm install --save react-bootstrap

//Functional Component
const LoginPage = () => {
  function responseGoogle(response) {
    console.log(response);
    var profile = response.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    window.alert("You are logged in as " + profile.getName() + "!!");
    document.getElementById("continue").href = "http://localhost:3000/home";
  }

  return (
    <div>
      <img
        id="logo"
        src="./img/meetingGroundLogo.png"
        alt="Meeting Ground Logo"
      />
      <h3>Welcome to the React Router Tutorial</h3>
      <small>Main Page</small>
      <div>
        <GoogleLogin
          clientId="272589905349-scqfilok0ucok40j6h6eo9pcsp7bhadd.apps.googleusercontent.com"
          buttonText="Login"
          onFailure={() => <Link to="/login"></Link>}
          onSuccess={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <p>
          <a id="continue" href="http://localhost:3000/login">
            continue to Meeting Ground
          </a>
        </p>
        {/* <Link to={next}>
          <Button renderAs="button">
            <span>Click to continue</span>
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default LoginPage;

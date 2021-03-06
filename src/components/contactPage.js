import React from "react";
import "../App.css";
import git from "../images/git.png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.svg";

function ContactPage() {
  return (
    <div class="contactContainer">
      <div class="gitContact">
        <a href="https://github.com/stevecarofano" target="_blank" rel="noopener noreferrer">
          <img src={git} alt=""></img>
        </a>
      </div>
      <div class="linkedIn">
        <a href="https://www.linkedin.com/in/steve-carofano-jr-6708a6ba/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt=""></img>
        </a>
      </div>
      <div class="gmail">
        <a href="mailto: stevencarofano@gmail.com">
          <img src={gmail} alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;

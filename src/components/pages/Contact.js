import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div>
      <h1> Education </h1>
      <p>
        I attended University of Richmond with a bootcamp to enhance my coding skills.
      </p>
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Display Skills
      </Link>{" "}
      
      <Route exact path={`${props.match.url}/learn`} component={Learn} />



      


      <div id="footer">
      <div class="container text-center">
        <div class="fnav">
          <p>
            Alex Phan Portfolio: Software Development
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;

import React from "react";
import "./style.css";

function ContactCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong> 
          </li>
          <li>
            <h7> {props.actual}</h7>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default ContactCard;

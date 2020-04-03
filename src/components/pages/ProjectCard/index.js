import React from "react";
import "./style.css";



// keep track of image which is src
// name  is reop name

// make an href property
function ProjectCard(props) {
  return (
    
    <div className="classHere">
      
      <figure>

      
      <div className="content">
        <ul>
          <li>
          <a href = {props.href}>
            <strong>Name:</strong> {props.name}
            </a>
          </li>
          
        </ul>
      </div>
      </figure>
      
    </div>

    
  );
}

export default ProjectCard;

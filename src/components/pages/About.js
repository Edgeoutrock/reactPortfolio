import React, {Component} from "react";

import ProjectCard from "../pages/ProjectCard";
import Wrapper from "../pages/Wrapper";
import projects from "./projects.json";

class About extends Component {
  
  state = {
    projects
  }
  render(){
  
  
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
       I have done work to solve problems. For example, the password generator and user directory application can be used to assign passwords to employees.

      </p>
      <p>
        You can click on the links to display the actual application.
      </p>
      
      
      <Wrapper>
        
        {this.state.projects.map(project => (
          <ProjectCard
           
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            href = {project.href}
            
          />
        ))}


      </Wrapper>
      
      
     









  
                
                
                        
                        
                        

        






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
}

export default About;

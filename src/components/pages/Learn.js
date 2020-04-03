

import React, { Component } from "react";

import SkillCard from "../pages/SkillCard";
import Wrapper from "../pages/Wrapper";
import skills from "./skills.json";

class Learn extends Component {
  state = {

    skills
  }
  
  
  render(){
  
  
  return (
    <div>
      <h1 className="text-center">My Skills with code languages</h1>
      

      <Wrapper>
        
        {this.state.skills.map(skill => (
          <SkillCard
           
            id={skill.id}
            key={skill.id}
            name={skill.name}
            image={skill.image}
            
          />
        ))}
      </Wrapper>
      




      
      

       

       





      <div id="footer">
      
          <p>
            Alex Phan Portfolio: Software Development
          </p>
        
      </div>
    </div>
    
  );

  }
}

export default Learn;

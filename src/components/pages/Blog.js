import React, { Component } from "react";

import ContactCard from "../pages/ContactCard";
import Wrapper from "../pages/Wrapper";
import contact from "./contact.json";

class Blog extends Component {
  state = {


    contact
   }
 
 
 
 
  render(){
 
  return (
    <div>
      <h1>A place to contact me</h1>
      <p>
        I have links to further places where you can find some more of my work or information about me.
      </p>


      <Wrapper>
        
        {this.state.contact.map(contact => (
          <ContactCard
           
            id={contact.id}
            key={contact.id}
            name={contact.name}
            image={contact.image}
            actual = {contact.actual}
            
            
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

export default Blog;

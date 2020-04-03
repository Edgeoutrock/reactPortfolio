import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";



import SkillCard from "./components/pages/SkillCard";
import Wrapper from "./components/pages/Wrapper";



import { render } from "@testing-library/react";


class App extends Component  {
  
  
  render(){



  return (
    <Router>
      <div> 
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />

      
      </div>
    </Router>
  );

  }
}

export default App;

// when wrapping entire application with parent div there is another way, use a fragment
// fragment = <> </> for closing and beginnning


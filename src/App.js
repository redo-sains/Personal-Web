import React from "react";
import Home from "./component/body/Home";
import AboutPages from"./component/body/About";
import Contact from './component/body/Contact';

import Skills from './component/body/Skills'
import Footer from "./component/footer/footer";
import Navbar from './component/header/navbar';
import "./component/FontawesomeIcons";
import {BrowserRouter as Routers, Route, Switch } from "react-router-dom";



class App extends React.Component {
  render(){
    return  (
      <Routers>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={AboutPages} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        <Footer />
      </Routers>
    )
  }
}

export default App;

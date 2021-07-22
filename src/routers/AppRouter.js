import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Navbar} from "../navbar/Navbar";
import Profile from "../components/Profile";
import { Category } from "../components/Category";
import { Contact } from "../components/Contact";

import { Newpaper } from "../components/Newpaper";
import { Aboutus } from "../components/Aboutus";



export default function App() {
    return (
      <Router>
        <div>
          <Navbar/>
  
          <Switch>
              <Route exact path="/newpaper" component={Newpaper}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/category" component={Category}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/aboutus" component={Aboutus}/>
          </Switch>
        </div>
      </Router>
    );
  }
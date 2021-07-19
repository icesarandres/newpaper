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
import Login from  '../components/login';


export default function App() {
    return (
      <Router>
        <div>
          <Navbar/>
   
          <Switch>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/category" component={Category}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/login" component={Login}/>
          </Switch>
         
        </div>
      </Router>
    );
  }
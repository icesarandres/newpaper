import React from "react";
import {Header} from '../containers/Header'
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







import Login from  '../components/login';
import register from '../components/register'
import {Footer} from '../footer/Footer'
import { Social } from "../components/Social";


export default function App() {
    return (
      
      <Router>
        <div>
      
          <Navbar/>
   
          <Switch>
              <Route exact path="/newpaper" component={Newpaper}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/social" component={Social}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/aboutus" component={Aboutus}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={register}/>
          </Switch>
         <Footer/>
        </div>
      </Router>
    );
  }
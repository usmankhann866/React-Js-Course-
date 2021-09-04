import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import { Component } from "react";
// Now to import MenuComponent from Components
import Menu from "./Components/MenuComponent"; 

class App extends Component{

  render(){
  
   return(
      <div> 
   
   <Navbar dark color="primary">
  <div className="container">
  <NavbarBrand href="/"> Musa Resturant </NavbarBrand>
  </div> 
   </Navbar>
   <Menu />
   </div>
   
  );
  }
}

export default App;

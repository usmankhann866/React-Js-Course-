import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import { Component } from "react";
// Now to import MenuComponent from Components
import Menu from "./Components/MenuComponent"; 
import { DISHES } from './Shared/dishes';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  
  render(){
  
   return(
      <div> 
   
   <Navbar dark color="primary">
  <div className="container">
  <NavbarBrand href="/"> Musa Resturant </NavbarBrand>
  </div> 
   </Navbar>
   <Menu dishes={this.state.dishes} />
   </div>
   
  );
  }
}

export default App;

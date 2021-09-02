import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import { Component } from "react";
import { div } from 'prelude-ls';

class App extends Component{

  render(){
  return(
    
    /* 1: JSX expression must have one Parent Element.
       so the best way to solve it by writing all the child elements in a single parent "div" element
    
      2: Every elements must have a closing because its JSX not HTML. For br img we will introduce closing
         like <br/> <img/> 
         
      3: We will write ClassName not Class for css classes because its JSX */    
    
   /* whenver i use the variable i use the curly braces "{}" which i aleardy imported */
  
   <div className="App"> 
   
   <Navbar dark color="primary">
  <div className="container">
  <NavbarBrand href="/"> Musa Resturant </NavbarBrand>
  </div> 
   </Navbar>
   </div>
   
  );
  }
}

export default App;

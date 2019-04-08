import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <header>
        <NavLink to="/"className="headerH1">Exotic Snackstore</NavLink>
        <img src="assets/candy2.jpg" alt=""/>
      </header>
    )
  }
}

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div> 
      
        <NavLink to="/"><button type="button" className="btn btn-secondary btn-sm" >Home</button></NavLink>
        &nbsp;
        <NavLink to="/chefs"><button type="button" className="btn btn-secondary btn-sm">Search by Chef</button></NavLink>
        &nbsp;
        <NavLink to="/new"><button type="button" className="btn btn-secondary btn-sm">New Recipe</button></NavLink>
       
        
    </div>
  );
}

export default NavBar;
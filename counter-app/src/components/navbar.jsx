import React, { Component } from 'react';



const NavBar=({totalCounters})=>{
    console.log("NavBar-render")
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a href="" className="navbar-brand" hre="#">
                Navbar
                <span className="badge badge-pill badge-secondary m-2">
                {totalCounters}
            </span>
            </a>
    
        </nav>
     );
    
}


export default NavBar;






















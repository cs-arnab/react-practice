import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class NavBar extends Component {
   render(){
       return(
           <div>
               <h1>Navbar</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/a">A : parameter work</Link></li>
                    <li><Link to="/b">B :normal</Link></li>
                    <li><Link to="/c">C : redirect work</Link></li>
                    <li><Link to="/e">E : this.props.history.replace/push function</Link></li>
                    <li><Link to="/nestedRouteing">nestedRoute</Link></li>
                </ul>
                <hr/>
           </div>
       )
   }
}
 
export default NavBar;











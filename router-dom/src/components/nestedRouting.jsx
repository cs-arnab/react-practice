import React from 'react';
import { Route } from 'react-router';
import A from "./a"
import B from "./b"
import {Link} from 'react-router-dom'

const NestedRoute=({match})=>{
    return(
        <div>
            <h1>nested routing</h1>
           <Link to="/a">A</Link><br/>
           <Link to="/b">B</Link>
        </div>
    )
}
export default NestedRoute;
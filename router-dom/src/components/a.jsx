import React, { Component } from 'react';
// import B from "./b"
import {Route} from 'react-router-dom'
// class A extends Component {
//    render(){
//        return(
//            <div>in a

               
//            </div>
           
//        )
//    }
// }
const A=({match})=>{
    return(
        <div>
            <h1>in A</h1>
            x:{match.params.x}<br/>
            y:{match.params.y}
        </div>
    )
}
 
export default A;











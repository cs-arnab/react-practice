import React, { Component } from "react";

// input: liked Boolean
//o/p : onClick



// class Like extends Component {
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.liked) classes += "-o";
//     return (
//       <i onClick={this.props.onClick} 
//       style={{cursor:"pointer"}}
//       className={classes} 
//       aria-hidden="true" />
//     );
//   }
// }


// we don't need class lets convert it in a stateless function component
const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    
    return (
      <i onClick={props.onClick} 
      style={{cursor:"pointer",
      
    }}
      className={classes} 
      aria-hidden="true" />
    );
}
 
export default Like;


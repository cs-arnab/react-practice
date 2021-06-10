import React, { Component } from 'react';
class E extends Component {
    handlePush=()=>{
        this.props.history.push('/b')
    }
    handleReplace=()=>{
        this.props.history.replace('/b')
    }

   render(){
       return(
           <div>
               <h3>click go to b ,back possible</h3>
               <button onClick={this.handlePush} className="btn btn-primary">go to B,push</button>
               <h3>click go to b , never back</h3>
               <button onClick={this.handleReplace} className="btn btn-success">go to B,replace</button>
               
           </div>
       )
   }
}
 
export default E;



// this is used in login page
// when a user login then never go back

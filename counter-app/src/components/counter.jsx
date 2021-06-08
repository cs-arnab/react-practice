import React, { Component } from 'react';
class Counter extends Component {
    state={
        value:this.props.counter.value   
    }
    styles={                    //this is a class where we write our style code
        fontSize:20,
        fontWeight:"bold"
    }
    // handleIncrement=()=>{
    //     this.setState({value:this.state.value + 1 });
    // };
    // handleDelete=()=>{
    //     this.setState({value:this.state.value - 1 });
    // }

    render() { 
        console.log("Counter-render")
        return ( 
            <div className="row">
                <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 

                </div>
                <div className="col">
                <button 
                    onClick={()=>this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2">
                    +
                </button>
                <button 
                    onClick={()=>this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2"
                    disabled={this.props.counter.value===0?"disable":""}>
                    -
                </button>

                <button 
                // we call onDelete from counters
                    onClick={()=>this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>

                </div>
                
                {/* <button 
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm m-2">
                    Increment1
                </button> */}
            </div>
         );
    }
    getBadgeClasses(){
        let classes="badge m-2 badge-";
        classes+=this.props.counter.value===0?"warning":"primary";
        return classes;
    }
    formatCount(){
        const {value}=this.props.counter;
        return value===0?'Zero':value;
    }

}
 
export default Counter;











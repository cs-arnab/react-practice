import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {


  render() {
    console.log("Counters-render")
    const {onReset,counters,onDelete,onIncrement,onDecrement}=this.props;
    return (
      <div>
            <button 
                    onClick={onReset}
                    className="btn btn-success btn-sm m-2" style={{width:"200px"}}>
                    Reset
            </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

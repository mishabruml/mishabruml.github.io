import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    //object destructuring
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onAddCounter
    } = this.props;

    return (
      <div>
        <button onClick={onAddCounter} className="btn btn-primary btn-sm m-2">
          Add counter
        </button>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset all counters
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} //key is a React internal attribute
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter} //pass counter object to child component
          />
        ))}
      </div>
    );
  }
}

export default Counters;

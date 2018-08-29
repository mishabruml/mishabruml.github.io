import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters.jsx";

class App extends Component {
  //data model
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  componentDidMount() {
    // perfect place for ajax calls to server, for example
    // this.SetState({stuffFromServer})
  }

  //state modifiers belong in class that contains state
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    if (counters[index].value > 0) counters[index].value--;

    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDeleteCounter = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleAddCounter = counterId => {
    const counters = [...this.state.counters];
    let maxid = 0;
    let maxObj;

    counters.map(function(obj) {
      if (obj.id > maxid) maxObj = obj;
    });

    counters.push({ id: maxObj.id + 1, value: 0 });
    this.setState({ counters });
  };

  getTotalItems = () => {
    return this.state.counters.reduce(function(prev, cur) {
      return prev + cur.value;
    }, 0);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          nCounters={this.state.counters.length}
          totalItems={this.getTotalItems()}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDeleteCounter}
            onAddCounter={this.handleAddCounter}
            counters={this.state.counters} //pass counters down as a property
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

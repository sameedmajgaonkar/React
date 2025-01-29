import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
  }

  componentDidMount() {
    // Ajax calls
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) =>{
    const counters = [ ...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value--
    this.setState({counters})
  }
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
    console.log("Event handler called", counterId);
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalLength={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <Counters
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;

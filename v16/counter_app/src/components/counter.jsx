import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps : ", prevProps);
    console.log("prevState : ", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("Make ajax call and get new data from the server");
    }
  }

  componentWillUnmount() {
    console.log("Counter -  Unmount");
  }
  render() {
    console.log("Counter Rendered");
    let classes = this.getBadgeClasses();

    return (
      <div>

        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value === 0 ? "disabled" : ""}onClick={()=> this.props.onDecrement(this.props.counter)}>Decrement</button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger btn-sm btn"
          >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

// constructor() {
//   super();
//   this.handleIncrement = this.handleIncrement.bind(this);
// }
// renderTags() {
// <h5>
//   {this.state.tags.length === 0 && <p>Please add some tags</p>}
//   {this.renderTags()}
// </h5>
//   if (this.state.tags.length === 0) {
//     return <p>There are no tags</p>;
//   } else {
//     return (
//       <ul>
//         {this.state.tags.map((tag) => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//     );
//   }
// }

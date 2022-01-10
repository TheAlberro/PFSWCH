import React, { Component } from "react";
import axios from "axios";

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: "",
    historyOpen: false,
  };

  async fetchValues() {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index,
    });
    this.setState({ index: "" });
    new Promise(() => {
      setTimeout(() => {
        this.fetchIndexes();
        this.fetchValues();
      }, 1000);
    });
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(", ");
  }
  renderValues() {
    const entries = [];
    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>
        <br />
        {/* <h3>
          For k={this.state.index} i calculated value:{" "}
          {this.state.values[this.state.index] !== undefined
            ? this.state.values[this.state.index]
            : ""}
        </h3> */}
        <button
          onClick={(e) => {
            e.preventDefault();
            this.setState({ historyOpen: !this.state.historyOpen });
            this.fetchValues();
            this.fetchIndexes();
          }}
        >
          Historia
        </button>
        {this.state.historyOpen === true ? <h3>Seen indexes:</h3> : <h3></h3>}
        {this.state.historyOpen === true ? (
          this.renderSeenIndexes()
        ) : (
          <div></div>
        )}
        {this.state.historyOpen === true ? (
          <h3>Calculated values:</h3>
        ) : (
          <h3></h3>
        )}
        {this.state.historyOpen === true ? this.renderValues() : <div></div>}
      </div>
    );
  }
}

export default Fib;

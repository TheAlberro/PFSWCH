import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Home from "./Home";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ position: "absolute", left: "2%" }}
        />
        <p>
          <Link to="/">Home</Link> <br />
        </p>
        <p>
          <Link to="/documentation">Documentation</Link> <br />
        </p>
        <p>
          <Link to="/fibcalc">Fib calc</Link> <br />
        </p>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/fibcalc" component={Fib} />
          <Route path="/documentation" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Where to?
        </p>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/second">Second Page</Link> |{" "}
          <Link to="/third">Third Page</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;

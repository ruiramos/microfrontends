import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, useParams } from "react-router-dom";

function Cheese({ root }) {
  let { type } = useParams();
  return (
    <>
      <p>Selected cheese: {type}</p>
      <Link to={root}>back</Link>
    </>
  );
}

function App({ root }) {
  return (
    <div className="App CheeseApp">
      <div className="AppContent">
        <img src={logo} className="App-logo" alt="logo" />
        <Route exact path={root || "/"}>
          <>
            <p>This App is a list of cheeses:</p>
            <ul>
              <li>
                <Link to={`${root}/cheddar`}>Cheddar</Link>
              </li>
              <li>
                <Link to={`${root}/gouda`}>Gouda</Link>
              </li>
              <li>
                <Link to={`${root}/Feta`}>Feta</Link>
              </li>
              <li>
                <Link to={`${root}/lancashire`}>Lancashire</Link>
              </li>
              <li>
                <Link to={`${root}/stilton`}>Stilton</Link>
              </li>
            </ul>
          </>
        </Route>
        <Route path={`${root}/:type`}>
          <Cheese root={root} />
        </Route>
      </div>
    </div>
  );
}

export default App;

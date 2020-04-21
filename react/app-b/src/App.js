import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, useParams } from "react-router-dom";

function Wine({ root }) {
  let { type } = useParams();
  return (
    <>
      <p>Selected wine: {type}</p>
      <Link to={root}>back</Link>
    </>
  );
}

function App({ root }) {
  return (
    <div className="App WineApp">
      <div className="AppContent">
        <img src={logo} className="App-logo" alt="logo" />
        <Route exact path={root || "/"}>
          <>
            <p>This App is a list of wines:</p>
            <ul>
              <li>
                <Link to={`${root}/syrah`}>Syrah</Link>
              </li>
              <li>
                <Link to={`${root}/pinot-noir`}>Pinot Noir</Link>
              </li>
              <li>
                <Link to={`${root}/chardonnay`}>Chardonnay</Link>
              </li>
              <li>
                <Link to={`${root}/malbec`}>Malbec</Link>
              </li>
              <li>
                <Link to={`${root}/merlot`}>Merlot</Link>
              </li>
            </ul>
          </>
        </Route>
        <Route path={`${root}/:type`}>
          <Wine root={root} />
        </Route>
      </div>
    </div>
  );
}

export default App;

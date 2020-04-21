import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-app-header">
      <p>
        This is the container app.{" "}
        <span role="img" aria-label="hello!">
          👋
        </span>
      </p>
      <p>We currently have 2 awesome apps available:</p>
      <ul>
        <li>
          <Link to="/cheese">Cheese App</Link>
        </li>
        <li>
          <Link to="/wine">Wine App</Link>
        </li>
        <li>
          <Link to="/">Back home</Link>
        </li>
      </ul>
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import SquareButton from "./SquareButton";

export default function Header() {
  return (
    <div className="app-header">
      <h3>Welcome to Something </h3>
      <Link to="/faq">
        <SquareButton label="FAQ" />
      </Link>
      <Link to="/about">
        <SquareButton label="About" />
      </Link>
      <Link to="/recipe">
        <SquareButton label="Recipe" />
      </Link>
      <Link to="/table">
        <SquareButton label="Table" />
      </Link>
      <Link to="/zoom">
        <SquareButton label="Zoom" />
      </Link>
      <Link to="/cat-facts">
        <SquareButton label="Cat Facts" />
      </Link>
      <Link to="/Users">
        <SquareButton label="Users" />
      </Link>
      <Link to="/Songs">
        <SquareButton label="Songs" />
      </Link>
    </div>
  );
}

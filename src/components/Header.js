import React from "react";
import "../styles/Header.css";

function Header(props) {
  return (
    <header>
      <span className="in-header" onClick={props.handle}>
        {props.title}
      </span>
    </header>
  );
}

export default Header;

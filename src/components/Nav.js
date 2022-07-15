import React from "react";

export default function nav({ id, show, showFunc }) {
  if (show == true) {
    return (
      <nav className="small-nav">
        <li ClassName="fist smallnav">
          <a href="#outer" id="1" onClick={(e) => showFunc(e)}>
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" id="2" onClick={(e) => showFunc(e)}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" id="3" onClick={showFunc}>
            Contact
          </a>
        </li>
      </nav>
    );
  } else {
    return (
      <nav className="small-nav">
        <li className="first smallnav">
          <a href="#outer" id="1" onClick={(e) => showFunc(e)}>
            Home
          </a>
        </li>
      </nav>
    );
  }
}

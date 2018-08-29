import React, { Component } from "react";

// Stateless Functional Component - recieves all info from props. const not class

const NavBar = ({ nCounters, totalItems }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        Counter App{" "}
        <span className="badge badge-pill badge-secondary m-1">
          Counters{" "}
          <span className="badge badge-pill badge-primary">{nCounters}</span>
        </span>
        <span className="badge badge-pill badge-secondary m-1">
          Total Items{" "}
          <span className="badge badge-pill badge-primary">{totalItems}</span>
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

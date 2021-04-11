import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
        <header id="header" className="sticky">
          <div className="nav-links">
            <a href="#about">About Me</a>
            <a href="#resume">Resume</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </header>
    );
  }
}

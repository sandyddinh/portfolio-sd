import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
        <header id="header" className="sticky">
          <div className="nav-links">
            <a href="#AboutPage">About Me</a>
            <a href="#ResumePage">Resume</a>
            <a href="#PortfolioPage">Portfolio</a>
            <a href="#ContactPage">Contact</a>
          </div>
        </header>
    );
  }
}

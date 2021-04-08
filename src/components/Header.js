import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
        <header id="header">
          <a href="#about">About Me</a>
          <a href="#resume">Resume</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </header>
    );
  }
}

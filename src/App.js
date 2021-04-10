import React, { Component } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="landing-page">
            <div className="intro-text">
                <h1>Hey, I'm Sandy.</h1>
            </div>
            {/* <p></p> 
            <div>
                <Header/>  
            </div> */}
        </div>
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}
export default App;

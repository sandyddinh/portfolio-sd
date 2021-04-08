import React, { Component } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <div className="AppPage">
        <Header />
        {/* <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Contact resumeData={resumeData} />
        <Footer resumeData={resumeData} /> */}
        <div className="intro-text">
            <h1>Hey, I'm Sandy.</h1>
        </div>
      </div>
    );
  }
}
export default App;

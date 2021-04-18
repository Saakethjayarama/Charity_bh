import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Use from "./components/Use"
import How from "./components/HowtoUse"
import Resume from "./components/Charities";
import ContactUs from "./components/EnrollForm";
import resumeData from "./resumeData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Use resumeData={resumeData} />
        <How resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
      </div>
    );
  }
}

export default App;

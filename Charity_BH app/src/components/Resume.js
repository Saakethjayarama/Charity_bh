import React, { Component } from "react";
import Green from "../GreenHand.png";
export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <Charity />
        <Charity />
        <Charity />
      </section>
    );
  }
}

class Charity extends Component {
  render() {
    return (
      <div>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Charity Name</span>
            </h1>
            <br></br>
            <img src={Green} width="130px"></img>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Charity Name</h3>
                <p className="info">City : Bangalore</p>
              </div>
              <button> Goto charity website </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Hand from "../hand.jpg";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let url= "https://github.com/Saakethjayarama/Charity_bh";
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav" className="nav">
              <li className="current">
                <a className="current" href="#home">
                  CharityAF
                </a>
              </li>
              <li className="smoothscroll">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Charities
                </a>
              </li>
              {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
              <li>
                <a className="smoothscroll" href="#contact">
                  Enroll
                </a>
              </li>
               
                <a className="howItWorks" href={url} >
                  How it works?
                </a>
              
              {/* <li>
                <a className="smoothscroll" href="#admin">
                  Admin
                </a>
              </li> */}
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text ">
              <div className="responsive-headline ">
                <h1>
                  Help a <div className="causeColor">cause!</div>
                </h1>
              </div>
              <div className="sameLine">
                <img src={Hand} className="handImg" />
              </div>
              <h2 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                {" "}
                Donate your web traffic for the good.
                
              </h2>

              <hr />

              {/* <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul> */}
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}

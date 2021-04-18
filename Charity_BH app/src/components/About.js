import React, { Component } from "react";
import Art from "../Screencropped.png";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="about">
          <div className="row banner">
            <br></br>
            <br></br>
            <br></br>
            <img src={Art} className="aboutImg" />
            <div className="banner-text ">
              <div className="responsive-headline ">
                <h1>
                  Donate <div className="causeColor">web traffic.</div>
                </h1>
              </div>
              <div className="sameLine"></div>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                {" "}
               We at CharityAF offer charity mediator service, that works on the graciousness of high
                traffic website owners. CharityAF puts forward pitches for
                donations to various charities and causes, on your website upon
                consent, to make use of the web traffic for raising money.
                Enroll today to help a cause.
                <span>
                On any high traffic website, CharityAF plugins provides a layer over the landing page, showcasing various charities for the valued customer to donate to. 
                </span>
              </h3>
              <br></br>
              <h3>

              </h3>
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

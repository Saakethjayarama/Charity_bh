import React, { Component } from "react";
import Art from "../Qp.png";
export default class HowToUse extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="How">
          <div className="row banner">
            <br></br>
            <br></br>
            <br></br>
            <img src={Art}  className="howImg" />
            <div className="banner-text ">
              <div className="responsive-headline ">
                <h1>
                   <div className="causeColor">How to use?</div>
                </h1>
              </div>
              <div className="sameLine"></div>
             <h2>1. Have a running website built using html.</h2>
             <h2>2. Inject the <a href="https://github.com/Saakethjayarama/Charity_bh">plugin</a> onto your home page.</h2>
             <h2>3. Voila! You're done. </h2>
              <br></br>
              <h3>Good karma is that easy! </h3>
              

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

        </header>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import Art from "../Charity.png";
export default class Use extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="use">
          <div className="row banner">
            <br></br>
            <br></br>
            <br></br>
            <img src={Art} className="aboutImg" />
            <div className="banner-text ">
              <div className="responsive-headline ">
                <h1>
                   <div className="causeColor"> Who is it for?</div>
                </h1>
              </div>
              <div className="sameLine"></div>
             <h2>1. Bloggers</h2>
             <h2>2. E-Commerce site owners</h2>
             <h2>3. Influencers</h2>
              <br></br>
              <h3>Integrate CharityAF on your site for good karma. </h3>
              

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

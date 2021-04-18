import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h2 className="causeColor">
              Enroll your Charity.
              Get enlisted in a new elite way to promote donations.
              </h2>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              <form action="/action_page.php">
                  <input type="text" id="fname" placeholder="Charity name" name="fname" /><br /><br />
                   <input type="text" id="lname" placeholder="Location " name="lname"/> <br /><br />
                   <input type="text" id="lname" placeholder="Email Id " name="lname"/> <br /><br />
                   <input type="text" id="lname" placeholder="Description " name="lname"/> <br /><br />
                   <input type="file" id="lname" placeholder="Upload logo " name="lname"/> <br /><br />
                    <input type="submit" value="Submit" /> 
                  </form>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
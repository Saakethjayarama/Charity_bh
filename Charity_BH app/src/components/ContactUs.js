import React, { Component, useState } from "react";
import { fstore, storage } from "../firebase";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      email: "",
      description: "",
      logo: "",
      status: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const filename = `${new Date().getTime()}-${this.state.logo.name}`;
    const storageRef = storage.ref();

    const url = await storageRef
      .child(`logos/${filename}`)
      .put(this.state.logo)
      .then((snapshot) => snapshot.ref.getDownloadURL());

    const id = fstore.collection("charities").doc().id;

    const { name, location, email, description } = this.state;
    fstore
      .collection("charities")
      .doc()
      .set({
        name,
        location,
        email,
        description,
        url,
      })
      .then(() => {
        this.setState({
          ...this.state,
          status: "Registration Successful!",
        });
      });
    fstore.collection("charities_ids").doc(id).set({
      created_at: new Date(),
    });
  };

  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <h2 className="causeColor">
              Enroll your Charity. Get enlisted in a new elite way to promote
              donations.
            </h2>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  id="fname"
                  placeholder="Charity name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
                <br />
                <br />
                <input
                  type="text"
                  id="lname"
                  placeholder="Location "
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                  required
                />{" "}
                <br />
                <br />
                <input
                  type="text"
                  id="lname"
                  placeholder="Email Id "
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />{" "}
                <br />
                <br />
                <input
                  type="text"
                  id="lname"
                  placeholder="Description "
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  required
                />{" "}
                <br />
                <br />
                <input
                  type="file"
                  id="lname"
                  placeholder="Upload logo "
                  name="lname"
                  onChange={(event) => {
                    this.setState({
                      ...this.state,
                      logo: event.target.files[0],
                    });
                  }}
                  required
                />{" "}
                <br />
                <br />
                <input type="submit" value="Submit" />
              </form>
              <h3>{this.state.status}</h3>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

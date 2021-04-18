import React, { Component } from "react";
import { fstore } from "../firebase";
import Green from "../GreenHand.png";
export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const charities = [];
    const charitiesSnapshot = await fstore.collection("charities").get();

    charitiesSnapshot.docs.forEach((charity) => {
      charities.push({
        id: charity.id,
        ...charity.data(),
      });
    });
    this.setState({
      data: charities,
    });
  }

  render() {
    return (
      <section id="resume">
        {this.state.data.map((charity, index) => {
          const { name, description, location, website, url } = charity;
          return (  
            <Charity
              name={name}
              description={description}
              location={location}
              website={website}
              url={url}
            />
          );
        })}
      </section>
    );
  }
}

class Charity extends Component {
  render() {
    const { name, description, location, website, url } = this.props;
    return (
      <div>
        <div className="row education">
          <div className="header-col">
            <h1>
              <span style={{ color: "black" }}>{name}</span>
            </h1>
            <br></br>
            <img src={url} width="130px"></img>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <p>{description}</p>
                <p className="info">{location}</p>
              </div>
              <button
                onClick={() => {
                  window.open(website);
                }}
              >
                {" "}
                Link to charity website{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


 

import React, { Component } from "react";
import { Tools } from "../components";
import { ReactComponent as Collab } from "../one.svg";
import { Link, withRouter } from "react-router-dom";

class LandingPage extends Component {
  state = {
    logos: [
      {
        id: 1,
        name: "paystack",
        url:
          "https://res.cloudinary.com/taofeeq/image/upload/v1607705678/one-burner/paystack-removebg-preview_1_kgza0d.png",
      },
      {
        id: 2,
        name: "egyptair",
        url:
          "https://res.cloudinary.com/taofeeq/image/upload/v1607705674/one-burner/egyptair-removebg-preview_1_vehwsi.png",
      },
      {
        id: 3,
        name: "dangote",
        url:
          "https://res.cloudinary.com/taofeeq/image/upload/v1607705670/one-burner/dangote-removebg-preview_1_bzwncy.png",
      },
      {
        id: 4,
        name: "standard bank",
        url:
          "https://res.cloudinary.com/taofeeq/image/upload/v1607705657/one-burner/standardbank-removebg-preview_1_hkkhgt.png",
      },
      {
        id: 5,
        name: "mtn",
        url:
          "https://res.cloudinary.com/taofeeq/image/upload/v1607705759/one-burner/MTN_1_vykgc3.png",
      },
      {
        id: 6,
        name: "gtbank",
        url:
          "https://res.cloudinary.com/taofeeq/image/upload/v1607705755/one-burner/gtbank_1_mdxn6h.png",
      },
      {
        id: 7,
        name: "skooleeo",
        url:
          "https://res.cloudinary.com/taofeeq/image/upload/v1607705749/one-burner/Header_Logo_1_fs9y3j.png",
      },
    ],
  };
  render() {
    const { logos } = this.state;
    return (
      <>
        <div className="landing" id="content">
          <header>
            <div className="texts">
              <h1>Collaborate with your team and get more done</h1>
              <p>
                Communicate effectively with Oneburner for easy collaboration,
                team work and remote work.
              </p>
              <button className="btn-start">Start Free Trial {">"}</button>
            </div>
            <div className="side-img">
              <Collab style={{ width: "100%", height: "100%" }} />
            </div>
          </header>
          <div className="companies">
            <h1>Over 500+ companies bond teams together with Oneburner</h1>
            <div className="logos">
              {logos.map((logo) => (
                <img src={logo.url} alt={logo.name} key={logo.id} />
              ))}
            </div>
          </div>
          <Tools />
          <div className="support">
            <div className="chat-img">
              <div className="chats-links">
                <Link to="" className="link">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M37.999 10H46V36H38V44L26 36H21"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M38 2H2V28H10V38L24 28H38V2Z"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                  <p>Live chat</p>
                </Link>
                <Link to="" className="link">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 10H10"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M16 10H18"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M32 10H40"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M2 16H46"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M46 4H2V44H46V4Z"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                  <p>Mail support</p>
                </Link>
              </div>
              <img
                src="https://res.cloudinary.com/taofeeq/image/upload/v1607705802/one-burner/Ellipse_1_1_tre6cl.png"
                alt="customer care"
              />
            </div>
            <div className="texts">
              <h1>24/7 customer support</h1>
              <p>
                Our team of responsible member is always available to help you
                all day long and ready to meet your demand. Reach out to us and
                we will always be there.
              </p>
            </div>
          </div>
          <div className="better-way-to-work">
            <h1>Choose a better way to work</h1>
            <p>
              No credit card details | No additional installation | No time
              wasting
            </p>
            <button className="btn-start">Start my free tiral {">"}</button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(LandingPage);

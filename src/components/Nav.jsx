import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { show_sidenav } from "../actions/sidenav";
import { connect } from "react-redux";

class Nav extends Component {
  state = {
    caret: "down",
    active: false,
  };

  handleDropDown(e) {
    const { caret } = this.state;

    if (caret === "down") {
      this.setState({ ...this.state, caret: "up", active: true });
    } else {
      this.setState({ ...this.state, caret: "down", active: false });
    }

    document.querySelector("#dropdown").classList.toggle("show");
    document.querySelector("#content").classList.toggle("opaque");
  }

  render() {
    const { caret, active } = this.state;
    const { showSideNav, dditems } = this.props;
    return (
      <>
        <div className="nav-container">
          <nav className="nav">
            <Link to="" className="brand">
              <img
                src="https://res.cloudinary.com/taofeeq/image/upload/v1607705278/one-burner/Mask_Group_pgwvuo.png"
                alt="one burner"
              />
            </Link>
            <div className="mob">
              <ion-icon name="menu-outline" onClick={showSideNav}></ion-icon>
            </div>
            <Link
              to=""
              className={`link ${active ? "active" : ""}`}
              onClick={(e) => this.handleDropDown(e)}>
              Product <ion-icon name={`chevron-${caret}-outline`}></ion-icon>
            </Link>
            <Link to="" className="link">
              Pricing
            </Link>
            <Link to="" className="link">
              Enterprise
            </Link>
            <Link to="" className="link">
              Support
            </Link>
            <div className="contact-login">
              <Link to="" className="link">
                Contact Sales
              </Link>
              <Link to="" className="link">
                Login
              </Link>
              <button className="btn-try">Try For Free {">"}</button>
            </div>
          </nav>
          <div className="drop" id="dropdown">
            {dditems.map((item) => (
              <div className="item" key={item.id}>
                {item.svg}
                <div className="texts">
                  <Link to="" className="link">
                    {item.title}
                  </Link>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showSideNav: () => dispatch(show_sidenav),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Nav));

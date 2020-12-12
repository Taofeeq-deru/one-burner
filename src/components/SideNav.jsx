import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { hide_sidenav } from "../actions/sidenav";
import { connect } from "react-redux";

class SideNav extends Component {
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

    document.querySelector("#dd").classList.toggle("show");
  }

  render() {
    const { sidenav, hideSideNav, dditems } = this.props;
    const { caret, active } = this.state;
    return (
      <>
        <div className={`sideNav ${sidenav ? "showSideNav" : "hideSideNav"}`}>
          <div className="top">
            <Link to="" className="brand">
              <img
                src="https://res.cloudinary.com/taofeeq/image/upload/v1607705278/one-burner/Mask_Group_pgwvuo.png"
                alt="one burner"
              />
            </Link>
            <ion-icon name="close" onClick={hideSideNav}></ion-icon>
          </div>
          <Link
            to=""
            className={`link ${active ? "active" : ""}`}
            onClick={(e) => this.handleDropDown(e)}>
            Product <ion-icon name={`chevron-${caret}-outline`}></ion-icon>
          </Link>
          <div id="dd" className="drop">
            {dditems.map((item) => (
              <div className="item" key={item.id}>
                {item.svg}
                <Link to="" className="link">
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
          <Link to="" className="link" onClick={hideSideNav}>
            Pricing
          </Link>
          <Link to="" className="link" onClick={hideSideNav}>
            Enterprise
          </Link>
          <Link to="" className="link" onClick={hideSideNav}>
            Support
          </Link>
          <Link to="" className="link" onClick={hideSideNav}>
            Contact Sales
          </Link>
          <Link to="" className="link" onClick={hideSideNav}>
            Login
          </Link>
          <button className="btn-try" onClick={hideSideNav}>
            Try For Free <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidenav: state.sidenav,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideSideNav: () => dispatch(hide_sidenav),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SideNav)
);

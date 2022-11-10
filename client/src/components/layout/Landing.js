import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container valign-wrapper" style={{ height: "75vh" }}>
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hello!</b> This is built with{" "}
              <span style={{ fontFamily: "monospace" }}>MERN-</span>
              stack
            </h4>
            <p className="flow-text gray-text text-darken-1">
              Create a Full-StackAPP with user authentication via
              passport and JWTs
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-success btn-large waves-effect waves-light hoverable accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light blue hoverable white-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

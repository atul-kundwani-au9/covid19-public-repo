import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Alert } from "reactstrap";
import image from "../../images/download (2).jpg";
import "../../styles/profile.css";
import { Redirect } from "react-router-dom";
class Profile extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <div>
            <Row>
              <Col sm="6">
                <div className="profile-heading">Profile</div>
                <div className="profile-heading">
                  <img
                    style={{ width: "200px", height: "200px", margin: "10px" }}
                    top
                    width="100%"
                    src={image}
                    alt="Card cap"
                  />
                </div>
                <Alert className="alert">
                  Full Name : {this.props.fullname}
                </Alert>
                <Alert className="alert">Email : {this.props.email}</Alert>
              </Col>
              <Col sm="6">
                <div className="profile-heading">HISTORY of SELF ACCESS</div>
                {JSON.parse(localStorage.getItem("history")) === null ? (
                  <Alert className="alert" color="warning">
                    No History of Self Access till now. Please do Self Access
                    first
                  </Alert>
                ) : JSON.parse(localStorage.getItem("history")).find(
                    (find) => find.email === this.props.email
                  ) === undefined ? (
                  <Alert className="alert" color="warning">
                    No History of Self Access till now. Please do Self Access
                    first
                  </Alert>
                ) : (
                  JSON.parse(localStorage.getItem("history"))
                    .find((find) => find.email === this.props.email)
                    .history.map((map) => (
                      <Alert className="alert" color="warning">
                        Your infection risk was {map}
                      </Alert>
                    ))
                )}
              </Col>
            </Row>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    email: state.users.email,
    fullname: state.users.fullname,
    isAuthenticated: state.users.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Profile);

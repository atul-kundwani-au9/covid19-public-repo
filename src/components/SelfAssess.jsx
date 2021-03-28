import React, { Component } from "react";
import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import {
  answerupdate,
  score_update,
  retake,
  responses,
  history,
} from "../redux/Action/actionQuiz";
// import "../styles/selfaccess.css";
import { Link } from "react-router-dom";
import Footer from "./footer";

class SelfAssess extends Component {
  state = {
    isOpen: false,
    isclicked: false,
  };

  render() {
    return (
      <div>
        <div>
          <div
            style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "30%" }}
          >
            Quiz
          </div>
        </div>
        <div>Note : Please provide correct information </div>
        {this.props.quiz.map((map1, index1) => (
          <Alert color="primary">
            {index1 + 1}__
            {map1.question}{" "}
            {map1.answers.map((map3, index) => (
              <div>
                <button
                  className="ans-button"
                  value={map1.questionId}
                  onClick={(e) => {
                    //  console.log(this.props.ans[e.target.value-1].answers.length!==1)
                    if (
                      this.props.ans[e.target.value - 1].answers.length !== 1
                    ) {
                      this.props.answerupdate(e.target.value, map3);
                      this.props.responses(e.target.value);
                    }
                  }}
                >
                  {map3}
                </button>
              </div>
            ))}
          </Alert>
        ))}

        <div>
          <div>
            Note: Self access history will be saved in your profile when you are
            logged In
          </div>
          <Button
            className="main-button"
            onClick={() => {
              this.props.score_update();

              // console.log(this.props.response)

              if (this.props.response === 4) {
                this.setState({ isOpen: true });
              } else {
                alert("Please Answer each question");
              }
              this.props.history();
            }}
          >
            SUBMIT
          </Button>
          <Button
            className="main-button"
            color="primary"
            onClick={() => this.props.retake()}
          >
            Retake
          </Button>
          {/* {console.log(this.state.isOpen)} */}
          <Modal isOpen={this.state.isOpen} toggle="true">
            <ModalHeader>Result</ModalHeader>
            <ModalBody>
              <div>
                Your infection risk is
                {this.props.score === 4 ? (
                  <div>
                    <Badge color="success">Low</Badge>{" "}
                    <div>
                      {" "}
                      We recommend that you stay at home to avoid any chance of
                      exposure to the Novel Coronavirus.
                    </div>
                    <br />
                    <div>
                      Retake the Self-Assessment Test if you develop symptoms or
                      come in contact with a COVID-19 confirmed patient.
                    </div>
                  </div>
                ) : this.props.score === 3 ? (
                  <div>
                    <Badge color="warning">Medium</Badge>
                    <div>
                      {" "}
                      We recommend that you stay at home to avoid any chance of
                      exposure to the Novel Coronavirus.
                    </div>
                    <br />
                    <div>
                      Retake the Self-Assessment Test if you develop symptoms or
                      come in contact with a COVID-19 confirmed patient.
                    </div>
                  </div>
                ) : (
                  <div>
                    <Badge color="danger">High</Badge>
                    <div>
                      We recommend that you should go to your nearest hospital
                      and get a Covid-19 test
                    </div>
                    <div>
                      Maintain distance from other people until you got your
                      test Result
                    </div>
                  </div>
                )}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => {
                  this.setState({ isOpen: false });
                  this.props.retake();
                }}
              >
                Retake
              </Button>

              <Button
                color="secondary"
                onClick={() => {
                  this.setState({ isOpen: false });
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    quiz: state.quiz.qBank,
    score: state.quiz.score,
    response: state.quiz.response,
    ans: state.quiz.qBank,
  };
};

export default connect(mapStateToProps, {
  answerupdate,
  score_update,
  retake,
  responses,
  history,
})(SelfAssess);

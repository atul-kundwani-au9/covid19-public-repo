export const answerupdate = (id, answer) => (dispatch, getState) => {
  // console.log(getState());
  dispatch({ type: "SET_ANSWER", payload: id, payload2: answer });
};
export const score_update = () => (dispatch, state) => {
  state().quiz.qBank.map((check) => {
    if (check.answers[0] === check.correct) {
      let new_score = state().quiz.score;

      dispatch({ type: "SET_SCORE", payload3: new_score });
    }
  });
};

export const retake = () => (dispatch) => {
  // console.log("retake");
  dispatch({ type: "SET_RETAKE" });
};

export const responses = (id) => (dispatch, state) => {
  let findid = state().quiz.qBank.find((find) => find.questionId === id);

  if (findid.answers.length === 1) {
    let new_score = state().quiz.response + 1;
    dispatch({ type: "SET_RESPONSE", payload4: new_score });
  }
};

export const history = () => (dispatch, getState) => {
  let res = getState().quiz.response;
  if (res === 4) {
    let riskscore = getState().quiz.score;
    let validemail = getState().users.email;
    if (validemail !== "") {
      if (riskscore === 4) {
        let date = Date().slice(0, 24);
        dispatch({
          type: "SET_HISTORY",
          payload6: "Low on " + date,
          payload7: validemail,
        });
      } else {
        if (riskscore === 3) {
          let date = Date().slice(0, 24);
          dispatch({
            type: "SET_HISTORY",
            payload6: "Medium on " + date,
            payload7: validemail,
          });
        } else {
          let date = Date().slice(0, 24);
          dispatch({
            type: "SET_HISTORY",
            payload6: "High on " + date,
            payload7: validemail,
          });
        }
      }
    }
  }
};

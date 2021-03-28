let initialState = {
  users: [],
  fullname: "",
  email: "",
  isAuthenticated: false,
  history: [],
};

const reducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case "REGISTER":
      if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([action.payload]));
      } else {
        let fetchuser = JSON.parse(localStorage.getItem("users"));
        stateCopy.users = [...fetchuser, action.payload];
        localStorage.setItem("users", JSON.stringify(stateCopy.users));
      }
      return stateCopy;
    case "LOGIN":
      let { fullname, email, isAuthenticated } = action.payload;
      stateCopy.fullname = fullname;
      stateCopy.email = email;
      stateCopy.isAuthenticated = isAuthenticated;
      // console.log(stateCopy)

      return stateCopy;
    case "LOGOUT":
      let { fullname1, email1, isAuthenticated1 } = action.payload;
      stateCopy.fullname = fullname1;
      stateCopy.email = email1;
      stateCopy.isAuthenticated = isAuthenticated1;

      return stateCopy;
    case "SET_HISTORY":
      if (localStorage.getItem("history") === null) {
        localStorage.setItem(
          "history",
          JSON.stringify([
            { history: [action.payload6], email: action.payload7 },
          ])
        );
      } else {
        let fetchuser = JSON.parse(localStorage.getItem("history"));
        // console.log(fetchuser)
        let kuc = fetchuser.find((find) => find.email === action.payload7);
        if (kuc) {
          let fetchuser = JSON.parse(localStorage.getItem("history"));
          stateCopy.history = [...fetchuser];
          let index = fetchuser.findIndex(
            (index) => index.email === action.payload7
          );
          stateCopy.history[index].history = [
            ...fetchuser[index].history,
            action.payload6,
          ];
          localStorage.setItem("history", JSON.stringify(stateCopy.history));
          //    console.log(stateCopy)
        } else {
          let fetchuser = JSON.parse(localStorage.getItem("history"));
          stateCopy.history = [
            ...fetchuser,
            { history: [action.payload6], email: action.payload7 },
          ];
          localStorage.setItem("history", JSON.stringify(stateCopy.history));
        }
      }

      return stateCopy;

    default:
      return stateCopy;
  }
};

export default reducer;

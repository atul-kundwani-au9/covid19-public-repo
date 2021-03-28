const action = {};

action.register = (userDetails) => {
  return (dispatch) => {
    let check = localStorage.getItem("users");
    // console.log(localStorage.getItem("users"));
    if (check === null) {
      dispatch({ type: "REGISTER", payload: userDetails });
      // console.log("object");
    } else {
      let fetchuser = JSON.parse(localStorage.getItem("users"));
      let available = fetchuser.find(
        (find) => find.email === userDetails.email
      );
      // console.log(available);
      if (available === undefined) {
        dispatch({ type: "REGISTER", payload: userDetails });
      } else {
        alert("Already Registered , Please Login");
      }
    }
  };
};

action.login = (userCreds) => {
  const { email, password } = userCreds;
  let localStorageUserArray = JSON.parse(localStorage.getItem("users"));
  // console.log(localStorageUserArray);
  if (localStorageUserArray === null) {
    alert("Please Register First");
    return {
      type: "LOGIN",
      payload: { email: "", fullname: "", isAuthenticated: false },
    };
  } else {
    const user = localStorageUserArray.find(
      (userObj) => userObj.email === email && userObj.password === password
    );
    // console.log(user);
    if (user) {
      let { email, fullname } = user;
      return {
        type: "LOGIN",
        payload: { email, fullname, isAuthenticated: true },
      };
    }
    alert("Not Registered or Wrong Email/Password! Please Check");
    return {
      type: "LOGIN",
      payload: { email: "", fullname: "", isAuthenticated: false },
    };
  }
};

action.logOut = () => {
  return {
    type: "LOGOUT",
    payload: { email1: "", fullname1: "", isAuthenticated1: false },
  };
};

export const { register, login, logOut } = action;

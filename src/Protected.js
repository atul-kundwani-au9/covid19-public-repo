import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protected = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default Protected;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authService } from "../service/auth";

const PrivateRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authService.isLoggedIn() ? (
        React.createElement(component, props)
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);

export default PrivateRoute;

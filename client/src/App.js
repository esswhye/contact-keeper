import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Alerts from "./component/layout/Alerts";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./component/routing/PrivateRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//DONE 62

if (localStorage.token) {
  setAuthToken(localStorage.token);
  console.log("set token to header");
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/login" component={Login}></Route>
                  <Route exact path="/register" component={Register}></Route>
                  <PrivateRoute
                    Route
                    exact
                    path="/"
                    component={Home}
                  ></PrivateRoute>
                  <Route exact path="/about" component={About}></Route>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;

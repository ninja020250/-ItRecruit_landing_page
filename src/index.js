import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/scss/style.scss";
import "./i18n";
import "./lib";

import * as serviceWorker from "./serviceWorker";

import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";
import ReactDOM from "react-dom";

// import i18n (needs to be bundled ;))


const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);
ReactDOM.render(
  <div>
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Suspense>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { Route, Switch } from "react-router-dom";

import { About } from "./Component/About/About";
import { Homepage } from "./Component/Homepage/Homepage";
import NAV_Mobile from "./Component/Mobile/NAV_Mobile";
import  Nav from "./Component/Nav";
import React from "react";
import { RequestDemo } from "./Component/RequestDemo/RequestDemo";
import { Services } from "./Component/Services/Services";
import { withTranslation } from "react-i18next";

const App = () => {
 
  return (
    <div className="app ">
    
      {/* {t("title")} */}
      <Nav />
      <NAV_Mobile/>
      <Switch>
        <Route path="/Demo">
          <RequestDemo />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default withTranslation()(App);

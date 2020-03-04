import React, { Component } from "react";

import CopyRight from "../CopyRight";
import { Email } from "../Services/Email";
import { Footer } from "../Homepage/Footer";
import { icon_submited_big } from "../../assets/constant";

export class RequestDemo extends Component {
  render() {
    return (
    <div>
        <div id="request-for-demo" className="body-big email-request">
        <div className=" container header-request-demo">
          <div className="container-inner header-border">
              <Email title="Request For Demo" iconSubmit={icon_submited_big}/>
          </div>
        </div>
      </div>
       <Footer />
       <CopyRight/>
    </div>
    );
  }
}

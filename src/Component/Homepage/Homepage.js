import Body from "./Body";
import BodyMobile from '../Mobile/Body';
import CopyRight from "../CopyRight";
import { Footer } from "./Footer";
import { Header } from "./Header";
import {HeaderMobile} from '../Mobile/Header';
import React from "react";
import { About } from "../About/About";
import {Services} from '../Services/Services';
import { RequestDemo } from "../RequestDemo/RequestDemo";

export class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <div className="homepage">
        <Header />
        <HeaderMobile/>
        <Body />
        <BodyMobile/>
        <About />
        <Services />
        <Footer />  
        <CopyRight/>
      </div>
    );
  }
}

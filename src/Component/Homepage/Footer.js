import { Link, NavLink } from "react-router-dom";
import { fb, instagram, linkedin, twitter } from "../../data";

import React from "react";
import { logoImg } from "../../data";
import { withTranslation } from "react-i18next";
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active : "home"
    };
  }

  render() {
    var { t } = this.props;
    return (
      <div className="footer " id="foot">
        <div
          style={{
            borderRight: "1px solid #dedede",
            paddingTop: "30px",
            paddingBottom: "30px"
          }}
          className="container-inner d-flex justify-content-between align-items-center"
        >
          <div className="left d-flex align-items-center">
            <a href="#">
              <img src={logoImg} alt="img"></img>
            </a>
            <ul className="bottom-menu d-flex">
              <li>
                <a href="#">{t("Home footer")}</a>
              </li>
              <li>
               <a  href="#candidate">
               {t("Candidates")}
               </a>    
             </li>
             <li>
               <a  href="#for-recruiters" >
               {t("Recruiters")}
               </a>
             </li> 
              <li>
                <a href="#about" >{t("About Us footer")}</a>
              </li>
              <li>
                <a href="#services">{t("Headhunting Services")}</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <Link className="specialBtn" to='/Demo'>{t("Request For Demo")}</Link>
          </div>
        </div>
      </div>
    );
  }
}

const f = withTranslation()(Footer);
export { f as Footer };

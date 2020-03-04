import React from "react";
import { logoBigImg } from "../../data";
import { withTranslation } from "react-i18next";

class Header extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="header-big " id='header-pc' >
        <div className="header container">
          <div className="container-inner header-border">
            <div className="d-flex">
              <div className="left-header">
                <img alt="img" src={logoBigImg}></img>
              </div>
              <div className="right-header">
                <h1> {t("ITRecruit")}</h1>
                <h6 dangerouslySetInnerHTML={{__html: t("Connecting Recruiters with Tech Talents home")}}></h6>
              </div>
            </div>
            {/* <div className="smart-boxs d-flex flex-md-wrap">
              <div className="box box1">
                <div>
                  <h6>{t("Smart Matching")}</h6>
                  <p>{t("AI Technology Application &")}</p>
                  <p>{t("Job and CV Matching")}</p>
                </div>
              </div>
              <div className="box box2">
                <div>
                  <h6>{t("Smart Connection")}</h6>
                  <p>{t("Transparent Feedback System & Qualified Courses Provision")}</p>
                </div>
              </div>
              <div className="box box3">
                <div>
                  <h6> {t("Smart Examination")}</h6>
                  <p dangerouslySetInnerHTML={{__html: t("Test Career Suitability Solution & IT Skill Challenges")}}></p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

const a = withTranslation()(Header);

export { a as Header };

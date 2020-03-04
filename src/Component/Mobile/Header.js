import React from "react";
import { logoBigImg } from "../../data";
import { withTranslation } from "react-i18next";

class HeaderMobile extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="header-big " id='header-mobile' >
        <div className="header ">
          <div className="container-inner header-border">
            <div className="d-flex content">
              <div className="left-header">
                <img alt="img" src={logoBigImg}></img>
              </div>
              <div className="right-header">
                <h1> {t("ITRecruit")}</h1>
                <h6 dangerouslySetInnerHTML={{__html: t("Connecting Recruiters with Tech Talents home")}}></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const a = withTranslation()(HeaderMobile);

export { a as HeaderMobile };

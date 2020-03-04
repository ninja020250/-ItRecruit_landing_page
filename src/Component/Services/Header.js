import React from "react";
import { withTranslation } from "react-i18next";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { t } = this.props;
    return (
      <div className="header-big" >
        <div className="header-service container">
          <div className="container-inner header-border">
            <div className="d-flex">
              <div className="right-header">
                <h2 style={{fontSize: "34px"}}>{t("Headhunting Services")}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const h = withTranslation()(Header);
export { h as Header };

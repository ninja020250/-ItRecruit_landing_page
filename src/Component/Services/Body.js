import { Email } from "./Email";
import {EmailMobile} from './EmailMobile';
import React from "react";
import { icon_submited } from "../../assets/constant";
import people from "../../assets/images/people.png";
import { withTranslation } from "react-i18next";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { t } = this.props;
    return (
      <div className="body-big">
        <div className=" body-service ">
          <div className="container-fluid service-outside">
            <div className='container'>
              <div className="row service-row">
                <div className="col-xs-12 col-md-12 col-lg-6 people-service">
                  <div className="service-img-inner">
                    <img alt="img" src={people} alt="people" />
                  </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-6 slogan-service">
                  <div style={{display:'none'}} className="service-slogan-inner-mobile">
                    <div className="row">
                      <div className="col-12 slogan-title">
                        <span>{t("Let us find candidates for you")}</span>
                      </div>
                      <div className="col-12 slogan-content" dangerouslySetInnerHTML={{ __html: t('We offer a very competitive cost to find the long term suitable candidates for your business-mobile') }} >
                      </div>
                    </div>
                  </div>
                  <div className="service-slogan-inner">
                    <div className="row">
                      <div className="col-12 slogan-title">
                        <span>{t("Let us find candidates for you")}</span>
                      </div>
                      <div className="col-12 slogan-content" dangerouslySetInnerHTML={{ __html: t('We offer a very competitive cost to find the long term suitable candidates for your business') }} >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid'id="request">
            <div className="service-getin-touch">
              <div className="getin-touch-content">
                <div className="text-box">
                  <h1>{t("GET IN TOUCH")}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>         
            <Email title='' />
            <EmailMobile title=''/>
          </div>
        </div>
      </div>
    );
  }
}
const b = withTranslation()(Body);
export { b as Body };


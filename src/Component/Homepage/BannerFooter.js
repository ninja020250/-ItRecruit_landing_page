import { API_MAIL_SUBSCRIBE, icon_submited } from "../../assets/constant";

import $ from "jquery";
import React from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";

class BannerFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribeMail: "",
      isSubmited: false
    };
  }

  handleInput = e => {
    var value = e.target.value;
    var name = e.target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    var { subscribeMail } = this.state;
    axios
      .post(API_MAIL_SUBSCRIBE, { mailSubscribe: subscribeMail })
      .then(res => {
        this.setState({
          isSubmited: true
        })
      })
      .catch(err => {
        alert("something error please try again later");
      });
  };

  render() {
    const { t } = this.props;
    return (
      <section className="email-notification">
        <div className="email-notification__text fs-20 fw-800">
          <p>
            {" "}
            {t("Sign up for the latest news & events related to ITRecruit")}
          </p>
        </div>
        <form
          className="email-notification__form d-flex flex-row"
          onSubmit={this.handleSubmit}
        >
          {this.state.isSubmited ? (
            <div className="submited-alert">
              <img src={icon_submited} alt="submited-icon" className="mr-2" />{" "}
              <span>
                {t('submited alert')}
              </span>
            </div>
          ) : (
            <input
              onChange={this.handleInput}
              name="subscribeMail"
              type="email"
              placeholder="Email Address"
              className="fs-16"
              value={this.state.subscribeMail}
            ></input>
          )}
          {!this.state.isSubmited && (
            <button
              className="btn-lg-bluelight fs-18 fw-700 ml-md-2 ml-0"
              type="submit"
            >
              {t("Submit")} ⟶
            </button>
          )}
        </form>
      </section>
    );
  }
}

const a = withTranslation()(BannerFooter);
export { a as BannerFooter };

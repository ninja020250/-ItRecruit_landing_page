import $ from "jquery";
import { API_SEND_MAIL } from "../../assets/constant";
import { IconLoading } from "../loading/IconLoading";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import axios from "axios";
import logo from "../../assets/images/logo.png";
import { withTranslation } from "react-i18next";

const recaptchaRef = React.createRef();
const initState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  message: "",
}
class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sendingMail: false,
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
    const recaptchaValue = recaptchaRef.current.getValue();

    if (recaptchaValue !== "") {
      recaptchaRef.current.reset();
      this.setState({
        sendingMail: true
      });
      axios
        .post(API_SEND_MAIL, { ...this.state })
        .then(res => {
          this.setState({
            sendingMail: false,
            isSubmited: true,
            ...initState
          });
        })
        .catch(err => {
          this.setState({
            sendingMail: false
          });
          alert("Email send failed");
        });
    } else {
      alert("reCAPTCHA is required");
    }
  };
  render() {
    const { t, title } = this.props;
    const {
      firstName,
      lastName,
      phoneNumber,
      companyName,
      message,
      email,
      sendingMail,
      isSubmited
    } = this.state;
    return (
      <div className="email-notification ">
        <div className="row">
          <div className="col-7 email-form">
            <form
              className="email-notification__form d-flex flex-row"
              onSubmit={this.handleSubmit}
            >
              <div className="col-12">
                <div className="row">
                  <div className="email-notification__text fs-20 fw-800">
                    <div className="col-12">
                      <div className="right-header  ">
                        <h2>{t(title)}</h2>
                      </div>

                      {isSubmited ? (
                        <div className="submited-alert">
                        <img
                          src={this.props.iconSubmit}
                          alt="submited-icon"
                          className="mr-2"
                        />
                        <span>
                          {t(
                            "Thank you for getting in touching with ITRecruit. Our customer service will contact you soon"
                          )}
                        </span>
                      </div>
                      ) : (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: t(
                              "Get in touch with us to let ITRecruit find the most suitable tech candidates for your company"
                            )
                          }}
                        />
                      )}

                      {/* Get in touch with us to let
                        <span className="fw-800"> ITRecruit</span> find the most
                        <br />
                        suitable candidates for your company
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 ">
                    <input
                      required
                      type="text"
                      placeholder={t("First Name")}
                      className="fs-16"
                      name="firstName"
                      value={firstName}
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      required
                      type="text"
                      placeholder={t("Last Name")}
                      className="fs-16"
                      name="lastName"
                      value={lastName}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <input
                      required
                      type="mail"
                      placeholder="Email"
                      className="fs-16"
                      name="email"
                      onChange={this.handleInput}
                      value={email}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      required
                      type="tel"
                      maxlength="12"
                      pattern="\d*"
                      minLength="9"
                      placeholder={t("Phone Number")}
                      className="fs-16"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input
                      required
                      type="text"
                      placeholder={t("Company Name")}
                      className="fs-16"
                      name="companyName"
                      value={companyName}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <textarea
                      required
                      placeholder={t("Message to ITRecruit")}
                      className="fs-16 large-input "
                      name="message"
                      value={message}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <ReCAPTCHA
                      // size="compact"
                      ref={recaptchaRef}
                      sitekey="6LevdLQUAAAAAInEE7J5RLVSHr2h_kWu2cl4VKCQ"
                      // onChange={onChange}
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-6">
                    <button
                      className="btn-lg-bluelight fs-18 fw-700 ml-0"
                      type="submit"
                    >
                      {t("Send Information ⟶")} 
                    </button>
                  </div>
                  {sendingMail && (
                    <div
                      style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}
                      className="col-6"
                    >
                      {" "}
                      <IconLoading />{" "}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className="col-5 flex-center" >
            <div className="brand-area">
              <div className="row ">
                <div className="media " style={{ alignItems: "center" }}>
                  <img
                    alt="img"
                    className="align-self-end mr-3"
                    src={logo}
                    alt="logo"
                    style={{ width: "93px", height: "124px" }}
                  />
                  <div className="media-body">
                    <h5 className="mb-0 big-title">ITRecruit</h5>
                    <p className="mb-0 medium-title" style={{lineHeight: "1.8"}} dangerouslySetInnerHTML={{__html: t("Connecting Recruiters with Tech Talents")}}>

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      // <div className="email-notification-mobile">
      //   <div className="row">
      //     <div className="col-12 email-form">
      //       <form
      //         className="email-notification__form d-flex flex-row"
      //         onSubmit={this.handleSubmit}
      //       >
      //         <div className="col-12">
      //           <div className="row">
      //             <div className="email-notification__text fs-20 fw-800">
      //               <div className="col-12">
      //                 <div className="right-header  ">
      //                   <h2>{t(title)}</h2>
      //                 </div>

      //                 {isSubmited ? (
      //                   <div className="submited-alert">
      //                     <img
      //                       src={this.props.iconSubmit}
      //                       alt="submited-icon"
      //                       className="mr-2"
      //                     />
      //                     <span>
      //                       {t(
      //                         "Thank you for getting in touching with ITRecruit. Our customer service will contact you soon"
      //                       )}
      //                     </span>
      //                   </div>
      //                 ) : (
      //                     <span
      //                       dangerouslySetInnerHTML={{
      //                         __html: t(
      //                           "Get in touch with us to let ITRecruit find the most suitable tech candidates for your company"
      //                         )
      //                       }}
      //                     />
      //                   )}

      //                 {/* Get in touch with us to let
      //           <span className="fw-800"> ITRecruit</span> find the most
      //           <br />
      //           suitable candidates for your company
      //         </span> */}
      //               </div>
      //             </div>
      //           </div>
      //           <div className="row">
      //             <div className="col-6 ">
      //               <input
      //                 required
      //                 type="text"
      //                 placeholder={t("First Name")}
      //                 className="fs-16"
      //                 name="firstName"
      //                 value={firstName}
      //                 onChange={this.handleInput}
      //               />
      //             </div>
      //             <div className="col-6">
      //               <input
      //                 required
      //                 type="text"
      //                 placeholder={t("Last Name")}
      //                 className="fs-16"
      //                 name="lastName"
      //                 value={lastName}
      //                 onChange={this.handleInput}
      //               />
      //             </div>
      //           </div>
      //           <div className="row">
      //             <div className="col-6">
      //               <input
      //                 required
      //                 type="mail"
      //                 placeholder="Email"
      //                 className="fs-16"
      //                 name="email"
      //                 onChange={this.handleInput}
      //                 value={email}
      //               />
      //             </div>
      //             <div className="col-6">
      //               <input
      //                 required
      //                 type="tel"
      //                 maxlength="12"
      //                 pattern="\d*"
      //                 minLength="9"
      //                 placeholder={t("Phone Number")}
      //                 className="fs-16"
      //                 name="phoneNumber"
      //                 value={phoneNumber}
      //                 onChange={this.handleInput}
      //               />
      //             </div>
      //           </div>
      //           <div className="row">
      //             <div className="col-12">
      //               <input
      //                 required
      //                 type="text"
      //                 placeholder={t("Company Name")}
      //                 className="fs-16"
      //                 name="companyName"
      //                 value={companyName}
      //                 onChange={this.handleInput}
      //               />
      //             </div>
      //           </div>
      //           <div className="row">
      //             <div className="col-12">
      //               <textarea
      //                 required
      //                 placeholder={t("Message to ITRecruit")}
      //                 className="fs-16 large-input "
      //                 name="message"
      //                 value={message}
      //                 onChange={this.handleInput}
      //               />
      //             </div>
      //           </div>
      //           <div className="row mt-3">
      //             <div className="col-12">
      //               <ReCAPTCHA
      //                 // size="compact"
      //                 ref={recaptchaRef}
      //                 sitekey="6LevdLQUAAAAAInEE7J5RLVSHr2h_kWu2cl4VKCQ"
      //               // onChange={onChange}
      //               />
      //             </div>
      //           </div>
      //           <div className="row ">
      //             <div className="col-6">
      //               <button
      //                 className="btn-lg-bluelight fs-18 fw-700 ml-0"
      //                 type="submit"
      //               >
      //                 {t("Send Information ⟶")}
      //               </button>
      //             </div>
      //             {sendingMail && (
      //               <div
      //                 style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}
      //                 className="col-6"
      //               >
      //                 {" "}
      //                 <IconLoading />{" "}
      //               </div>
      //             )}
      //           </div>
      //         </div>
      //       </form>
      //     </div>
      //   </div>


      // </div>

    );
  }
}

const m = withTranslation()(Email);

export { m as Email };

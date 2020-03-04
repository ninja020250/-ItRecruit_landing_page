import CopyRight from "../CopyRight";
import { Footer } from "../Homepage/Footer";
import React from "react";
import { logoBigImg } from "../../data";
import { withTranslation } from "react-i18next";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { t } = this.props;
    return (
      <div className="about" id="about">
        <div className="head">
          <div className="heading-title container">
            <div className="text-content d-flex justify-content-start align-items-center container-inner">
              <h1>{t("About Us")}</h1>
            </div>
          </div>
        </div>
        <div className="introduce ">
          <div className='container-inner introduce-inside d-flex'>
          <div className="left d-flex justify-content-end">
            <img src={logoBigImg} alt="logo"></img>
          </div>
          <div className="right">
            <p >
              <div  dangerouslySetInnerHTML={{__html: t("aboutContent")}} />
            </p>
          </div>
          </div>
        </div>
        <div className="difference container-inner">
          <div className="the-difference">
            <div className="main-content ">
              <div className="make-different">
                <div className="text-box">
                  <h1>{t("WHAT MAKES US DIFFERENT")}</h1>
                  <p>
                    {t("ITRecruit is an innovative recruitment platform to")}
                  </p>
                </div>
                <ul className="list-difference row">
                  <li className='col-12 col-md-6'>
                    {t(
                      "Provide career suitability test and skill challenges for IT Candidates"
                    )}
                  </li >
                  <li className='col-12 col-md-6'>
                    {t(
                      "Support candidates find their suitable jobs only by uploading/creating CV"
                    )}
                  </li>
                  <li className='col-12 col-md-6'>
                    {t(
                      "Apply Artificial Intelligence (AI) to provide the most appropriate job search results"
                    )}
                  </li>
                  <li className='col-12 col-md-6'>
                    {t(
                      "Provide feedback and comments from recruiters with full integrity and transparency"
                    )}
                  </li>
                </ul>
                <div
                  style={{ marginTop: "30px", marginBottom: "0" }}
                  className="text-box"
                >
                  <h1> {t("VISION")}</h1>
                  <p>
                    {t(
                      "A leading IT recruitment service provider in ASEAN and North America"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mission container-inner">
          <div className="mission-content">
            <div className="main-content">
              <div className="text-box">
                <h1> {t("MISSION")}</h1>
              </div>
              <div className=" d-flex row">
                <div className="left col-12 col-md-6" >
                    <h6 dangerouslySetInnerHTML={{__html: t('To candidates, Be a companion to')}}></h6>
                  <ul>
                    <li dangerouslySetInnerHTML={{__html: t("Listen accurately and thoughtfully the information provided from candidates")}}>
                      
                    </li>
                    <li dangerouslySetInnerHTML={{__html: t("Empathize thoroughly candidate’s demands, goals, anxiousness, and states")}}>
                   
                    </li>
                    <li dangerouslySetInnerHTML={{__html: t("Consult conscientiously to help candidate find the appropriate job")}}>
                     
                    </li>
                  </ul>
                </div>
                <div className="right col-12 col-md-6">
                  <h6 dangerouslySetInnerHTML={{__html: t('To Employers, Be a partner to')}}></h6>
                  <ul>
                    <li dangerouslySetInnerHTML={{__html: t("Acquire attentively business need and expectation for their ideal candidates")}}>
                    
                    </li>
                    <li dangerouslySetInnerHTML={{__html: t("Provide an easy to use, friendly platform to assist enterprises to look for potential candidates in an efficient and effective way")}}>
                  
                    </li>
                    <li dangerouslySetInnerHTML={{__html: t("Apply the latest technologies to suggest the most appropriate candidates")}}>
                     
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{display:'none'}} className="mission-mobile container-inner">
          <div className="mission-content">
            <div className="main-content">
              <div className="text-box">
                <h1> {t("MISSION")}</h1>
              </div>
              <div className=" d-flex row">
                <div className="left col-12 col-md-6" >
                    <h6 dangerouslySetInnerHTML={{__html: t('To candidates, Be a companion to-mobile')}}></h6>
                  <ul>
                    <li dangerouslySetInnerHTML={{__html: t("Listen accurately and thoughtfully the information provided from candidates-mobile")}}>
                      
                    </li>
                    <li dangerouslySetInnerHTML={{__html: t("Empathize thoroughly candidate’s demands, goals, anxiousness, and states-mobile")}}>
                   
                    </li>
                    <li dangerouslySetInnerHTML={{__html: t("Consult conscientiously to help candidate find the appropriate job-mobile")}}>
                     
                    </li>
                  </ul>
                </div>
                <div className="right col-12 col-md-6">
                  <h6 dangerouslySetInnerHTML={{__html: t('To Employers, Be a partner to-mobile')}}></h6>
                  <ul>
                    <li dangerouslySetInnerHTML={{__html: t("Acquire attentively business need and expectation for their ideal candidates-mobile")}}>
                    
                    </li>
                    <li dangerouslySetInnerHTML={{__html: t("Provide an easy to use, friendly platform to assist enterprises to look for potential candidates in an efficient and effective way-mobile")}}>
                  
                    </li>
                    <li dangerouslySetInnerHTML={{__html: t("Apply the latest technologies to suggest the most appropriate candidates-mobile")}}>
                     
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="philosophy container-inner">
          <div className="text-box">
            <h1> {t("Philosophy")}</h1>
          </div>
          <div className="list-items row d-flex">
            <div className="item col-md-4 col-12">
              <h6>{t("Innovative")}</h6>
              <p>
                {t(
                  "We provide innovative and intelligent recruitment services with great understanding on IT labor market"
                )}
              </p>
            </div>
            <div className="item col-md-4 col-12">
              <h6> {t("Straightforward")}</h6>
              <p>
                {t(
                  "We keep striving to deliver key messages in the most simple, straightforward way that anyone can understand"
                )}
              </p>
            </div>
            <div className="item col-md-4 col-12">
              <h6> {t("Integrity")}</h6>
              <p>
                {t(
                  "We are honest to ourselves, to candidates and employers and always treat everybody with the same attitude of respect"
                )}
              </p>
            </div>
          </div>
        </div>
        {/* <Footer />
        <CopyRight/> */}
      </div>
    );
  }
}

const a = withTranslation()(About);

export { a as About };


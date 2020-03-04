import {
    bringBrandImg,
    exploreJobImg,
    getJobImg,
    joinCourseImg,
    smartSearchImg,
    testCareerImg
  } from "../../data";
  
  import React from "react";
  import { withTranslation } from "react-i18next";
  
  class Body extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const { t } = this.props;
      return (
        // <div className="body" >
        //   <div style={{position:'relative', top: '-107px'}} className="container-inner">
        //     <div className="smart-boxs row">
        //       <div className="box box1">
        //         <div>
        //           <h6>{t("Smart Matching")}</h6>
        //           <p>{t("AI Technology Application &")}</p>
        //           <p>{t("Job and CV Matching")}</p>
        //         </div>
        //       </div>
        //       <div className="box box2">
        //         <div>
        //           <h6>{t("Smart Connection")}</h6>
        //           <p>{t("Transparent Feedback System & Qualified Courses Provision")}</p>
        //         </div>
        //       </div>
        //       <div className="box box3">
        //         <div>
        //           <h6> {t("Smart Examination")}</h6>
        //           <p dangerouslySetInnerHTML={{ __html: t("Test Career Suitability Solution & IT Skill Challenges") }}></p>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="slogan d-flex" id="candidate" >
        //       <div className="left">
        //         <div className="text-box ">{t("ITRecruit")}</div>
        //       </div>
        //       <div className="right">
        //         <div className="text-content d-flex flex-column justify-content-around">
        //           <h1>{t("Where your new adventure begins")}</h1>
  
        //           <p>
        //             {t(
        //               "ITRecruit helps candidates discover their full potential in the career path"
        //             )}
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <div style={{position:'relative', top: '-107px'}} className="features" id="for-candidates">
        //     <div className='corner-lelf'></div>
        //     <div className="container-inner row">
        //       <div className="box-feature col-sm-4 col-sm-12">
        //         <img src={testCareerImg} alt="img"></img>
        //         <h6 dangerouslySetInnerHTML={{ __html: t("Test Career Suitability") }}></h6>
        //         <p>
        //           {t(
        //             "Check the matching score with a specific job & experience challenges on IT career path"
        //           )}
        //         </p>
        //       </div>
        //       <div className="box-feature col-sm-4 col-sm-12">
        //         <img src={exploreJobImg} alt="img"></img>
        //         <h6 dangerouslySetInnerHTML={{ __html: t("Explore Job Opportunities") }}></h6>
        //         <p>
        //           {t(
        //             "Find the most suitable job only uploading/ creating your CV on ITRecruit System"
        //           )}
        //         </p>
        //       </div>
        //       <div className="box-feature col-sm-4 col-sm-12">
        //         <img src={joinCourseImg} alt="img"></img>
        //         <h6 dangerouslySetInnerHTML={{ __html: t("Join Useful Courses") }}></h6>
        //         <p>
        //           {t(
        //             "Explore the variety courses and select the relevant courses for your career"
        //           )}
        //         </p>
        //       </div>
        //     </div>
        //     <div className='corner-right'></div>
        //   </div>
        //   <div style={{position:'relative', top: '-107px'}} className="benefit d-flex container-inner" id="for-recruiters">
        //     <div className="left">
        //       <div className="text-content d-flex flex-column justify-content-around">
        //         <h1 className="text-right">
        //           {t("Accelerate your business with IT Talents")}
        //         </h1>
        //         <p className="text-right">
        //           {t(
        //             "ITRecruit helps to hire the right candidates for the businesses"
        //           )}
        //         </p>
        //       </div>
        //     </div>
        //     <div className="right">
        //       <div className="text-box text-left ">ITRecruit</div>
        //     </div>
        //   </div>
        //   <div style={{position:'relative', top: '-107px'}} className="list-benefits">
        //     <div className="container-inner row">
        //       <div className="item item1 col-sm-4 col-sm-12">
        //         <img src={getJobImg} alt="img"></img>
        //         <div className="text-content">
        //           <h6> {t("Job Postings")}</h6>
        //           <p>
        //             {t(
        //               "Access to diverse set of job seekers with your job postings"
        //             )}
        //           </p>
        //         </div>
        //       </div>
        //       <div className="item item1 col-sm-4 col-sm-12">
        //         <img src={smartSearchImg} alt="img"></img>
        //         <div className="text-content">
        //           <h6>{t("Smart Candidate Search")}</h6>
        //           <p>
        //             {t(
        //               "Speed up access to potential candidates with ITRecruit job matching technology"
        //             )}
        //           </p>
        //         </div>
        //       </div>
        //       <div className="item item1 col-sm-4 col-sm-12">
        //         <img src={bringBrandImg} alt="img"></img>
        //         <div className="text-content">
        //           <h6>{t("Employer Branding")}</h6>
        //           <p>
        //             {t(
        //               "Strengthen your brand image by displaying your company banner in ITRecruit portal"
        //             )}
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="container-inner">
        //   </div>
        // </div>
        <div className="body-mobile" >
          <div style={{ position: 'relative', top: '-107px' }} className="container-inner">
            <div className="smart-boxs row">
              <div className="box col-sm-4 col-12">
                <div className='box1'>
                  <div className='content'>
                    <h6 className='d-flex align-items-center flex-column' dangerouslySetInnerHTML={{ __html: t("Smart Matching-mobile") }}></h6>
                    <p>{t("AI Technology Application &")}</p>
                    <p>{t("Job and CV Matching")}</p>
                  </div>
                </div>
              </div>
              <div className="box  col-sm-4 col-12">
                <div className='box2'>
                  <div className='content'>
                    <h6 className='d-flex align-items-center flex-column' dangerouslySetInnerHTML={{ __html: t("Smart Connection-mobile") }}></h6>
                    <p>{t("Transparent Feedback System &")}</p>
                    <p>{t("Qualified Courses Provision")}</p>
                   
                  </div>
                </div>
              </div>
              <div className="box col-sm-4 col-12">
                <div className='box3'>
                  <div className='content'>
                    <h6  className='d-flex align-items-center flex-column' dangerouslySetInnerHTML={{ __html:t("Smart Examination-mobile")}}></h6>
                    <p>{t("Test Career Suitability Solution &")}</p>
                    <p>{t("IT Skill Challenges")}</p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="slogan d-flex" id="candidate-mobile" >
              <div className="left">
                <div className="text-box ">{t("ITRecruit")}</div>
              </div>
              <div className="right">
                <div className="text-content d-flex flex-column justify-content-around">
                  <h1>{t("Where your new adventure begins")}</h1>
  
                  <p>
                    {t(
                      "ITRecruit helps candidates discover their full potential in the career path"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', top: '-107px' }} className="features container-inner" id="for-candidates">
            <div className='corner-lelf'></div>
            <div className="container-inner row">
              <div className="box-feature col-sm-4 col-12">
                <img src={testCareerImg} alt="img"></img>
                <h6 dangerouslySetInnerHTML={{ __html: t("Test Career Suitability") }}></h6>
                <p>
                  {t(
                    "Check the matching score with a specific job & experience challenges on IT career path"
                  )}
                </p>
              </div>
              <div className="box-feature col-sm-4 col-12">
                <img src={exploreJobImg} alt="img"></img>
                <h6 dangerouslySetInnerHTML={{ __html: t("Explore Job Opportunities") }}></h6>
                <p>
                  {t(
                    "Find the most suitable job only uploading/ creating your CV on ITRecruit System"
                  )}
                </p>
              </div>
              <div className="box-feature col-sm-4 col-12">
                <img src={joinCourseImg} alt="img"></img>
                <h6 dangerouslySetInnerHTML={{ __html: t("Join Useful Courses") }}></h6>
                <p>
                  {t(
                    "Explore the variety courses and select the relevant courses for your career"
                  )}
                </p>
              </div>
            </div>
            <div className='corner-right'></div>
          </div>
          <div style={{ position: 'relative', top: '-107px' }} className="slogan d-flex container-inner" id="for-recruiters-mobile">
            <div className="left">
              <div className="text-box ">{t("ITRecruit")}</div>
            </div>
            <div className="right">
              <div className="text-content d-flex flex-column justify-content-around">
                <h1 >
                  {t("Accelerate your business with IT Talents")}
                </h1>
  
                <p>
                  {t(
                    "ITRecruit helps to hire the right candidates for the businesses"
                  )}
                </p>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', top: '-107px' }} className="list-benefits">
            <div className="container-inner benefit-row row">
              <div className="item item1 col-sm-4 col-12">
                <img src={getJobImg} alt="img"></img>
                <div className="text-content">
                  <h6> {t("Job Postings")}</h6>
                  <p>
                    {t(
                      "Access to diverse set of job seekers with your job postings"
                    )}
                  </p>
                </div>
              </div>
              <div className="item item1 col-sm-4 col-12">
                <img src={smartSearchImg} alt="img"></img>
                <div className="text-content">
                  <h6>{t("Smart Candidate Search")}</h6>
                  <p>
                    {t(
                      "Speed up access to potential candidates with ITRecruit job matching technology"
                    )}
                  </p>
                </div>
              </div>
              <div className="item item1 col-sm-4 col-12">
                <img src={bringBrandImg} alt="img"></img>
                <div className="text-content">
                  <h6>{t("Employer Branding")}</h6>
                  <p>
                    {t(
                      "Strengthen your brand image by displaying your company banner in ITRecruit portal"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-inner">
          </div>
        </div>
      );
    }
  }
  
  export default withTranslation()(Body);
  
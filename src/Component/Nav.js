import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import React, { useEffect, useState } from "react";

import $ from 'jquery';
import Scroll from 'react-scroll';
import { logoWhiteImg } from "../data";
import { useTranslation } from "react-i18next";

var Link       = Scroll.Link;


const NAV = props => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState("VN");
  const [active, setActive] = useState("HOME");

  useEffect(() => {
    i18n.changeLanguage("EN");
    setLanguage("VN");
  }, []);

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  })

  useEffect(()=>{
    var $root = $('html, body');

    $('a[href^="#"]').on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
       var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 76
        }, 100, function () {      
        });
      } 
    });
  })
  const changeLanguage = () => {
    if (language === "EN") {
      setLanguage("VN");
      i18n.changeLanguage("EN");
    } else {
      setLanguage("EN");
      i18n.changeLanguage("VN");
    }
  };


  const handleScroll = () => {
    if (window.scrollY > 0){
      // console.log(window.scrollY);
      var a  =  document.getElementById('main-nav');
      a.style.backgroundColor =  "#001222"; 
    }else{
      var a  =  document.getElementById('main-nav');
      a.style.backgroundColor =  "transparent";
      a.style.boxShadow = 'unset';

    }
  };



  return (
    <div className="main-nav" id="main-nav" onScroll={handleScroll}>
      <div className="container">
        <div className="container-inner d-flex align-items-center justify-content-between">
          <div className="left-nav d-flex align-items-center">
            <a href="#root">
              <img alt="img" src={logoWhiteImg}></img>
            </a>
          </div>
          <div className="right-nav d-flex justify-content-end align-items-center">
            <ul className="top-menu d-flex">
              <li>
                <Link style={{cursor:'pointer'}} to="header" offset={0} spy={true} smooth={true} duration={100} activeClass={(active==="HOME")?"active": ""} onClick={()=> setActive("HOME")} >{t("HOME") }</Link>
              </li>
              <li>
                <Link style={{cursor:'pointer'}} to="candidate" offset={-76} spy={true} smooth={true} duration={100} activeClass={(active==="CANDIDATES")?"active": ""}  onClick={()=> setActive("CANDIDATES")}>{t("CANDIDATES")}</Link>
              </li>
              <li>
              <Link style={{cursor:'pointer'}} to="for-recruiters" offset={-76} spy={true} smooth={true} duration={100}  activeClass={(active==="RECRUITERS")?"active": ""}   onClick={()=> setActive("RECRUITERS")}>{t("RECRUITERS")}</Link>
              </li> 
              <li>
              <Link style={{cursor:'pointer'}} to="about" offset={-76} spy={true} smooth={true} duration={100} activeClass={(active==="ABOUT US")?"active": ""}  onClick={()=> setActive("ABOUT US")}>{t("ABOUT US")}</Link>
              </li>
              <li>
              <Link style={{cursor:'pointer'}} to="services" offset={-76} spy={true} smooth={true} duration={100} activeClass={(active==="HEADHUNTING SERVICES")?"active": ""} onClick={()=> setActive("HEADHUNTING SERVICES")}>{t("HEADHUNTING SERVICES")}</Link>
              </li>
            </ul>
            <div className={(active==="REQUEST FOR DEMO")?"active-special speacialBtn-outsite d-flex justify-content-center align-items-center": "speacialBtn-outsite d-flex justify-content-center align-items-center"} onClick={()=> setActive("REQUEST FOR DEMO")} style={{cursor: "pointer",height :"76px"}}>
              <Link
              style={{cursor:'pointer'}}
              to = "request"
              offset={-76} spy={true} smooth={true} duration={100}
              className="specialBtn"
              >
              {t("Request For Demo")}
            </Link>
            </div>
            <div className="btn-language" onClick={changeLanguage} style={{cursor: "pointer"}}>
            {language}
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default NAV;

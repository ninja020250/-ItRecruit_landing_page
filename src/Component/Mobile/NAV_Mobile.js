import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import React, { useEffect, useState } from "react";

import $ from "jquery";
import Scroll from "react-scroll";
import { logoWhiteImg } from "../../data";
import { useTranslation } from "react-i18next";

var Link = Scroll.Link;

const NAV_Mobile = props => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState("VN");
  const [active, setActive] = useState("HOME");

  useEffect(() => {
    i18n.changeLanguage("EN");
    setLanguage("VN");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    var $root = $("html, body");

    $('a[href^="#"]').on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top - 76
          },
          100,
          function() {}
        );
      }
    });
  });
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
    if (window.scrollY > 0) {
      //   console.log(window.scrollY);
      var a = document.getElementsByClassName("main-nav")[0];
      a.style.backgroundColor = "#001222";
    } else {
      var a = document.getElementsByClassName("main-nav")[0];
      a.style.backgroundColor = "transparent";
      a.style.boxShadow = "unset";
    }
  };

  return (
    <div id="nav_mobile" onScroll={handleScroll} className="main-nav">
      <nav
        class="navbar navbar-expand-lg navbar-dark "
        style={{ padding: "0 0" }}
      >
        <a class="navbar-brand mt-2 ml-2" href="#">
          <img alt="img" src={logoWhiteImg}></img>
        </a>
        <div className="mr-2 mt-2 flex a-center">
          <div
            className="btn-language mr-3"
            onClick={changeLanguage}
            style={{ cursor: "pointer" , color: "#ffffff" }}
          >
            {language}
          </div>
          <button
            class="navbar-toggler "
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          class="collapse navbar-collapse "
          id="mobile_nav"
          style={{ background: "rgb(0, 18, 34)", color: "white" }}
        >
          <ul class="navbar-nav mr-auto">
            <li className="nav-item"     data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav">
              <Link
                style={{ cursor: "pointer" }}
                to="header-mobile"
                offset={0}
                spy={true}
                smooth={true}
                duration={100}
                activeClass={active === "HOME" ? "mobile-activate-li" : ""}
                onClick={() => setActive("HOME")}
              >
                {t("HOME")}
              </Link>
            </li>
            <li className="nav-item"
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav">
              <Link
                style={{ cursor: "pointer" }}
                to="candidate-mobile"
                offset={-76}
                spy={true}
                smooth={true}
                duration={100}
                activeClass={
                  active === "CANDIDATES" ? "mobile-activate-li" : ""
                }
                onClick={() => setActive("CANDIDATES")}
              >
                {t("CANDIDATES")}
              </Link>
            </li>
            <li className="nav-item"
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav">
              <Link
                style={{ cursor: "pointer" }}
                to="for-recruiters-mobile"
                offset={-76}
                spy={true}
                smooth={true}
                duration={100}
                activeClass={
                  active === "RECRUITERS" ? "mobile-activate-li" : ""
                }
                onClick={() => setActive("RECRUITERS")}
              >
                {t("RECRUITERS")}
              </Link>
            </li>
            <li className="nav-item"
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav">
              <Link
                style={{ cursor: "pointer" }}
                to="about"
                offset={-76}
                spy={true}
                smooth={true}
                duration={100}
                activeClass={active === "ABOUT US" ? "mobile-activate-li" : ""}
                onClick={() => setActive("ABOUT US")}
              >
                {t("ABOUT US")}
              </Link>
            </li>
            <li className="nav-item"
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav">
              <Link
                style={{ cursor: "pointer" }}
                to="services"
                offset={-76}
                spy={true}
                smooth={true}
                duration={100}
                activeClass={
                  active === "HEADHUNTING SERVICES" ? "mobile-activate-li" : ""
                }
                onClick={() => setActive("HEADHUNTING SERVICES")}
              >
                {t("HEADHUNTING SERVICES")}
              </Link>
            </li>
            <li className="nav-item"
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav">
              <div
                className={"request-btn d-flex justify-content-center align-items-center"}
                onClick={() => setActive("REQUEST FOR DEMO")}
              >
                <Link
                  style={{ cursor: "pointer" }}
                  to="request"
                  offset={-76}
                  spy={true}
                  smooth={true}
                  duration={100}
                  //   className="specialBtn"
                >
                  {t("Request For Demo")}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NAV_Mobile;

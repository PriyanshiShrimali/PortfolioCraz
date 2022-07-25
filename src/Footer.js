import React from "react";
import footerImg from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <a href="#Home">
      <img src={footerImg} alt="" className="footer__img pointer" /></a>
      <div class="social-container">
      <a href="https://github.com/PriyanshiShrimali"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.facebook.com"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com" 
        className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/webcrazcraft/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

</div>

      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright @ 2022 programmer Shrimali Priyanshi.All rights Reserved.
      </span>
    </div>
  );
}

export default Footer;

import React from "react";
import linkedIn from "../../assets/imgs/icon/linkedin-icon.svg";
import github from "../../assets/imgs/icon/github-icon-1.svg";
import twitter from "../../assets/imgs/icon/twitter-6.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div class="footer__contianer">
          <div class="footer__container--title">
            <a href="#home">Daniel Bedoya</a>
          </div>

          <div class="footer__container--networks">
            <a
              href="https://www.linkedin.com/in/j-daniel-bedoya"
              target="_blank"
            >
              <img src={linkedIn} alt="LinkedIn" />
            </a>
            <a href="https://github.com/J-Daniel-Bedoya" target="_blank">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://twitter.com/Danielforzz" target="_blank">
              <img src={twitter} alt="Instagram" />
            </a>
          </div>

          <div class="footer__contianer--copy">
            <span>Copyright © | Success for all</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

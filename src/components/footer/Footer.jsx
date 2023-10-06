import React from "react";
import linkedIn from "../../assets/imgs/icon/linkedin-icon.svg";
import github from "../../assets/imgs/icon/github-icon-1.svg";
import twitter from "../../assets/imgs/icon/twitter-6.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__container--title">
            <a href="#home">Daniel Bedoya</a>
          </div>

          <div className="footer__container--networks">
            <a href="mailto:jbedoyachavarriaga@gmail.com" target="_blank">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a
              href="https://www.facebook.com/daniel.bedoya.94695"
              className="buttons__networks--link"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.instagram.com/j_daniel_bedoya/"
              className="buttons__networks--link"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/j-daniel-bedoya"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/J-Daniel-Bedoya" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="footer__container--copy">
            <span>Copyright © | Success for all</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import linkedIn from "../../assets/imgs/icon/linkedin-icon.svg";
import github from "../../assets/imgs/icon/github-icon-1.svg";
import twitter from "../../assets/imgs/icon/twitter-6.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="contianer--footer">
          <div class="link_home">
            <a href="#home">Daniel Bedoya</a>
          </div>

          <div class="container_redes-footer">
            <a
              href="https://www.linkedin.com/in/jose-daniel-bedoya-chavarriaga-b9a8021b1/"
              target="_blank"
            >
              <img src={linkedIn} alt="LinkedIn" />
            </a>
            <a href="https://github.com/J-Daniel-Bedoya" target="_blank">
              <img src={github} alt="GitHub" />
            </a>
            <a href="#" target="_blank">
              <img src={twitter} alt="Instagram" />
            </a>
          </div>

          <div class="container_text--footer">
            <span>Copyright © | Coded with</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;

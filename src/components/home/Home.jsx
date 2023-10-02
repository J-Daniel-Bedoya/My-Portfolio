import React from "react";
import home from "../../assets/imgs/imgPersonal/selfie1.png";
// import linkedIn from "../../assets/imgs/icon/linkedin-icon.svg";
// import github from "../../assets/imgs/icon/github-icon-1.svg";
// import twitter from "../../assets/imgs/icon/twitter-6.svg";
// import imageLogo from "../../assets/imgs/icon/icon_DB.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container--info">
          <div className="info">
            <p className="info__text">
              Soy <span>Daniel</span>
            </p>
            <a
              href="https://certificates.academlo.com/en/verify/06546756257334"
              className="info__work"
              target="_blank"
            >
              Web Full-Stack developer
              <i class="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>

          {/* <div className="work"></div> */}

          <div className="text">
            <p>
              Desarrollador con experiencia en la creación de sitios web. Amante
              de los nuevos retos y en constante aprendizaje.
            </p>
          </div>

          <div className="buttons">
            <div className="buttons__networks">
              <a
                href="mailto:jbedoyachavarriaga@gmail.com"
                className="buttons__networks--link"
                target="_blank"
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/j-daniel-bedoya/"
                className="buttons__networks--link"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/J-Daniel-Bedoya/My-Portfolio"
                className="buttons__networks--link"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="buttons__contact">
              <a
                href="https://drive.google.com/file/d/1bwPl_oXwlIUJf89L9PNVV-CAR8CJYqig/view?usp=drive_link"
                className="buttons__contact--link buttons__contact--cv"
                target="_blank"
              >
                CV
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
              <a href="#contact" className="buttons__contact--link">
                ¡Contactame!
              </a>
            </div>
          </div>
        </div>

        <picture className="home__container--img" data-aos="zoom-in">
          <img src={home} alt="Ilustración mujer y plantas" />
        </picture>
      </div>

      {/* <div className="home__container--links">
        <a
          href="https://drive.google.com/file/d/1bwPl_oXwlIUJf89L9PNVV-CAR8CJYqig/view?usp=drive_link"
          target={"_blank"}
          className="header__logo"
        >
          <div style={{ backgroundImage: `url(${imageLogo})` }}></div>
        </a>
        <div className="links__page">
          <a href="https://www.linkedin.com/in/j-daniel-bedoya" target="_blank">
            <img src={linkedIn} alt="LinkedIn" className="icon-linkedin" />
          </a>
          <a href="https://github.com/J-Daniel-Bedoya" target="_blank">
            <img src={github} alt="GitHub" className="icon-github" />
          </a>
          <a href="https://twitter.com/Danielforzz" target={"_blank"}>
            <img src={twitter} alt="Instagram" className="icon-instagram" />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Home;

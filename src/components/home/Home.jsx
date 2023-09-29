import React from "react";
import home from "../../assets/imgs/imgPersonal/selfie.png";
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
            <p className="info__text1">¡Hola! Soy</p>
            <p className="info__text2">Daniel Bedoya</p>
          </div>

          <div className="work">
            <p className="work__text">Desarrollador web Full-Stack</p>
          </div>

          <div className="text">
            <p>
              Amante de los nuevos retos y hambriento de conocimiento. Creo en
              mí, y en que mis habilidades serán de mucha ayuda en tu empresa,
              creo firmemente que tengo el potencial suficiente para que le des
              al botón de contacto.
            </p>
          </div>

          <div className="button">
            <a href="https://drive.google.com/file/d/1bwPl_oXwlIUJf89L9PNVV-CAR8CJYqig/view?usp=drive_link">
              <button className="cv__button">Ver y/o Descargar CV</button>
            </a>
            <a href="#contacto">
              <button className="contact__button">¡Contactame!</button>
            </a>
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

import React from "react";
import home from "../../assets/imgs/imgPersonal/img1.png";
import linkedIn from "../../assets/imgs/icon/linkedin-icon.svg";
import github from "../../assets/imgs/icon/github-icon-1.svg";
import twitter from "../../assets/imgs/icon/twitter-6.svg";
import imageLogo from "../../assets/imgs/icon/icon_DB.png";

const Home = () => {

  return (
    <div className="home__container">
      <div className="home" id="home">
        <picture className="container_image-home" data-aos="zoom-in">
          <img
            className="image_home" 
            src={home}
            alt="Ilustración mujer y plantas"
          />
        </picture>

        <div className="home_info">
          <div className="container_text-info">
            <p className="home_text-1">¡Hola! Soy</p>
            <p className="home_text-2">Daniel Bedoya</p>
          </div>

          <div>
            <p className="home_text-3 text-type">
              Desarrollador web Full-Stack
            </p>
          </div>

          <div className="container_parrafo-info">
            <p>
            Amante de los nuevos retos y hambriento de conocimiento. Creo en mí, 
            y en que mis habilidades serán de mucha ayuda en tu empresa, creo 
            firmemente que tengo el potencial suficiente para que le des al botón de contacto.
            </p>
          </div>

          <div className="container_button">
            <a
              href="https://drive.google.com/file/d/1BDi2sUQKoZOx85qUabiqWMTqUhoG5LWh/view?usp=share_link"
              target="_blank"
            >
              <button className="cv_button">Ver y/o Descargar CV</button>
            </a>
            <a href="#contacto">
              <button className="contact_button">Contacto</button>
            </a>
          </div>
        </div>
      </div>
      <div className="links">
        <a href="https://drive.google.com/file/d/1hHJWzlyvPIzYCgPKokeyMCwztmt1ZkaN/view?usp=share_link" target={"_blank"} className="header__logo" >
          <div style={{backgroundImage: `url(${imageLogo})`}}></div>
        </a>
        <div className="links__page">
          <a
            href="https://www.linkedin.com/in/jose-daniel-bedoya-chavarriaga-b9a8021b1/"
            target="_blank"
          >
            <img src={linkedIn} alt="LinkedIn" className="icon-linkedin" />
          </a>
          <a href="https://github.com/J-Daniel-Bedoya" target="_blank">
            <img src={github} alt="GitHub" className="icon-github" />
          </a>
          <a
            href="https://twitter.com/Danielforzz" target={"_blank"}
          >
            <img src={twitter} alt="Instagram" className="icon-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

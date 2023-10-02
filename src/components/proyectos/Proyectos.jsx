import React from "react";
import portafolio from "../../../public/portafolio.json";

const Proyectos = () => {
  return (
    <div className="proyects">
      <h1>Proyectos</h1>
      <div className="proyects__container">
        {portafolio.proyectos.map((port, i) => (
          <div
            className="proyects__container--card"
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
            key={i}
          >
            <div className="card__img">
              <img src={port.imgPortafolio} alt="portfolio" />
              <div className="card__img--icons">
                {port.tectonologys.map((tect, i) => (
                  <img key={i} src={tect.img} alt={tect.name} />
                ))}
              </div>
            </div>
            <div className="card__container">
              <div className="card__container--text">
                <h2>{port.name}</h2>
                <p>{port.description}</p>
              </div>

              <div className="card__container--links">
                <a href={port.linkPagina} target="_blank" className="links">
                  <button className="links__button btn__demo">
                    <i className="fa-solid fa-eye"></i>
                    PAGE
                  </button>
                </a>

                <a href={port.linkRepo} target="_blank" className="links">
                  <button className="links__button btn__repo">
                    <i className="fa-brands fa-github"></i>
                    REPO
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;

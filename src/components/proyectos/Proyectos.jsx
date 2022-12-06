import React from "react";
import demoProyecto from "../../assets/imgs/icon/icon-demoProyecto.png";
import githubProyecto from "../../assets/imgs/icon/icon-githubProyecto.png";
import portafolio from '../../../public/portafolio.json';

const Proyectos = () => {
  return (
    <div>
      <div className="proyectos" id="proyectos">
        <h1>Proyectos</h1>
        <div className="cards_container--proyectos">
          {
            portafolio.proyectos.map(port => (
              <div
                className="cards--proyectos"
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div className="container_imgCard--proyectos">
                  <img src={port.imgPortafolio} alt="Proyecto: Portafolio" />
                </div>
                <div className="proyectos__cotainer--text">
                  <div className="proyectos__text--container">
                    <div className="text__portafolio">
                      <h2>{port.name}</h2>
                      <p>{port.description}</p>
                    </div>

                    <div className="container_btn--proyectos">
                      <a href={port.linkPagina} target="_blank">
                        <button className="proyectos__btn btn_demo">
                          <i className="fa-solid fa-eye"></i>
                          DEMO
                        </button>
                      </a>

                      <a
                        href={port.linkRepo}
                        target="_blank"
                      >
                        <button className="proyectos__btn btn_repo">
                          <i className="fa-brands fa-github"></i>
                          REPO
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Proyectos;

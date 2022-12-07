import React from "react";
import sobreMi from "../../assets/imgs/imgPersonal/img2.png";

const SobreMi = () => {
  return (
    <div>
      <section className="sobreMi" id="sobreMi">
        <h1>Sobre mí</h1>
        <div className="container_content-sobreMi">
          <div className="container_texto-sobreMi">
            <span className="title_sobreMi">Daniel Bedoya</span>
            <span className="texto_sobreMi">
              Soy desarrollador web, 100% dedicado y apasionado por el código, soy 500% proactivo 
              y me encantan los nuevos retos. Tengo alta capacidad de liderazgo y me gusta tratar 
              de cumplir siempre con el 100% de los nuevos retos que se me imponen. Tengo experiencia 
              en el ámbito profesional ya que he impartido clases de programación a más de 10 
              estudiantes de desarrollo web. Además, de haber tomado un curso de programación 
              online impartido por Academlo el cual duró un total de 5 meses. Actualmente tengo 
              un muy buen manejo de tecnologías tales como: React, Node.js y PostgresQL, etc.
            </span>
          </div> 

          <picture className="container_image-sobreMi" data-aos="fade-right">
            <img
              className="image_sobreMi"
              src={sobreMi}
              alt="Ilustración mujer y café"
            />
          </picture>
        </div>
      </section>
    </div>
  );
};

export default SobreMi;

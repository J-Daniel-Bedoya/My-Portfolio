import React, { useEffect, useState } from "react";
import proyectos from "../../../public/portafolio.json";

const Habilidades = () => {
  const [random, setRandom] = useState(null);
  useEffect(() => {
    const rand = Math.floor(Math.random() * 11);
    setTimeout(() => {
      setRandom(rand);
    }, 3000);
  }, [random]);

  return (
    <div>
      <div className="skills">
        <h1>Habilidades</h1>
        <div
          className="skills__container"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          {proyectos.imgTecnologys.map((img, i) => (
            <div
              className="skills__container--card"
              key={img}
              style={{ filter: i === random && "grayscale(0)" }}
            >
              <img
                src={img}
                alt="Icono de HTML"
                style={{ width: i === 11 && "7rem" }}
              />
              <p>{proyectos.tectonologys[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Habilidades;

import React, { useEffect } from "react";
import Contacto from "./components/contacto/Contacto";
import Footer from "./components/footer/Footer";
// import Habilidades from "./components/habilidades/Habilidades";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Nav";
import Proyectos from "./components/proyectos/Proyectos";
// import SobreMi from "./components/sobreMi/SobreMi";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      {/* <Nav /> */}
      <Home />
      {/* <SobreMi /> */}
      {/* <Habilidades /> */}
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;

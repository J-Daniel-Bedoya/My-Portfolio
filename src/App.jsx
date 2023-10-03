import React, { useEffect } from "react";
import Home from "./components/home/Home";
import Proyectos from "./components/proyectos/Proyectos";
import Contacto from "./components/contacto/Contacto";
// import Footer from "./components/footer/Footer";
// import Habilidades from "./components/habilidades/Habilidades";
// import Nav from "./components/navbar/Nav";
// import SobreMi from "./components/sobreMi/SobreMi";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main className="app">
      {/* <Nav /> */}
      <Home />
      {/* <SobreMi /> */}
      {/* <Habilidades /> */}
      <Proyectos />
      <Contacto />
      {/* <Footer /> */}
    </main>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import Contacto from './components/contacto/Contacto'
import Footer from './components/footer/Footer'
import Habilidades from './components/habilidades/Habilidades'
import Home from './components/home/Home'
import Nav from './components/navbar/Nav'
import Proyectos from './components/proyectos/Proyectos'
import SobreMi from './components/sobreMi/SobreMi'
import Aos from "aos";

function App() {
  const [interval, setInterval] = useState(true);
  useEffect(() => {

    Aos.init();
    window.addEventListener('load', () => {
      setInterval(false)
    })
  }, [])
  

  return (
    <div className="App">
      {
        interval ? (
          <div class="container--loader">
            <div class="loader"></div>
          </div>
        ) : (
          <>
            <Nav />
            <Home />
            <SobreMi />
            <Habilidades />
            <Proyectos />
            <Contacto />
            <Footer />
          </>
        )
      }
    </div>
  

)}

export default App

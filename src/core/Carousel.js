import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Item from "./Item";
import "./styles.css";
import portada3 from '../img/portada3.jpg';
import portada2 from '../img/portada2.jpg';


const Slider = () =>{

  return (
    <>
<Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100" id="imagenCarousel"
      src={portada2} style={{weidth:"500px"}}
      alt="Club Sport 3 de Julio"
    />
    <Carousel.Caption>
      <h1>El Super 3</h1>
      <h4>Tienes que luchar para alcanzar tu sueño. Tienes que sacrificarte y trabajar duro para lograrlo. Leo Messi</h4>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100" id="imagenCarousel"
      src={portada3} style={{weidth:"500px"}}
      alt="Cargando"
    />
    <Carousel.Caption>
      <h1>Somos un equipo</h1>
      <h4>Cuanto más difícil es la victoria, mayor es la felicidad de ganar. Pelé</h4>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
    </>
  )
}

export default Slider;


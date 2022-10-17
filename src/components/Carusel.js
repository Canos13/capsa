import React from 'react'
import _AmozocPerote from '../images/autopista-Amozoc-Perote.jpg'
import _autopistaamozoc from '../images/autopistaamozocperote140220.jpg'
import _areaamozoc from '../images/AEREAMOZOC.jfif'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Login.css';

const Carusel = () => {
  return (
      <Carousel className="shadow">
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100 _img_corousel"
              src={_areaamozoc}
              alt="First slide"
            />
            <Carousel.Caption className="glass">
              <h1>Área Amozoc</h1>
              <p>Esta carretera de altas especificaciones, que forma parte del denominado Corredor del Altiplano y del Proyecto Gran Visión.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100 _img_corousel"
              src={_autopistaamozoc}
              alt="Second slide"
            />
            <Carousel.Caption className="glass">
              <h3>Autopista Amozoc Perote</h3>
              <p>Inaugurada el 12 de noviembre de 2008 por el Ex-presidente de la República Felipe Calderón Hinojosa</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 _img_corousel"
              src={_AmozocPerote}
              alt="Third slide"
            />
            <Carousel.Caption className="glass text-dark">
              <h3>Autopista Amozoc Perote</h3>
              <p>
                El gobierno Federal de México invirtó dos mil seiscientos millones de pesos.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
  );
}

export default Carusel
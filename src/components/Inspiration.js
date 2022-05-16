import '../App.css';
import React from 'react'
import grace from '../assets/grace-hopper.jpg';
import johnson from '../assets/katherine-johnson.jpg';
import gates from '../assets/bill-gates.jpg';
import Carousel from 'react-bootstrap/Carousel';
const Inspiration = () => {
  return (
    <div id='Inspiration'>
      <h1 className="text-center">Inspiration</h1>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={grace}
              alt="A picture of Grace Hopper"
            />
            <Carousel.Caption>
              <h3>Grace Hopper</h3>
              <p>“A ship in port is safe, but that's not what ships are built for.”</p>
              <p>Image: Computer History Museum</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={johnson}
              alt="A picture of Katherine Johnson"
            />

            <Carousel.Caption>
              <h3>Katherine Johnson</h3>
              <p>"You lose your curiosity when you stop learning."</p>
              <p>Image: Nasa</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={gates}
              alt="A picture of Bill Gates"
            />

            <Carousel.Caption>
              <h3>Bill Gates</h3>
              <p>"I choose a lazy person to do a hard job. <br/>Because a lazy person will find an easy way to do it."</p>
              <p>Image: John Keatley/The Guardian</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        <div className="col-2"></div>
      </div>
      <br/>
    </div>
  )
}

export default Inspiration;

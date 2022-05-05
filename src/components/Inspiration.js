import '../App.css';
import React from 'react'
import grace from '../assets/grace-hopper.jpg';
import johnson from '../assets/katherine-johnson.jpg';
import gates from '../assets/bill-gates.jpg';

const Inspiration = () => {
  return (
    <div id='Inspiration'>
      <h1 className="text-center">Inspiration</h1>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div id="item1" className="carousel-item active">
                <img src={grace} className="d-block w-100" alt=" A picture of Grace Hopper"/>
                <div className="carousel-caption d-md-block">
                  <p>“A ship in port is safe, but that's not what ships are built for.”</p>
                  <h5>Grace Hopper</h5>
                </div>
              </div>
              <div id="item2" className="carousel-item">
                <img src={johnson} className="d-block w-100" alt="A Katherine Johnson"/>
                <div className="carousel-caption d-md-block">
                  <p>"You lose your curiosity when you stop learning."</p>
                  <h5>Katherine Johnson</h5>
                </div>
              </div>
              <div id="item3" className="carousel-item">
                <img src={gates} className="d-block w-100" alt="A picture of Bill Gates"/>
                <div className="carousel-caption d-md-block">
                  <p>"I choose a lazy person to do a hard job. <br/>Because a lazy person will find an easy way to do it."</p>
                  <h5>Bill Gates</h5>
                </div>
              </div>          
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
      <br/>
    </div>
  )
}

export default Inspiration;

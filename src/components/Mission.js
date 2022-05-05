import '../App.css';
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import coding from '../assets/coding.jpg';

const Mission = () => {
  return (
    <div id='Mission'>
      <Row>
        <h1 className="col-12 text-center">Mission</h1>
      </Row>
      <Row className="align-items-center">
        <img src={coding} alt="Image of someone coding on a laptop" className="col-md-6 text-center"/>
        <p className="col-md-6 ">My mission is to become a better programmer and create projects that help others in life.</p>
      </Row>
    </div>
  )
}

export default Mission;

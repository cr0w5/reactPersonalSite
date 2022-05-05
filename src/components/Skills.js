import '../App.css';
import React from 'react'
import Row from 'react-bootstrap/Row';
import htmlLogo from '../assets/htmlLogo.png';
import cssLogo from '../assets/cssLogo.png';
import bootstrapLogo from '../assets/bootstrap-logo.jpeg';
import javaLogo from '../assets/javalogo.png';


const Skills = () => {
  return (
    <div id='Skills'>
      <Row>
        <h1 className="col-12 text-center">Skills</h1>
      </Row>
      <div className="row align-items-center allSkills">
        <div className="htmlSkill col-lg-3 col-md-6 col-sm-12 text-center">
          <img src={htmlLogo} alt="html logo"/>
          <p className="img-text">Structuring the web's content using modern semantic HTML </p>
        </div>
        <div className="cssSkill col-lg-3 col-md-6 col-sm-12 text-center">
          <img src={cssLogo} alt="css logo" />
          <p className="img-text">Creating user friendly web designs and interactions using CSS </p>
        </div>
        <div className="bootSkill col-lg-3 col-md-6 col-sm-12 text-center">
          <img src={bootstrapLogo} alt="bootstrap logo"/> 
          <p className="img-text">Rapidly creating responsive websites using popular framework. </p>
        </div>
        <div className="javaSkill col-lg-3 col-md-6 col-sm-12 text-center">
          <img src={javaLogo} alt="java logo"  />
          <p className="img-text">Coding using an object-oriented language. </p>
        </div>
      </div>
    </div>
  )
}

export default Skills;

import '../App.css';
import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>
      <div className="row">
        <h1 className="col-12 text-center">Contact</h1>
      </div>
      <div className="row icon-links">
        <div className="col-sm-12 col-md-4 text-center">
          <a href="https://www.linkedin.com/">
            <i className="bi bi-linkedin"></i></a>   
        </div>
        <div className="col-sm-12 col-md-4 text-center">
          <a href="https://github.com/">
            <i className="bi bi-github"></i></a>   
        </div>
        <div className="col-sm-12 col-md-4 text-center">
          <a href="mailto:jennywong500@gmail.com">
            <i className="bi bi-envelope"></i></a>   
        </div>   
      </div>
    </div>
  )
}

export default Contact;

import React from 'react';
import '../css/hero.css';
// import herobanner from '../assets/images/hero-banner.jpg';
// import rotateimage from '../assets/images/rotate-img.png';
import herobanner from '../assets/images/2.jpg';
import 'ionicons';


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-banner">
          <img src={herobanner} alt="Aditya's Photo" className="img-cover" />
          <div className="elem elem-1"><p className="elem-title">2</p><p className="elem-text">Years of Success</p></div>
          <div className="elem elem-2"><p className="elem-title">40+</p><p className="elem-text">Projects Completed</p></div>
          <div className="elem elem-3"><ion-icon name="trophy"></ion-icon></div>
          {/* <img src={rotateimage} alt="I'm developer from New York" className="rotate-img" /> */}
        </div>

        <div className="hero-content">
          <h2 className="hero-title">
            <span>Hello I'm</span>
            <strong>Aditya Dey</strong> Building Scalable Applications Powered by AI 
          </h2>
          <p className="hero-text">A full stack web developer experienced in creating scalable applications using MERN, cloud services, and AI. From neural networks to computer vision, I integrate machine learning to unlock new possibilities.</p>

          <div className="btn-group">
            <a href="#contact" className="btn btn-primary blue">Get a Quote</a>
            <a href="#about" className="btn btn-primary red">About Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

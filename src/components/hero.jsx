import React from 'react';
import '../css/hero.css';
import herobanner from '../assets/images/aditya.jpg';
import 'ionicons';
import Typewriter from 'typewriter-effect'; // Import Typewriter

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-banner">
          <img src={herobanner} alt="Aditya's Photo" className="img-cover" />
          <div className="elem elem-1"><p className="elem-title">2</p><p className="elem-text">Years of Success</p></div>
          <div className="elem elem-2"><p className="elem-title">40+</p><p className="elem-text">Projects Completed</p></div>
          <div className="elem elem-3"><ion-icon name="trophy"></ion-icon></div>
          {/* Removed the rotating image */}
        </div>

        <div className="hero-content">
          <h2 className="hero-title">
            <span style={{ fontFamily: 'Arial, sans-serif' }}>Hello I am</span>
            <strong style={{ fontFamily: 'Segoe UI, monospace' }}>Aditya Dey</strong>
          </h2>
          <p className="hero-text">
            <Typewriter
              options={{
                strings: [
                  '<span style="font-family: Verdana, sans-serif;">I am a Python Developer with a growing passion for solving real-world problems using AI and Machine Learning. I focus on developing intelligent solutions that blend code with creativity. My academic foundation has given me the technical depth and curiosity to continuously explore the evolving world of data and algorithms.</span>',
                ],
                autoStart: true,
                loop: true,
                delay: 30, // Adjusted delay for better readability
                deleteSpeed: 8, // Adjusted delete speed
              }}
            />
          </p>
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

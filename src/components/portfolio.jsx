import React from 'react';
import "../css/portfolio.css";

import portfolio1 from '../assets/images/portfolio-1.jpg';
import portfolio2 from '../assets/images/portfolio-2.jpg';
import portfolio3 from '../assets/images/portfolio-3.jpg';
import portfolio4 from '../assets/images/portfolio-4.jpg';

export default function Portfolio() {
  const projects = [
    { title: "Customer Segmentation", image: portfolio1, platform: "Machine Learning" },
    { title: "Pipeline", image: portfolio2, platform: "pipelining" },
    { title: "Random Project", image: portfolio3, platform: "Experiment" },
    { title: "Full MERN ", image: portfolio4, platform: "Web Development" },
  ];

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <p className="section-subtitle" id="section-subtitle"></p>
        <h2 className="h2 section-title">My Amazing Works</h2>
        <p className="section-text">
          Some of my key projects in web development, machine learning, and beyond.
        </p>
        <ul className="portfolio-list">
          {projects.map((project, index) => (
            <li key={index}>
              <a
                href="#"
                className="portfolio-card"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="card-content">
                  <p className="card-subtitle">{project.platform}</p>
                  <h3 className="h3 card-title">{project.title}</h3>
                  <span className="btn-link">
                    <span>View Project</span>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

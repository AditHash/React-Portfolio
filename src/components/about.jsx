import React from "react";
import {
  IoLogoReact,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoDocker,
  IoLogoAndroid,
  IoLogoAmazon,
} from "react-icons/io5";
import aboutbanner from "../images/about-banner.jpg";
import absoluteimage from "../images/absolute-image.jpg";
import "../css/about.css";
import { SiKubernetes, SiTerraform } from "react-icons/si";

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img src={absoluteimage} alt="Aditya's Photo" className="img-cover" />
          <img src={aboutbanner} alt="Aditya's Photo" className="abs-img" />

          {/* Icons with React Icons */}
          <div className="abs-icon abs-icon-1">
            <IoLogoReact />
          </div>
          <div className="abs-icon abs-icon-2">
            <IoLogoNodejs />
          </div>
          <div className="abs-icon abs-icon-3">
            <IoLogoPython />
          </div>
          <div className="abs-icon abs-icon-4">
            <IoLogoDocker />
          </div>
          <div className="abs-icon abs-icon-5">
            <IoLogoAndroid />
          </div>
          <div className="abs-icon abs-icon-6">
            <IoLogoAmazon />
          </div>
          <div className="abs-icon abs-icon-7">
            <SiKubernetes />
          </div>
          <div className="abs-icon abs-icon-8">
            <SiTerraform />
          </div>
        </figure>

        <div className="about-content">
          <p className="section-subtitle">
            Hi, I'm a Developer
          </p>
          <h2 className="h2 section-title">
            Driving Innovation with AI & Scalable Solutions
          </h2>

          {/* AI/ML Focus */}
          <p className="section-text">
            I specialize in building AI-powered applications that utilize
            machine learning and generative AI to deliver adaptive, intelligent
            solutions. My work spans across NLP, computer vision, and predictive
            analytics, empowering businesses to make data-driven decisions and
            automate processes.
          </p>

          {/* Development and Deployment */}
          <p className="section-text">
            In addition to my AI expertise, I build scalable web and mobile
            applications using the MERN stack and Flutter. I also design robust
            cloud architectures with AWS and ensure seamless deployments using
            Docker and Kubernetes, ensuring scalability and performance in
            production environments.
          </p>

          <a href="#portfolio" className="btn btn-primary blue">
            Explore My Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

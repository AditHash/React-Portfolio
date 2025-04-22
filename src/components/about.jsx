import React from "react";
import {
  SiPython,
  SiNodedotjs,
  SiDocker,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiKeras,
  SiPandas,
  SiOpencv,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { FaAws, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Added social icons
import aboutbanner from "../assets/images/aditya.jpg";
import absoluteimage from "../assets/images/blog-1.jpg";
import "../css/about.css";


function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <figure className="about-banner">
          <div className="banner-images">
            <img src={absoluteimage} alt="Aditya's Photo" className="img-cover" />
            <img src={aboutbanner} alt="Aditya's Photo" className="abs-img" />
          </div>

          {/* Blog or Gallery Link */}
          <div className="about-link">
            <h3>Explore More</h3>
            <p>Check out my blog for insights and updates, or visit my personal gallery to see my creative side.</p>
            <div className="btn-container">
              <a href="https://yourblogurl.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit My Blog
              </a>
              <a href="https://yourgalleryurl.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View My Gallery
              </a>
            </div>

            {/* Social Links Section */}
            <div className="social-connect">
              <h3>Let's Connect!</h3>
              <p>Feel free to reach out to me on any of these platforms:</p>
              <div className="social-links">
                <a
                  href="https://github.com/AditHash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-dey-b533681b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </figure>

        <div className="about-content">
          <p className="section-subtitle">
            About Me
          </p>
          <h2 className="h2 section-title">
            Hi, I'm a Backend Developer with a passion for ML
          </h2>

          <p className="section-text">
            I specialize in building robust backend systems using Python and Node.js that power modern applications. From designing RESTful APIs to implementing microservices, I ensure seamless integration, high performance, and scalability with containers. My expertise extends to database optimization and cloud-based architectures, delivering reliable solutions for complex business needs.
          </p>

          <p className="section-text">
            My passion lies in leveraging ML, DL, NLP, and Gen AI to solve real-world problems. I develop intelligent systems for tasks like sentiment analysis, text summarization, and chatbot development. By combining machine learning with cutting-edge NLP techniques, I create solutions that enhance user experiences and drive innovation.
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

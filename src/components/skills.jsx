import React, { useEffect } from "react";
import "../css/skills.css";
import {
  FaPython,
  FaReact,
  FaDocker,
  FaNode,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJava
} from "react-icons/fa";
import {
  SiFlutter,
  SiKubernetes,
  SiTerraform,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiBootstrap
} from "react-icons/si";

const skillsData = [
  { name: "React.js", icon: <FaReact color="#61DBFB" />, category: "Front-End" },
  { name: "Flutter", icon: <SiFlutter color="#02569B" />, category: "Front-End" },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" />, category: "Front-End" },
  { name: "CSS", icon: <FaCss3Alt color="#264DE4" />, category: "Front-End" },
  { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" />, category: "Front-End" },
  { name: "Node.js", icon: <FaNode color="#68A063" />, category: "Back-End" },
  { name: "Python", icon: <FaPython color="#3776AB" />, category: "Back-End" },
  { name: "Java", icon: <FaJava color="#007396" />, category: "Back-End" },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" />, category: "Back-End" },
  { name: "MySQL", icon: <SiMysql color="#4479A1" />, category: "Databases" },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" />, category: "Databases" },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" />, category: "Databases" },
  { name: "AWS", icon: <FaAws color="#FF9900" />, category: "Cloud" },
  { name: "Docker", icon: <FaDocker color="#2496ED" />, category: "DevOps" },
  { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" />, category: "DevOps" },
  { name: "Terraform", icon: <SiTerraform color="#623CE4" />, category: "DevOps" },
  { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" />, category: "Machine Learning" },
  { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" />, category: "Machine Learning" }
];

const categories = [...new Set(skillsData.map(skill => skill.category))];

export default function Skills() {
  useEffect(() => {
    const skillsSection = document.querySelectorAll(".skills-items");
    skillsSection.forEach(section => {
      section.addEventListener("scroll", () => {
        const maxScroll = section.scrollWidth - section.clientWidth;
        if (section.scrollLeft === maxScroll) {
          section.scrollLeft = 0; // Reset to beginning for cyclic scroll
        }
      });
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-grid">
          {categories.map((category, index) => (
            <div className="skills-category" key={index}>
              <h3 className="category-title">{category}</h3>
              <div className="skills-items">
                {skillsData.filter(skill => skill.category === category)
                  .map((skill, idx) => (
                    <div className="skills-item" key={idx}>
                      <div className="skills-icon">{skill.icon}</div>
                      <p className="skills-title">{skill.name}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

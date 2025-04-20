import React, { useEffect, useState } from "react";
import "../css/skills.css";
import {
  FaPython,
  FaReact,
  FaDocker,
  FaNode,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap
} from "react-icons/fa";
import {
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiCplusplus,
  SiFlask,
  SiFastapi,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiNumpy
} from "react-icons/si";

const skillsData = [
  { name: "React.js", icon: <FaReact color="#61DBFB" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264DE4" /> },
  { name: "Node.js", icon: <FaNode color="#68A063" /> },
  { name: "Nest.js", icon: <SiNestjs color="#E0234E" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Redis", icon: <SiRedis color="#DC382D" /> },
  { name: "AWS", icon: <FaAws color="#FF9900" /> },
  { name: "Docker", icon: <FaDocker color="#2496ED" /> },
  { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
  { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" /> },
  { name: "Keras", icon: <SiKeras color="#D00000" /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn color="#F7931E" /> },
  { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" /> },
  { name: "Pandas", icon: <SiPandas color="#150458" /> },
  { name: "NumPy", icon: <SiNumpy color="#013243" /> },
  { name: "LangChain", icon: <SiLangchain color="#2B6CB0" /> },
  { name: "Flask", icon: <SiFlask color="#000000" /> },
  { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
  { name: "DSA", icon: <FaPython color="#3776AB" /> } // Placeholder icon for DSA
];

export default function Skills() {
  const [randomizedSkills, setRandomizedSkills] = useState([]);

  useEffect(() => {
    // Randomize the skillsData array
    const shuffledSkills = [...skillsData].sort(() => Math.random() - 0.5);
    setRandomizedSkills(shuffledSkills);

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
          {randomizedSkills.map((skill, index) => (
            <div className="skills-item" key={index}>
              <div className="skills-icon">{skill.icon}</div>
              <p className="skills-title">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "../css/exp.css";
import { FaAws, FaMicrosoft, FaGoogle, FaIndustry } from "react-icons/fa"; // Changed FaSap to FaIndustry

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "February 2024",
    logo: <FaAws color="#FF9900" size={30} />, // AWS orange color
  },
  {
    title: "AWS Certified AI Practitioner",
    organization: "Amazon Web Services",
    date: "September 2024",
    logo: <FaAws color="#FF9900" size={30} />,
  },
  {
    title: "AWS Certified Developer Associate",
    organization: "Amazon Web Services",
    date: "September 2024",
    logo: <FaAws color="#FF9900" size={30} />,
  },
  {
    title: "AWS Certified Machine Learning Engineer Associate",
    organization: "Amazon Web Services",
    date: "September 2024",
    logo: <FaAws color="#FF9900" size={30} />,
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    organization: "Microsoft",
    date: "September 2024",
    logo: <FaMicrosoft color="#0078D4" size={30} />, // Microsoft blue
  },
  {
    title: "Microsoft Certified: Power Platform Fundamentals",
    organization: "Microsoft",
    date: "September 2024",
    logo: <FaMicrosoft color="#0078D4" size={30} />,
  },
  {
    title: "Introduction to SAP S/4HANA Development",
    organization: "SAP",
    date: "September 2022",
    logo: <FaIndustry color="#0FAAFF" size={30} />, // Replaced FaSap with FaIndustry
  },
  {
    title: "Google IT Automation with Python",
    organization: "Google",
    date: "August 2022",
    logo: <FaGoogle color="#DB4437" size={30} />, // Google red
  },
];

const workExperience = [
  {
    title: "Machine Learning Engineer - Intern",
    company: "Prodigy Infotech",
    period: "Aug 2023 - Sep 2023",
    description: `Implemented supervised machine learning models, including regression and classification algorithms.`,
  },
  {
    title: "Cloud Engineer",
    company: "Workmates Core2Cloud Solution Private Limited",
    period: "Dec 2023 - Apr 2024",
    description: `Designed and managed cloud-based solutions using AWS services like EC2, S3, RDS, and Lambda.`,
  },
  {
    title: "Cloud Developer",
    company: "Workmates Core2Cloud Solution Private Limited",
    period: "Apr 2024 - Present",
    description: `Architected backend services using Python (Flask, FastAPI) and Node.js, integrating them with modern cloud platforms.`,
  },
];

export default function Exp() {
  return (
    <section className="exp" id="experience">
      <div className="container">
        {/* Certifications Section */}
        <div className="certifications">
          <h2 className="section-title">Certifications</h2>
          <div className="certification-list">
            {certifications.map((cert, index) => (
              <div className="certification-item" key={index}>
                <div className="cert-logo">{cert.logo}</div>
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-org">{cert.organization}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        {/* Work Experience Section */}
<div className="work-experience">
  <h2 className="section-title">Work Experience</h2>
  <div className="timeline">
    {workExperience.map((work, index) => (
      <div className="timeline-item" key={index}>
        <div className="timeline-marker"></div>
        <div className="timeline-content">
          <h3 className="work-title">{work.title}</h3>
          <p className="work-company">{work.company}</p>
          <p className="work-period">{work.period}</p>
          <ul className="work-desc">
            <li>{work.description}</li>
          </ul>
        </div>
      </div>
    ))}
    <div className="timeline-line"></div> {/* Add the timeline line */}
  </div>
</div>

      </div>
    </section>
  );
}

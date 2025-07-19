import React from 'react';
import './EducationalResources.css';
import { FaFileAlt, FaClipboardList, FaBook, FaFilePdf, FaLightbulb, FaChalkboardTeacher, FaPlus } from 'react-icons/fa';

const resourceTiles = [
  { title: 'Question Papers', icon: <FaFileAlt /> },
  { title: 'Exam Notes', icon: <FaClipboardList /> },
  { title: 'Assignments', icon: <FaBook /> },
  { title: 'Lecture PDFs', icon: <FaFilePdf /> },
  { title: 'Project Ideas', icon: <FaLightbulb /> },
  { title: 'Guidelines', icon: <FaChalkboardTeacher /> },
  { title: 'Syllabus', icon: <FaClipboardList /> },
];

const EducationalResources = () => {
  return (
    <section className="edu-container">
      <div className="edu-sidebar-title">Explore<br />Educational<br />Resources</div>
      <div className="edu-tile-grid">
        {resourceTiles.map((item, index) => (
          <div key={index} className="edu-tile">
            <div className="tile-top-right"><FaPlus /></div>
            <div className="tile-icon">{item.icon}</div>
            <h3 className="tile-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationalResources;

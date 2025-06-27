// src/components/layouts/body/section/EducationalResources.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EducationalResources.css';
import { FaFilePdf } from 'react-icons/fa';

const EducationalResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/libraries');
        setResources(res.data);
      } catch (err) {
        console.error('Error fetching resources:', err);
      }
    };

    fetchResources();
  }, []);

  return (
    <section className="edu-resources-section">
      <h2 className="edu-section-title">Explore Educational Resources</h2>
      <div className="edu-resources-grid">
        {resources.map(resource => (
          <div className="edu-card" key={resource._id}>
            <div className="edu-icon">
              <FaFilePdf size={32} />
            </div>
            <div className="edu-content">
              <h3>{resource.title}</h3>
              <p className="edu-type">{resource.type.toUpperCase()}</p>
              <p className="edu-desc">{resource.description}</p>
              <p className="edu-by">Uploaded by: {resource.uploadedBy?.name || 'Unknown'}</p>
              <a
                href={`http://localhost:3000${resource.fileUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="edu-download"
              >
                View PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationalResources;

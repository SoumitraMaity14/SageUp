import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RecommendedSubjects.css';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const RecommendedSubjects = () => {
  const [topSubjects, setTopSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/subjects');

        const grouped = {
          beginner: null,
          intermediate: null,
          advanced: null
        };

        for (let subject of res.data) {
          const level = subject.level;
          if (!grouped[level]) {
            grouped[level] = subject; // take first found subject per level
          }
        }

        const top = Object.values(grouped).filter(Boolean); // remove nulls
        setTopSubjects(top);
      } catch (err) {
        console.error('Error fetching subjects:', err);
      }
    };

    fetchSubjects();
  }, []);

  const levelColors = {
    beginner: 'left-border-beginner',
    intermediate: 'left-border-intermediate',
    advanced: 'left-border-advanced'
  };

  return (
    <section className="recommended-subjects">
      <div className="section-heading">
      <h2 >Course offered</h2>
      <p>Explore our top subjects tailored for your learning journey</p>
      </div>
      <div className="subject-grid">
        {topSubjects.map((subject) => (
          <div
            key={subject._id}
            className={`subject-card ${levelColors[subject.level]}`}
          >
            <h3>{subject.name}</h3>
            <p className='subject-category'>{subject.category}</p>
            <p className="sub-info"><FaMapMarkerAlt /> {subject.location || 'N/A'}</p>
            {subject.availability?.days?.length > 0 && (
              <p className="sub-info">
                <FaClock /> {subject.availability.days.join(', ')} ({subject.availability.timeSlots?.join(', ')})
              </p>
            )}
            <p className="created-by">By {subject.user?.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedSubjects;

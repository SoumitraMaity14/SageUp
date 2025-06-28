import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaUserGraduate } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { GiTeacher } from "react-icons/gi";
import './Profile.css';

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/profiles');
        setProfiles(res.data.profiles);
      } catch (err) {
        console.error('Error fetching profiles:', err.message);
      }
    };
    fetchProfiles();
  }, []);

  return (
    <section className="recommendations">
      <div className="container">
        <div className="section-heading">
          <h2>Find the Right Institute</h2>
          <p>Connect with trusted educators and grow your future</p>
        </div>
        <div className="institutes-grid">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile._id}
              className="institute-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card-img">{profile.user?.name || 'Profile'}</div>
              <div className="card-content">
                <h3 style={{ color: 'black' }}>{profile.user?.name}</h3>
                <div className="card-meta">
                  <div><FaMapMarkerAlt /> {profile.location}</div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#ff4545" />
                    ))}
                  </div>
                </div>
                <div className="experience-heading">
                  <strong>
                    <MdWork style={{ marginRight: '5px' }} />
                    <span> {profile.experience || 0}+ yrs</span>
                  </strong>
                </div>
                <p className="short-description">{profile.description}</p>
                <div className="card-footer">
                  <div className="price">
                    <GiTeacher style={{
                      padding: '5px',
                      backgroundColor: '#E2E4EE',
                      borderRadius: '4px',
                      marginRight: '5px'
                      
                    }} />

                    {profile.type.replace('_', ' ')}
                  </div>
                  <button className="view-profile-btn">
                    <FaUserGraduate /> View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;

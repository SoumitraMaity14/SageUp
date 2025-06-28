import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaStar,
  FaBookOpen,
  FaLaptopCode,
} from 'react-icons/fa';
import './Features.css';

const features = [
  { icon: <FaMapMarkerAlt color='#f4dfbd'/>, title: 'Location', desc: 'Conveniently located institutes near you' },
  { icon: <FaStar color='#f4dfbd'/>, title: 'Ratings', desc: 'Top-rated by thousands of students' },
  { icon: <FaBookOpen color='#f4dfbd'/>, title: 'Courses', desc: 'Diverse courses for all career paths' },
  { icon: <FaLaptopCode color='#f4dfbd'/>, title: 'Online', desc: 'Access learning from anywhere' },
];

const Features = () => {
  return (
    <section className="features">
      <div className="section-heading">
        <h2>Why Choose SageUp?</h2>
        <p>
          We provide the best platform to discover and connect with top
          coaching institutes
        </p>
      </div>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon-circle">{feature.icon}</div>
            <div>
              <h3>{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
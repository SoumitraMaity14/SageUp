import './Service.css'
import skillDevelopmentImg from '../../../../assets/skill-development-image.jpg';
import onlineTutoringImg from '../../../../assets/online-tutoring.jpg';
import careerCounselingImg from '../../../../assets/career-counseling.jpg';
import examPreparationImg from '../../../../assets/exam-preparation-image.jpg';

const educationServices = [
  {
    title: "Online Tutoring",
    description:
      "Connect with expert tutors for personalized online learning sessions across various subjects and grade levels.",
    image: onlineTutoringImg,
  },
  {
    title: "Exam Preparation",
    description:
      "Comprehensive coaching and resources to help students excel in board exams, entrance tests, and competitive assessments.",
    image: examPreparationImg,
  },
  {
    title: "Skill Development",
    description:
      "Enhance your skills with specialized courses in coding, communication, and other essential areas for academic and career growth.",
    image: skillDevelopmentImg,
  },
  {
    title: "Career Counseling",
    description:
      "Get expert guidance on course selection, career paths, and higher education opportunities tailored to your interests.",
    image: careerCounselingImg,
  },
];

const ServicesSection = () => {
  return (
    <section className="cleaning-section">
      <div className="intro">
        <h2>Trusted Cleaning for Every Space</h2>
        <p>
          Explore our wide range of cleaning services for residential,
          commercial, and post-renovation needs.
        </p>
      </div>

      <div className="services-grid">
        {educationServices.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="cta-button">
        <button>Explore All Services</button>
      </div>
    </section>
  );
};

export default ServicesSection


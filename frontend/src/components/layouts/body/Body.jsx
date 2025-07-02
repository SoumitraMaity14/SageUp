import './Body.css';

import Banner from './section/Banner.jsx';
import EducationalResources from './section/EducationalResources.jsx';
import Profile from './section/Profile.jsx';
import Features from './section/Features.jsx';
import RecommendedSubjects from './section/RecommendedSubjects.jsx';
import Testimonial from './section/Testimonial.jsx';
import Service from './section/Service.jsx';
const Body = () => {
    return (
       <div className="body-container">
       <Banner/>
       <Features/>
       <Profile/>
       <Service/>
       <RecommendedSubjects/>
       <EducationalResources/>
       <Testimonial/>
       
       </div>

    );
};

export default Body;
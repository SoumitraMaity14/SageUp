import Banner from './section/Banner.jsx';
import EducationalResources from './section/EducationalResources.jsx';
import Profile from './section/Profile.jsx';
import Features from './section/Features.jsx';
import RecommendedSubjects from './section/RecommendedSubjects.jsx';
import ServicesSection from './section/service.jsx';
const Body = () => {
    return (
        <>
            <Banner />
            <Features />
            <Profile />
            <RecommendedSubjects />
            <EducationalResources />
            <ServicesSection />
        </>
    );
};

export default Body;
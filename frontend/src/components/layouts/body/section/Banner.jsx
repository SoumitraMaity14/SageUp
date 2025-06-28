import { motion } from "framer-motion";
import "./Banner.css";

import MainImg from "../../../../assets/banner.jpg";
import student1 from "../../../../assets/student1.jfif";
import student2 from "../../../../assets/student2.jpg";
import student3 from "../../../../assets/student3.webp";
import student4 from "../../../../assets/student4.jfif";

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="left-content">
                <h1>
                    START A CAREER. <br /> HIRE A STAR.
                </h1>
                <p>
                    We bring talented young adults and top companies together to launch
                    careers, power business, and build community.
                </p>
                <div className="buttons">
                    <button className="btn-primary">BECOME A STUDENT</button>
                    <button className="btn-secondary">
                        <span className="play-icon">▶</span> PLAY VIDEO
                    </button>
                </div>
            </div>

            <div className="right-content">
                <motion.div
                    className="main-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={MainImg} alt="Main Student" />
                </motion.div>

                <motion.img
                    className="circle-img img1"
                    src={student1}
                    alt="Student"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                />
                <motion.img
                    className="circle-img img2"
                    src={student2}
                    alt="Student"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                />
                <motion.img
                    className="circle-img img3"
                    src={student3}
                    alt="Student"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                />
                <motion.img
                    className="circle-img img4"
                    src={student4}
                    alt="Student"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                />

                <div className="background-shapes">
                    <div className="shape shape1"></div>
                    <div className="shape shape2"></div>
                    <div className="shape shape3"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

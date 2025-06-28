// Testimonial.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Testimonial.css";

const testimonials = [
  {
    text: `They recently completed my business website, and I couldn't be happier with the results...`,
    name: "Robert Ms",
    role: "creative design",
    img: "/images/robert.png",
  },
  {
    text: `I had a fantastic experience creating my business website with this company...`,
    name: "Cherry Mukherjee",
    role: "creative design",
    img: "/images/chery mukherji.png",
  },
  {
    text: `Disciplined job and are ethically trustworthy. The team is always available...`,
    name: "Rosanna M",
    role: "creative design",
    img: "/images/Rosanna.png",
  },
  {
    text: `I recently had the pleasure of working with this excellent designing and development company...`,
    name: "Samuel Watson",
    role: "creative design",
    img: "/images/samuel watson.png",
  },
  {
    text: `I have been working with Ahaan Software Consulting for more than 2 years...`,
    name: "Martin George",
    role: "creative design",
    img: "/images/martin.png",
  },
  {
    text: `Our marketing services are exceptional and affordable, delivering tailored solutions...`,
    name: "Jimmy Thomas",
    role: "creative design",
    img: "/images/jimmy Thomas.png",
  },
];

const Testimonial = () => {
  return (
    <>
    <div className="section-heading">
            <h2>What Our Clients Say</h2>
            <p>We take pride in delivering exceptional service and results</p>
        </div>
    <section className="testimonial">
        
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="allslide">
            <motion.div
              className="testimonialBox"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1 * (index % 3),
              }}
            >
              <img src="/images/lq-2.png" alt="quote" className="quote" />
              <div className="content">
                <p>{item.text}</p>
                <div className="details">
                  <div className="imgBx">
                    <img src={item.img} alt={item.name} />
                    <h3>
                      {item.name}
                      <br />
                      <span>{item.role}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </>
  );
};

export default Testimonial;

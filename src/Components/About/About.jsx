
import React from 'react';
import { motion } from 'framer-motion';
import './about.scss';

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const About = () => {
  return (
    <section className="about">
      <div className="secContainer">
        <motion.h2 
          className="title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <motion.div 
          className="content grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Video Section */}
          <motion.div className="videoSection" variants={itemVariants}>
            <div className="videoWrapper">
              <video 
                src="https://videos.pexels.com/video-files/855916/855916-hd_1920_1080_30fps.mp4" 
                controls 
                autoPlay 
                muted 
                loop 
                className="video"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div className="textSection" variants={itemVariants}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Welcome to Dessa Valley, your ultimate travel companion. Explore the world with us 
              and discover unforgettable experiences tailored just for you. Let’s make memories 
              together and bring your travel dreams to life.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              At Dessa Valley, we prioritize comfort, safety, and convenience, ensuring that your 
              journey is as enjoyable as your destination.
            </motion.p>
            
            <motion.button 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Learn More
              <span className="arrow">→</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

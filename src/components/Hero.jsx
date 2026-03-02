import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

import girlPhoto from '../assets/girl.png';
import girlPhotoHover from '../assets/girl2.png'; 

const Hero = () => {
  const { t } = useAppContext();
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="hero-subtitle">
            {t.hero.greeting}
          </motion.span>

          <motion.h1 variants={itemVariants} className="hero-title">
            {t.hero.title}<span className="dot">.</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="hero-role">
            {t.hero.role}
          </motion.h2>

          <motion.p variants={itemVariants} className="hero-description">
            {t.hero.description}
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">
              {t.hero.cta} <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className={`image-wrapper ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? girlPhotoHover : girlPhoto}
              alt="SovaD"
              className="hero-img-art"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
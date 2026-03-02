import React from 'react';
import { motion } from 'framer-motion';

const skillList = [
  "React", "JavaScript", "Node.js", 
  "Redux Toolkit", "RTK Query", "Express", "MongoDB", "Framer Motion", "Git", "Vite", 
  "Postman", "REST API", "HTML5/CSS3"
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tech Stack<span className="dot">.</span>
        </motion.h2>

        <div className="skills-container">
          {skillList.map((skill, index) => (
            <motion.div 
              key={skill}
              className="skill-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(var(--accent-rgb), 0.4)",
                borderColor: "var(--accent)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17,
                delay: index * 0.03 
              }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
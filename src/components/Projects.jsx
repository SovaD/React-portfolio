import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { ExternalLink, Github } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { projectsData } from "../data/projects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Projects = () => {
  const { t, lang } = useAppContext();

  // Анимация для появления карточек при скролле

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.19, 0.9],
      },
    },
  };
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">{t.projectsTitle}</h2>
        </motion.div>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="project-images">
                <Swiper
                  modules={[Navigation, Pagination, EffectFade]}
                  navigation
                  pagination={{ clickable: true, dynamicBullets: true }}
                  effect="fade"
                  speed={800}
                  className="inner-swiper"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="image-container">
                        <img src={img} alt={`${project.title} screenshot`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="project-info">
                <span className="project-number">0{index + 1}</span>
                <h3 className="project-name">{project.title}</h3>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>

                <p className="project-desc">{project.description[lang]}</p>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-effect"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-effect"
                  >
                    Source Code <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

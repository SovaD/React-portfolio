import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <motion.div 
          className="error-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="error-code">404</h1>
          <h2 className="error-text">Упс! Страница не найдена</h2>
          <p className="error-desc">
            Похоже, вы забрели не туда. Но не волнуйтесь, ваша разработка 
            в безопасности — просто вернитесь на главную.
          </p>
          
          <Link to="/" className="btn-effect">
            <ArrowLeft size={18} /> <span>Вернуться домой</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
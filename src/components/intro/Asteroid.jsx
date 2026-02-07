import React from 'react';
import { motion } from 'framer-motion';
import './Asteroid.css';

const Asteroid = () => {
  return (
    <motion.div
      className="asteroid-container"
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <div className="asteroid">
        <div className="asteroid-surface"></div>
        <div className="crater crater-1"></div>
        <div className="crater crater-2"></div>
        <div className="crater crater-3"></div>
      </div>
    </motion.div>
  );
};

export default Asteroid;
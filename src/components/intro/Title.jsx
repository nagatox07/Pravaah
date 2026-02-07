import React from 'react';
import { motion } from 'framer-motion';
import './Title.css';

const Title = () => {
  return (
    <motion.div
      className="title"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      THE STAR ORACLE
    </motion.div>
  );
};

export default Title;

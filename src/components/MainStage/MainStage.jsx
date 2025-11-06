import React from 'react';
import { motion } from "framer-motion";

const MainStage = ({ children, bgColor = "#FACC15" }) => {
  return (
    <motion.div
      className='relative h-full w-full flex items-center justify-center rounded-xl overflow-hidden'
      animate={{ backgroundColor: bgColor }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

export default MainStage;

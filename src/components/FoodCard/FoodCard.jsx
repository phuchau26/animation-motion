import React from 'react';
import { motion } from "framer-motion";

const FoodCard = ({ imageURL, foodName }) => {
  return (
    <div className='py-[50px] bg-green-200 border-cyan-100 border-2 rounded-[20px] flex flex-col items-center'>
      <motion.img
        src={imageURL}
        alt={foodName}
        className='h-[200px] w-[300px] object-cover rounded-lg'
        whileHover={{ 
          rotate: 15,    // xoay 15 độ
          y: -20         // di chuyển lên 20px
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      />
      <div className='text-center font-bold mt-4'>{foodName}</div>
    </div>
  )
}

export default FoodCard;

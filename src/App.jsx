import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FoodCard from './components/FoodCard/FoodCard';
import MainStage from './components/MainStage/MainStage';
import HuTieu from './assets/hutieu.png';
import BunRieu from './assets/bunrieu.png';
import Pho from './assets/pho.png';
import BanhCanh from './assets/banhcanh.png';

function App() {
  const foods = [
    { name: "Hu Tieu", img: HuTieu, color: "#A7F3D0" },
    { name: "Bun Rieu", img: BunRieu, color: "#FECACA" },
    { name: "Pho", img: Pho, color: "#BFDBFE" },
    { name: "Banh Canh", img: BanhCanh, color: "#FEF3C7" }
  ];


  const [selectedFood, setSelectedFood] = useState(foods[0]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center  relative">
  
        {/* MainStage */}
        <div className="relative h-[500px] w-[500px] rounded-xl shadow-lg overflow-hidden">
          <MainStage bgColor={selectedFood.color}>
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedFood.img} // đổi key để trigger AnimatePresence
                src={selectedFood.img}
                alt={selectedFood.name}
                className="h-full w-full object-cover"
                initial={{ x: 100, y: -50, scale: 0.8, opacity: 0 }}   // xuất hiện từ phải trên
                animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}          // về trung tâm
                exit={{ x: -100, y: -50, scale: 0.8, opacity: 0 }}     // ra trái trên
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </AnimatePresence>
          </MainStage>
        </div>
  
        {/* Danh sách FoodCard */}
        <motion.div className="flex py-[22px] gap-3 mt-6">
          {foods.map((food, index) => (
            <motion.div
              key={index}
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedFood(food)}
            >
              <FoodCard foodName={food.name} imageURL={food.img} />
            </motion.div>
          ))}
        </motion.div>
  
      </div>
  
      <div className="mt-10 py-4 text-center text-sm text-gray-500">
        © 2025 HCMUS-HauProMax. All rights reserved.
      </div>

    </div>
  );
}

export default App;

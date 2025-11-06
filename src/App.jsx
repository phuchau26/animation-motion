import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FoodCard from './components/FoodCard/FoodCard';
import MainStage from './components/MainStage/MainStage';

function App() {
  const foods = [
  { name: "Hu Tieu", img: "./src/assets/hutieu.png", color: "#A7F3D0" },    // xanh lá nhạt
  { name: "Bun Rieu", img: "./src/assets/bunrieu.png", color: "#FECACA" },  // đỏ hồng nhạt
  { name: "Pho", img: "./src/assets/pho.png", color: "#BFDBFE" },           // xanh dương nhạt
  { name: "Banh Canh", img: "./src/assets/banhcanh.png", color: "#FEF3C7" } // vàng nhạt
];


  const [selectedFood, setSelectedFood] = useState(foods[0]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">

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
  );
}

export default App;

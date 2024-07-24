import React from "react";
import { PopularSet } from "../Index";
import Container from "../../../../shared/Container/Container";
import LogoCart from "../../assets/Svg/LogoCart.svg";
import LeftP from "../../assets/Png/LeftP.png";
import RightP from "../../assets/Png/RightP.png";
import { motion } from "framer-motion";

const PopularSets = () => {
  const cardAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };
  return (
    <Container>
      <h1 className="titles-Popular items-center ml-[520px] mt-[20px]">
        Популярные наборы
      </h1>
     
        <div className="grid grid-cols-3 gap-4 mt-10 ml-10">
          {" "}
          {/* Используем Tailwind для grid и отступов */}
          {PopularSet.map((item, index) => (
             <motion.div
             key={index}
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2, once: true }}
             custom={index + 1}
             variants={cardAnimation}
           >
            <div
              key={index}
              className="Product p-4"
            >
              <img
                src={item.image}
                alt=""
                className="image w-full h-60 object-cover mb-4 rounded-lg"
              />
              <h2 className="title text-gray-900 font-bold text-lg mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 text-sm mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <h2 className="text-pink-600 font-bold text-lg">
                  {item.price}
                </h2>
                <button className="text-black-alpha-88 font-Montserrat text-base font-semibold leading-17 tracking-tight text-left flex">
                  <img className="mr-1" src={LogoCart} alt="" />В корзину
                </button>
              </div>
            </div>
            
      </motion.div>
          ))}
        </div>

      <img className="absolute mt-[-1000px] ml-[-150px]" src={LeftP} alt="" />
      <img className="absolute ml-[1180px] mt-[-900px]" src={RightP} alt="" />
    </Container>
  );
};

export default PopularSets;

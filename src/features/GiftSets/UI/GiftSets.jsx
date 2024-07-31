

import React from "react";
import { motion } from "framer-motion";
import Container from "../../../shared/Container/Container";
import { giftsetsdata } from "../data/Contants";
import bag from "../../../shared/assets/svg/bag.svg";

const giftsets = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const headengVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container className="relative">
      <p className="text-[#989898] font-proxima text-sm font-normal leading-[17.05px] text-center mt-[80px] mb-[-50px]">
        Главная >  <span className="text-[#4e9dd3] font-proxima text-sm font-normal leading-[17.05px] text-left">Подарочные наборы</span>
      </p>

      <motion.div
        className="absolute top-[400px] left-[160px] flex justify-between gap-x-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.5 } },
        }}
      >
        {["Свадьба", "8 марта", "Новый год",'Без печати'].map((tittle, index) => (
          <motion.h1
            key={index}
            className="w-[100px] h-[40px]  text-[#000] rounded-[100px]  bg-[#F7EBE5] mb-2 text-center p-2.5 font-proxima text-[14px]"
            variants={headengVariants}
            transition={{ duration: 0.5 }}
          >
            {tittle}
          </motion.h1>
        ))}
      </motion.div>

      <h1 className="my-[100px] text-center font-montserrat text-[30px] font-semibold leading-[36.57px]">
      Подарочные наборы
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[100px]">
        {giftsetsdata.map((giftsets, index) => (
          <motion.div
            key={giftsets.id}
            className="border rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <img
              src={giftsets.img}
              alt={giftsets.text}
              className="w-full h-auto"
            />
            <h2 className="font-montserrat text-[18px] font-medium leading-[21.94px] text-[#292929] text-left mt-[21px] mx-[20px]">
              {giftsets.text}
            </h2>
            <p className="font-proxima text-[14px] font-normal leading-[17.05px] text-left mx-[20px] text-[#292929] my-[14px]">
              24 штуки в коробке в виде сердца.
              <br />
              Ассорти из 6 вкусов
            </p>
            <div className="border-t border-[#EDEDF0]">
              <p className="font-montserrat text-[18px] font-medium leading-[21.94px] text-left p-4 text-[#E7426A]">
                {giftsets.price} руб
              </p>
              <div className="border border-[#EDEDF0] ml-[220px] mt-[-55px] pb-[20px] pt-[10px]">
                <img className="mt-[10px] ml-[20px]" src={bag} />
                <h1 className="font-montserrat text-[14px] font-semibold leading-[17.07px] mt-[-20px] text-center">
                  В корзину
                </h1>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="
          mt-[-40px]
          mb-[40px]
          transform -translate-x-1/2
          w-[293px] 
          h-[50px] 
          border 
          border-[#4E9DD3]
          rounded-tl-3px 
          font-montserrat 
          text-[14px] 
          font-semibold 
          leading-[17.07px] 
          text-center
          mx-[460px]
        "
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        transition={{ duration: 0.5, delay: giftsetsdata.length * 0.5 }}
      >
        Показать ещё
      </motion.button>
    </Container>
  );
};

export default giftsets;


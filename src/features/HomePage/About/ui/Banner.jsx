import React from "react";
import { motion } from "framer-motion";
import banners from "../../../../shared/assets/svg/bg.svg";
import Container from "../../../../shared/Container/Container";

const textAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Banner = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
    >
      <div
        className="w-full h-screen bg-cover font-sans"
        style={{ backgroundImage: `url(${banners})` }}
      >
        <Container>
        <div>
          <motion.h3
            className="text-3xl  pt-[13rem] pl-[46rem] font-sans"
            custom={3}
            variants={textAnimation}
          >
            Macaronshop
          </motion.h3>
          <motion.p
            className="text-lg mt-2 pl-[48rem]"
            custom={4}
            variants={textAnimation}
          >
            -since 2013-
          </motion.p>
        </div>
        <div >
          <motion.h1
            className="text-5xl  mt-[1rem] pl-[40rem]"
            custom={2}
            variants={textAnimation}
          >
            Настоящая любовь
          </motion.h1>
          <motion.p
            className="text-lg  pl-[38rem]"
            custom={5}
            variants={textAnimation}
          >
                    <p className="pl-20 pt-3">Пирожные макарон и другие десерты</p>  из натуральных ингредиентов,
            приготовленные с любовью
          </motion.p>
        </div>

          
        </Container>
      
      </div>
    </motion.div>
  );
};

export default Banner;

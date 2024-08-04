import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import Container from "../../../../shared/Container/Container";
import LeftP from "../../assets/Png/LeftP.png";
import LogoCart from "../../assets/Svg/LogoCart.svg";
import RightP from "../../assets/Png/RightP.png";
import { PopularSet } from "../Index";
import { motion } from "framer-motion";

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PopularSets = forwardRef((props, ref) => {
  return (
    <div>
      <Container>
        <h1
          ref={ref}
          className="titles-Popular text-3xl font-bold items-center ml-[520px] mt-20"
        >
          Популярные наборы
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-10 ml-10">
          {PopularSet.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              custom={index + 1}
              variants={cardAnimation}
            >
              <div className="Product p-4">
                <Link to={`/ProductCart/${item.id}`}>
                  <img
                    src={item.image}
                    alt=""
                    className="image w-full h-60 object-cover mb-4 rounded-lg"
                  />
                </Link>
                <h2 className="title text-gray-900 font-bold text-lg mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <h2 className="text-pink-600 font-bold text-lg">
                    {item.price}
                  </h2>
                  <button className="text-black-alpha-88 font-Montserrat text-base font-semibold leading-17 tracking-tight text-left flex">
                    <img className="mr-1" src={LogoCart} alt="Cart" />В корзину
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <img
          className="absolute mt-[-1000px] ml-[-150px]"
          src={LeftP}
          alt="Left Decoration"
        />
        <img
          className="absolute ml-[1180px] mt-[-900px]"
          src={RightP}
          alt="Right Decoration"
        />
      </Container>
    </div>
  );
});

export default PopularSets;

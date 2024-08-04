import React from "react";
import Container from "../../../shared/Container/Container";
import { motion } from "framer-motion";
import LogoCart from "../../PopularSets/assets/Svg/LogoCart.svg";
import { CartItem } from "../data/Constant";

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductBlock = () => {
  return (
    <Container>
      <div className="mb-20">
        <h2 className="text-3xl font-medium text-center">
          Вам могут понравиться
        </h2>
        <div className="grid grid-cols-4 gap-4 mt-10 ml-10">
          {CartItem.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              custom={index + 1}
              variants={cardAnimation}
            >
              <div className="Product p-4">
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
                    <img className="mr-1" src={LogoCart} alt="Cart" />В корзину
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductBlock;

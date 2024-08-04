import React from "react";
import { motion } from "framer-motion";
import Container from "../../../shared/Container/Container";
import { productData } from "../data/Constant";
import bag from "../../../shared/assets/svg/bag.svg";
import { Link } from "react-router-dom";

const ProductSet = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container className="relative">
      <p className="text-[#989898] font-proxima text-sm font-normal leading-[17.05px] text-center mt-[80px] mb-[-50px]">
      <Link to={'/'}>
      Главная >
      </Link>
         Каталог >
        <span className="text-[#4e9dd3] font-proxima text-sm font-normal leading-[17.05px] text-left">
          {" "}
          Готовые наборы
        </span>
      </p>

      <motion.div
        className="absolute top-[400px] left-[160px] flex justify-between gap-x-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.5 } },
        }}
      >
        {["Свадьба", "8 марта", "Новый год", "Без печати"].map(
          (text, index) => (
            <motion.h1
              key={index}
              className="w-[100px] h-[40px]  text-[#000] rounded-[100px]  bg-[#F7EBE5] mb-2 text-center p-2.5 font-proxima text-[14px]"
              variants={headingVariants}
              transition={{ duration: 0.5 }}
            >
              {text}
            </motion.h1>
          )
        )}
      </motion.div>

      <h1 className="my-[100px] text-center font-montserrat text-[30px] font-semibold leading-[36.57px]">
        Готовые наборы
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[100px]">
        {productData.map((product, index) => (
          <motion.div
            key={product.id}
            className="border rounded-lg"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <img
              src={product.img}
              alt={product.text}
              className="w-full h-auto"
            />
            <h2 className="font-montserrat text-[18px] font-medium leading-[21.94px] text-[#292929] text-left mt-[21px] mx-[20px]">
              {product.text}
            </h2>
            <p className="font-proxima text-[14px] font-normal leading-[17.05px] text-left mx-[20px] text-[#292929] my-[14px]">
              24 штуки в коробке в виде сердца.
              <br />
              Ассорти из 6 вкусов
            </p>
            <div className="border-t border-[#EDEDF0]">
              <p className="font-montserrat text-[18px] font-medium leading-[21.94px] text-left p-4 text-[#E7426A]">
                {product.price} руб
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
    </Container>
  );
};

export default ProductSet;

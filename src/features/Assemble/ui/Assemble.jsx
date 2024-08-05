import React from "react";
import Container from "../../../shared/Container/Container";
import { Link } from "react-router-dom";
import { assemble } from "../data/Constant";
import { motion } from "framer-motion";

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Assemble = () => {
  return (
    <Container>
      <div className="mt-[7rem]">
        <div className="flex gap-7 items-center pl-96 ">
          <Link to={"/"}>Главная</Link>
          <Link to={"/"}>Собрать набор</Link>
          <p>Выбрать количество</p>
        </div>
        <h2 className="text-center uppercase pt-5 font-sans">
          Выберите количество
        </h2>
        <div className="grid grid-cols-4 gap-4 my-10  ">
          {assemble.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              custom={index + 1}
              variants={cardAnimation}
            >
              <div className=" border-2">
                <Link to={`/ProductCart/${item.id}`}>
                  <img
                    src={item.image}
                    alt=""
                  />
                </Link>
                <div className="text-center">
                  <h2 className="title text-gray-900 pt-5 ">{item.title}</h2>

                  <h2 className="text-pink-600 font-bold text-lg pb-9">
                    {item.price}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Assemble;

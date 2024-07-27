import React, { useState } from "react";
import Container from "../../../shared/Container/Container";
import { saleItems } from "../data/Constan";
import { motion } from "framer-motion";

const Sale = () => {
  const [startIndex, setStartIndex] = useState(0);

  const numSets = Math.ceil(saleItems.length / 4);

  const goToSet = (index) => {
    setStartIndex(index * 4);
  };

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
      <div>
        <h2 className="text-center text-3xl text-slate-950 pt-20 pb-7  font-bold">Акции</h2>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4">
            {saleItems.slice(startIndex, startIndex + 4).map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                custom={index + 1}
                variants={cardAnimation}
              >
                <div className="w-[290px] h-[400px] relative">
                  <img
                    className="w-full h-[300px] object-cover"
                    src={item.image}
                    alt=""
                  />
                  <div className="absolute bg-pink-500 bg-opacity-50 text-white p-4">
                    <p className="text-center">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {[...Array(numSets)].map((_, index) => (
            <div
              key={index}
              onClick={() => goToSet(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                startIndex === index * 4 ? "bg-pink-500" : "bg-pink-200"
              } mx-1`}
            ></div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Sale;

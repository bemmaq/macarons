import React from 'react';
import { motion } from 'framer-motion';
import Container from './../../../shared/Container/Container';
import { cardData } from '../Data/Constan';
import { Link } from 'react-router-dom';

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

const SetPage = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between gap-[25px]">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            custom={index + 1}
            variants={cardAnimation}
            className={index === cardData.length - 1 ? "flex justify-center w-full" : ""}
          >
            <div
              className={`w-[570px] h-[260px] bg-cover ${index === cardData.length - 1 ? "mx-auto" : ""}`}
              style={{ backgroundImage: `url(${card.color})` }}
            >
              <Link to={card.path}>
                <div className="flex flex-col items-center justify-center pt-[30px]">
                  <img src={card.svg} alt="" />
                  <h1>{card.title}</h1>
                  {card.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default SetPage;

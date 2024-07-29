import React from "react";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import a from "../../../shared/assets/svg/a.svg";
import b from "../../../shared/assets/svg/b.svg";
import c from "../../../shared/assets/svg/c.svg";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const NewProduct = () => {
  return (
    <Container>
      <section className="py-8">
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <div className="text-center text-2xl border-blue-600">
            <button className=" text-black border-2 border-blue-300 w-[459px] h-[72px] rounded-lg  mb-20 mt-20">
              Все праздничные наборы
            </button>
          </div>
          <motion.h2
            className="text-3xl font-bold mb-8 text-center "
            variants={fadeInUp}
          >
            Новости
          </motion.h2>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {" "}
              <motion.div
                className="bg-white p-6 rounded-lg "
                variants={fadeInUp}
              >
                <img
                  src={a}
                  alt="Image 1"
                  className="w-[380px] h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <p className="text-gray-600 text-sm mb-2">25.02.2023</p>
                  <h3 className="text-xl font-semibold mb-2">
                    Скоро главный праздник весны!
                  </h3>
                  <p className="text-gray-700">
                    Дарите любовь, когда вкусно, красиво и натурально. Смотрите
                    больше наборов с декором ручной работы.
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                className="bg-white p-6 rounded-lg "
                variants={fadeInUp}
              >
                <img
                  src={b}
                  alt="Image 2"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <p className="text-gray-600 text-sm mb-2">17.02.2023</p>
                  <h3 className="text-xl font-semibold mb-2">
                    Конкурс на 23 февраля!
                  </h3>
                  <p className="text-gray-700">
                    День Защитника Отечества уже совсем скоро! Поддержите своего
                    сладкоежку с помощью аппетитных наборов от МакаронШоп.
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                className="bg-white p-6 rounded-lg "
                variants={fadeInUp}
              >
                <img
                  src={c}
                  alt="Image 3"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <p className="text-gray-600 text-sm mb-2">11.02.2023</p>
                  <h3 className="text-xl font-semibold mb-2">
                    Экспресс-конкурс ко дню Святого Валентина
                  </h3>
                  <p className="text-gray-700">
                    Подарок через 2 дня! Для всех влюблённых на все времена.
                    Радость с обним акцийных наборов от МакаронШоп.
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <motion.div
                className="bg-white p-6 rounded-lg "
                variants={fadeInUp}
              >
                <img
                  src={a}
                  alt="Image 1"
                  className="w-[380px] h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <p className="text-gray-600 text-sm mb-2">25.02.2023</p>
                  <h3 className="text-xl font-semibold mb-2">
                    Скоро главный праздник весны!
                  </h3>
                  <p className="text-gray-700">
                    Дарите любовь, когда вкусно, красиво и натурально. Смотрите
                    больше наборов с декором ручной работы.
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          </Swiper>

          <motion.div className="text-center mt-8" variants={fadeInUp}>
            <Link to={'/news'}>
            <button className="text-black border-2 border-blue-300 w-[249px] h-[42px] rounded-lg">
              Все новости
            </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </Container>
  );
};

export default NewProduct;

import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../shared/Container/Container";
import cake from "../../../shared/assets/png/cake.png";
import gmail from "../../../shared/assets/png/gmail.png";
import bag from "../../../shared/assets/svg/bag.svg";
import bal from "../../../shared/assets/svg/bal.svg";
import { weddingData } from "../data/Constants";
import { motion } from "framer-motion";

const WeddingSet = () => {
  return (
    <Container>
      <motion.p
        className="text-[#989898] font-proxima text-sm font-normal leading-[17.05px] text-center mt-[80px] mb-[-50px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Link
          to="/"
          className="text-[#989898] font-proxima text-sm font-normal leading-[17.05px] cursor-pointer"
        >
          Главная >
        </Link>
        <span className="text-[#4e9dd3] font-proxima text-sm font-normal leading-[17.05px]">
          Предложение для свадеб
        </span>
      </motion.p>

      <div className="flex">
        <motion.img
          src={cake}
          alt="Cake"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="font-montserrat text-[42px] font-semibold leading-[51.2px] text-center mt-[136px] ml-[-57px] text-[#292929]"
            initial={{ scale: 0.8, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
          >
            Свадебное предложение
          </motion.h1>
          <motion.p
            className="font-proxima text-[18px] font-normal leading-[21.92px] ml-[-75px] text-center mt-4 text-[#292929]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Нежные пирожные макаронс с разными вкусами для <br /> украшения
            вашего свадебного торжества
          </motion.p>
          <motion.p
            className="font-proxima text-[16px] font-normal leading-[19.49px] ml-[-40px] text-left text-[#292929] mt-[40px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Рыба-текст предложения
            <br />
            <br />
            Приятно, граждане, наблюдать, как действия представителей оппозиции,
            превозмогая
            <br />
            сложившуюся непростую экономическую ситуацию, смешаны с не
            уникальными данными <br /> до степени совершенной неузнаваемости,
            из-за чего возрастает их статус <br /> бесполезности.
          </motion.p>
          <motion.img
            src={bal}
            className="absolute ml-[250px] my-[-500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 2 }}
          />
        </motion.div>
      </div>

      <motion.h1
        className="my-[100px] mt-[-50px] text-center font-montserrat text-[30px] font-semibold leading-[36.57px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Наборы для свадьбы
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[100px]">
        {weddingData.map((wedding, index) => (
          <motion.div
            key={wedding.id}
            className="border rounded-lg"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <img src={wedding.img} className="w-full h-auto" />
            <h1 className="text-[18px] font-medium leading-[21.94px] text-[black] mt-[21px] mx-[20px]">
              {wedding.text}
            </h1>
            <p className="font-proxima text-[14px] font-normal leading-[17.05px] text-left mx-[20px] text-[#292929] my-[14px]">
              {wedding.tittle}
            </p>
            <div className="border-t border-[#EDEDF0]">
              <p className="font-montserrat text-[18px] font-medium leading-[21.94px] text-left p-4 text-[#E7426A]">
                {wedding.price} руб
              </p>
              <div className="border border-[#EDEDF0] ml-[220px] mt-[-55px] pb-[20px] pt-[10px]">
                <motion.img
                  className="mt-[10px] ml-[20px]"
                  src={bag}
                  alt="Bag"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2, rotate: 20 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.h1
                  className="font-montserrat text-[14px] font-semibold leading-[17.07px] mt-[-20px] text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  В корзину
                </motion.h1>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="flex"
        style={{ backgroundImage: `url(${gmail})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="pl-[700px] py-[65px]">
          <motion.h1
            className="font-montserrat text-[30px] font-semibold leading-[39.57px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Мы открыты для новых идей
          </motion.h1>
          <motion.p
            className="font-proxima text-[18px] font-normal leading-[22px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Каждое событие уникально и мы готовы предложить индивидуальные
            решения для Вашего мероприятия
          </motion.p>
          <motion.div
            className="my-[10px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-proxima text-[14px] font-normal leading-[17.05px]">
              Ваше имя*
            </p>
            <input
              className="w-[270px] h-[50px] mt-[15px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none"
              type="name"
              placeholder="     Укажите имя"
            />
          </motion.div>

          <motion.div
            className="my-[10px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-proxima text-[14px] font-normal leading-[17.05px]">
              Телефон*
            </p>
            <input
              className="w-[270px] h-[50px] mt-[15px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="     +996 (___) ___-__-__"
            />
          </motion.div>

          <motion.div
            className="my-[10px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-proxima text-[14px] font-normal leading-[17.05px]">
              Опишите Вашу идею
            </p>
            <input
              className="w-[400px] h-[50px] mt-[15px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none"
              type="text"
              placeholder=""
            />
          </motion.div>

          <motion.button
            className="w-[254px] h-[50px] my-[10px] rounded-tl-[3px] rounded-tr-none rounded-br-none rounded-bl-none bg-[#E7426A] text-[#ffff]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Отправить заявку
          </motion.button>

          <motion.p
            className="font-proxima text-[11px] font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с{" "}
            <span className="font-proxima text-11px font-normal leading-13.4 text-[#4e9dd3]">
              Договором оферты
            </span>{" "}
            и разрешаю обработку моих персональных данных в соответствии с{" "}
            <span className="font-proxima text-11px font-normal leading-13.4 text-[#4e9dd3]">
              Политикой конфиденциальности
            </span>
          </motion.p>
        </div>
      </motion.div>

      <motion.h1
        className="mt-[81px] text-center font-montserrat text-[30px] font-semibold leading-[36.57px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Ответы на вопросы
      </motion.h1>
      <div className="flex gap-5">
        <motion.div
          className="w-[400px] h-[140px] border border-[#EDEDF0] rounded-[5px] mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[18px] font-medium leading-[21.94px] text-[black] p-5">
            Сколько хранятся пирожные <br />
            макарон?
          </h1>
          <hr />
          <p className="font-proxima text-[14px] font-normal leading-[17.05px] text-[#292929] p-5">
            Срок хранения бла бла бла
          </p>
        </motion.div>

        <motion.div
          className="w-[400px] h-[200px] mb-[109px] border border-[#EDEDF0] rounded-[5px] mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[18px] font-medium leading-[21.94px] text-[black] p-5">
            Как быстро мы выполняем
            <br /> заказы
          </h1>
          <hr />
          <p className="font-proxima text-[14px] font-normal leading-[17.05px] text-[#292929] p-5">
            Стандартный срок выполнения заказа 3-5 <br />
            дней. При большом тираже и в <br />
            предновогодний сезон может увеличиться. <br />
            Потому что...
          </p>
        </motion.div>

        <motion.div
          className="w-[400px] h-[140px] border border-[#EDEDF0] rounded-[5px] mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[18px] font-medium leading-[21.94px] text-[black] p-5">
            А за 2 дня?
          </h1>
          <hr />
          <p className="font-proxima text-[14px] font-normal leading-[17.05px] text-[#292929] p-5">
            Текст про дополнительную стоимость при <br />
            срочных заказах
          </p>
        </motion.div>
      </div>
    </Container>
  );
};

export default WeddingSet;
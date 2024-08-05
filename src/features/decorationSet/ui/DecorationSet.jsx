import React, { useState } from "react";
import Container from "../../../shared/Container/Container";
import { Link } from "react-router-dom";
import bus from "../../../shared/assets/svg/bus.svg";
import hand from "../../../shared/assets/svg/hand.svg";
import "../../../app/styles/App.css";

const DecorationSet = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const [checkedtwo, setCheckedtwo] = useState(false);

  const handleChangedd = () => {
    setCheckedtwo(!checkedtwo);
  };
  const [checkedthree, setCheckedthree] = useState(false);

  const handleChangedthree = () => {
    setCheckedthree(!checkedthree);
  };

  return (
    <Container>
      <div className="bg bg-[#f7f7f7] h-[1000px] my-20 ">
        <p className="text-[#989898] font-proxima text-sm font-normal leading-[17.05px] text-center pt-[34px] pb-[27px]">
          <Link to={"/"}>Главная ></Link>
          <span className="text-[#4e9dd3] font-proxima text-sm font-normal leading-[17.05px]  ">
            {" "}
            Оформление заказа
          </span>
        </p>

        <div className="">
          <h1 className="font-montserrat text-[30px] font-semibold leading-[36.57px] text-center">
            Доставка
          </h1>
          <p className="font-proxima text-[16px] font-normal leading-[22px]  text-center">
            Укажите контактные данные и выберите способ доставки
          </p>

          <div className="my-[10px] ml-[20px]">
            <p className="font-proxima text-[14px] font-normal leading-[17.05px]">
              Ваше имя*
            </p>
            <input
              className="w-[270px] h-[50px] mt-[15px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none"
              type="name"
              placeholder="     Укажите имя"
            />
          </div>

          <div className="mt-[-92px] ml-[300px]">
            <p className="font-proxima text-[14px] font-normal leading-[17.05px]">
              Телефон*
            </p>
            <input
              className="w-[270px] h-[50px] mt-[15px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="     +996 (___) ___-__-__"
            />
          </div>

          <div className="w-[328px] ml-5 mt-5">
            <p className="font-proxima text-[14px] font-normal leading-[17.05px] mb-3">
              {" "}
              Способ доставки:
            </p>
            <button className="w-[270px] border border-[#E7426A] rounded-[5px]  text-black font-montserrat text-center bg-white p-[15px]">
              <img src={bus} />
              <h1 className="mt-[-35px] ml-12 font-montserrat text-[14px] font-semibold leading-[17.07px]">
                Курьерская доставка
              </h1>
              <span className="font-montserrat text-[14px] font-semibold leading-[17.07px] text-[#E7426A] ml-[-45px] ">
                400 руб.
              </span>
            </button>
          </div>

          <div className="w-[328px] mt-[-72px] ml-[300px]">
            <button className="w-[270px] rounded-[5px] text-black font-montserrat text-center bg-white p-[10px]">
              <img src={hand} />
              <h1 className="mt-[-45px] ml-[-40px]  font-montserrat text-[14px] font-semibold leading-[17.07px]">
                Самовывоз
              </h1>
              <span className="font-montserrat text-[14px] mt-7 font-semibold leading-[17.07px] text-[#E7426A] ml-[-45px] ">
                Бесплатно
              </span>
            </button>
          </div>

          <div className="w-[670px] ml-5 mt-5">
            <p className="font-proxima text-[14px] font-normal leading-[17.05px] mb-3">
              Адрес доставки
            </p>
            <input
              className="w-[550px] h-[76px] gap-0 border-t border-[#EDEDF0] bg-white border-none  focus:outline-none"
              type="name"
              placeholder="  Не нужно заполнять при самовывозе"
            />
          </div>

          <div className="mt-[24px] ml-5">
            <p className="font-proxima text-[14px] font-normal leading-[17.05px]">
              Дата получения
            </p>
            <input
              className="w-[270px] h-[50px] mt-[15px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none"
              type="date"
            />
          </div>

          <div className="mt-[-82px] ml-[300px]">
            <p className="font-proxima text-[14px] font-normal leading-[17.05px]">
              Время
            </p>
            <input
              className="w-[270px] h-[50px] mt-[15px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none"
              type="time"
              name="time input"
            />
          </div>

          <div className="w-[670px] ml-5 mt-5">
            <p className="font-proxima text-[14px] font-normal leading-[17.05px] mb-3">
              Комментарий к заказe
            </p>
            <input
              className="w-[550px] h-[76px] gap-0 border-t border-[#EDEDF0] bg-white border-none focus:outline-none pl-4 placeholder-multiline"
              type="text"
              placeholder="Здесь Вы можете написать пожелания,nотносительно анонимной доставки, текста открытки и другое."
            />
          </div>

          <div className="ml-5 mt-5">
            <p className="font-proxima text-[14px] font-normal leading-[17.05px] mb-5 ">
              Метод оплаты
            </p>
            <div className="flex">

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={checkedtwo}
                onChange={handleChangedd}
                className="hidden"
              />
              <div
                className={`w-5 h-5 border-2 border-[#EDEDF0] rounded flex items-center justify-center
          ${checkedtwo ? "bg-red-500 border-red-500" : "bg-white"}
        `}
              >
                {checkedtwo && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="ml-2 font-montserrat text-[14px] font-semibold leading-[17.07px] text-left">Оплата картой онлайн</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className="hidden"
              />
              <div
                className={`w-5 h-5 border-2 border-[#EDEDF0] rounded flex items-center justify-center
          ${checked ? "bg-red-500 border-red-500" : "bg-white"}
        `}
              >
                {checked && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="ml-2 font-montserrat text-[14px] font-semibold leading-[17.07px] text-left">Наличными при получении</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={checkedthree}
                onChange={handleChangedthree}
                className="hidden"
              />
              <div
                className={`w-5 h-5 border-2 border-[#EDEDF0] rounded flex items-center justify-center
          ${checkedthree ? "bg-red-500 border-red-500" : "bg-white"}
        `}
              >
                {checkedthree && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="ml-2 font-montserrat text-[14px] font-semibold leading-[17.07px] text-left">Яндекс деньги</span>
            </label>
            </div>
            <hr className="w-[580px] my-5"/>
            <div className="flex">

            <p className=" font-proxima text-[14px] font-normal leading-[17.05px] mb-5">Итоговая сумма заказа вместе с доставкой:</p>
            <p className="font-montserrat text-[14px] font-semibold leading-[17.07px] text-[#E7426A] ml-[230px]">1500 сом.</p>
            </div>
            <hr className="w-[580px] my-2"/>
            <button
            className="w-[254px] h-[50px] my-[10px] rounded-tl-[3px] text-center ml-[150px]  rounded-tr-none rounded-br-none rounded-bl-none bg-[#E7426A] text-[#ffff]"
            >
            Оформить заказ
          </button>
          <p
            className="font-proxima text-[11px] font-normal"
          >
            Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с{" "}
            <span className="font-proxima text-11px font-normal leading-13.4 text-[#4e9dd3]">
              Договором оферты
            </span>{" "}
            и разрешаю обработку моих  <br/> персональных
             данных в соответствии с{" "}
            <span className="font-proxima text-11px font-normal leading-13.4 text-[#4e9dd3]">
              Политикой конфиденциальности
            </span>
          </p>



          </div>
        </div>
      <div className="ml-[700px] mt-[-835px]">
        <h1 className="font-montserrat mb-3 text-[18px] font-medium leading-[21.94px]   ">Ваш заказ</h1>
        <div className="w-[450px] h-[260px] bg bg-white flex py-[28px] px-[13px] relative">
        <p className="font-montserrat text-[16px] font-normal leading-[19.5px] ">Подарочный набор на Девичник  × 1</p>
        <p className="font-montserrat text-[16px] font-medium leading-[19.5px]  ml-12" >1100 сом</p>
        <p className="font-montserrat absolute text-[16px] font-normal leading-[19.5px] pt-10">Дополнения к заказу  × 1 </p>
        <p className="font-montserrat absolute text-[16px] font-medium leading-[19.5px] ml-[374px] pt-10" >0 сом</p>
        <p className="font-montserrat absolute text-[16px] font-normal leading-[19.5px] pt-20">Доставка</p>
        <p className="font-montserrat absolute text-[16px] font-medium leading-[19.5px] ml-[354px] pt-20" >400 сом</p>
        <hr className="w-[422px] absolute mt-[130px] "/>
                <h1 className="font-montserrat absolute text-[18px] font-medium leading-[21.94px] pt-[150px]">Стоимость товаров</h1>
                <p className="font-montserrat absolute text-[18px] font-semi leading-[21.94px] text-[#E67285] pt-[150px] ml-[346px]">1100 сом</p>
                <hr className="w-[422px] absolute mt-[192px] "/>
        </div>
      </div>

      </div>

    </Container>
  );
};

export default DecorationSet;

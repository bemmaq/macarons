import React from "react";
import Container from "../../shared/Container/Container";
import arrow from "./data/svg/arrow.svg";
import X from "./data/svg/X.svg";
import HandBurger from "./data/svg/HandBurger.svg";
import Star from "./data/svg/Star.svg";
import { CartProducts } from "./data";
import CarBurger from "./data/svg/CarBurger.svg";
import CartLogo from "./data/svg/CartLogo.svg";

function CartBlock() {
  return (
    <Container>
      <hr className="absolute w-[670px] mt-[325px] ml-[-50px]" />
      <hr className="absolute w-[670px] mt-[448px] ml-[-50px]" />
      <hr className="absolute w-[670px] mt-[575px] ml-[-50px]" />
      <h3 className="text-sm tracking-normal ml-[485px] mt-[80px]">
        Главная Корзина
      </h3>
      <h1 className="font-montserrat text-4xl font-semibold mt-5 ml-[435px]">
        Ваша корзина
      </h1>
      <p className="text-stone-700 ml-[470px] mt-2">3 товара / 1030 руб.</p>
      <div className="mt-20">
        <div className="Products box-border border w-[670px] ml-[-50px] h-[470px] ">
          <div className="flex justify-center items-center w-[1200px]">
            <div className="w-custom">
              <div className="Product flex justify-center items-center w-[670px]">
                <div className="flex justify-center items-center w-[670px] relative">
                  <div className="flex justify-center items-center w-[670px]">
                    <img
                      className="w-[80px] h-[80px] ml-[-480px] mt-5"
                      src="https://macaronshop.ru/wp-content/uploads/2023/03/podarok-na-svadbu-1-300x300.jpg"
                      alt=""
                    />
                    <div className="mt-5 ml-2">
                      <h1 className="text-sm font-semibold leading-short">
                        Набор макарон 12 шт.
                      </h1>
                      <p className="text-xs">
                        Трюфель 2 шт. <br /> Розмарин 3 шт. <br /> Ананас 1 шт.{" "}
                        <br /> Кокос 4 шт.
                      </p>
                      <h4 className="text-xs text-red-600">
                        Скидка по акции “Эклер в подарок”
                      </h4>
                    </div>
                  </div>
                  <div className="flex justify-center items-center absolute">
                    <div className="border bg-white w-[20px] h-[20px] m-[5px]">
                      <h2 className="text-center mt-[-5px]">+</h2>
                    </div>
                    <h1>1</h1>
                    <div className="border bg-white w-[20px] h-[20px] m-[5px]">
                      <h2 className="text-center mt-[-5px]">-</h2>
                    </div>
                  </div>
                  <div className="ml-[-200px]">
                    <h2 className="mt-[51px] absolute">
                      Цена: <span className="text-red-600">950 руб</span>.
                    </h2>
                    <h2 className="mt-[100px]">
                      Скидка: <span className="text-red-600">-30 руб</span>.
                    </h2>
                  </div>
                </div>
                <img
                  src={X}
                  alt=""
                  className="w-[12px] h-[12px] ml-[580px] absolute mt-[-90px]"
                />
              </div>
              <div className="Product flex justify-center items-center w-[670px]">
                <div className="flex justify-center items-center w-[670px] relative">
                  <div className="flex justify-center items-center w-[670px]">
                    <img
                      className="w-[80px] h-[80px] ml-[-480px] mt-5"
                      src="https://macaronshop.ru/wp-content/uploads/2023/03/podarok-na-svadbu-1-300x300.jpg"
                      alt=""
                    />
                    <div className="mt-5 ml-2">
                      <h1 className="text-sm font-semibold leading-short">
                        Набор макарон 12 шт.
                      </h1>
                      <p className="text-xs">
                        Трюфель 2 шт. <br /> Розмарин 3 шт. <br /> Ананас 1 шт.{" "}
                        <br /> Кокос 4 шт.
                      </p>
                      <h4 className="text-xs text-red-600">
                        Скидка по акции “Эклер в подарок”
                      </h4>
                    </div>
                  </div>
                  <div className="flex justify-center items-center absolute">
                    <div className="border bg-white w-[20px] h-[20px] m-[5px]">
                      <h2 className="text-center mt-[-5px]">+</h2>
                    </div>
                    <h1>1</h1>
                    <div className="border bg-white w-[20px] h-[20px] m-[5px]">
                      <h2 className="text-center mt-[-5px]">-</h2>
                    </div>
                  </div>
                  <div className="ml-[-200px]">
                    <h2 className="mt-[51px] absolute">
                      Цена: <span className="text-red-600">950 руб</span>.
                    </h2>
                    <h2 className="mt-[100px]">
                      Скидка: <span className="text-red-600">-30 руб</span>.
                    </h2>
                  </div>
                </div>
                <img
                  src={X}
                  alt=""
                  className="w-[12px] h-[12px] ml-[580px] absolute mt-[-90px]"
                />
              </div>
              <div className="Product flex justify-center items-center w-[670px]">
                <div className="flex justify-center items-center w-[670px] relative">
                  <div className="flex justify-center items-center w-[670px]">
                    <img
                      className="w-[80px] h-[80px] ml-[-480px] mt-5"
                      src="https://macaronshop.ru/wp-content/uploads/2023/03/podarok-na-svadbu-1-300x300.jpg"
                      alt=""
                    />
                    <div className="mt-5 ml-2">
                      <h1 className="text-sm font-semibold leading-short">
                        Набор макарон 12 шт.
                      </h1>
                      <p className="text-xs">
                        Трюфель 2 шт. <br /> Розмарин 3 шт. <br /> Ананас 1 шт.{" "}
                        <br /> Кокос 4 шт.
                      </p>
                      <h4 className="text-xs text-red-600">
                        Скидка по акции “Эклер в подарок”
                      </h4>
                    </div>
                  </div>
                  <div className="flex justify-center items-center absolute">
                    <div className="border bg-white w-[20px] h-[20px] m-[5px]">
                      <h2 className="text-center mt-[-5px]">+</h2>
                    </div>
                    <h1>1</h1>
                    <div className="border bg-white w-[20px] h-[20px] m-[5px]">
                      <h2 className="text-center mt-[-5px]">-</h2>
                    </div>
                  </div>
                  <div className="ml-[-200px]">
                    <h2 className="mt-[51px] absolute">
                      Цена: <span className="text-red-600">950 руб</span>.
                    </h2>
                    <h2 className="mt-[100px]">
                      Скидка: <span className="text-red-600">-30 руб</span>.
                    </h2>
                  </div>
                </div>
                <img
                  src={X}
                  alt=""
                  className="w-[12px] h-[12px] ml-[580px] absolute mt-[-90px]"
                />
              </div>
            </div>
            <div className="Itog box-border border  w-custom bg-white w-[473px] h-[370px]">
              <h1 className="text-xl ml-5 mt-5">Итого</h1>
              <div>
                <div>
                  <h2 className="ml-5 mt-2 text-gray-600">Стоимость товаров</h2>
                  <h2 className="ml-[380px] mt-[-23px] text-gray-600">
                    700 руб
                  </h2>
                </div>
                <div>
                  <h2 className="ml-5 mt-2 text-gray-600">Скидка</h2>
                  <h2 className="ml-[380px] mt-[-23px] text-gray-600">0 руб</h2>
                </div>
                <div>
                  <h2 className="ml-5 mt-2 text-gray-600">Доставка</h2>
                  <h2 className="ml-[380px] mt-[-23px] text-gray-600">
                    400 руб
                  </h2>
                </div>
                <hr />
                <div>
                  <h2 className="text-gray-600 mt-[10px] ml-5">К оплате</h2>
                  <h2 className="ml-[360px] mt-[-25px] absolute">1100 руб</h2>
                </div>
                <hr className="mt-2" />
                <div>
                  <h2 className="text-gray-600 mt-[50px] ml-5">Промокод:</h2>
                  <div>
                    <input
                      type="text"
                      placeholder="Введите промокод"
                      className="w-[197px] h-[40px] box-border border border-light-gray bg-light-gray ml-[120px] mt-[-27px] absolute"
                    />
                    <button className="w-[118px] h-[40px] bg-rose-500 text-stone-50 ml-[317px] mt-[-27px] absolute">
                      Применить
                    </button>
                  </div>
                </div>
                <button className="absolute w-[254px] h-[50px] bg-rose-500 text-stone-50 ml-[100px] mt-10">
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-7 ml-5">
              Общая стоимость Вашей покупки без учета доставки <br /> составит:
            </p>
            <div className="ml-[550px] mt-[-40px]">
              <h2 className="text-red-600">1000 руб.</h2>
              <h2 className="text-gray-600 text-sm">1100 руб.</h2>
            </div>
          </div>
        </div>
        <div className="box-border rounded-md h-[60px] w-[670px] bg-red-500 mt-10 ml-[-50px]">
          <h1 className="text-2xl ml-5 mt-[15px] absolute">Вместе дешевле!</h1>
          <img className="ml-[210px] mt-[15px] absolute" src={arrow} alt="" />
          <img
            className="ml-[400px] mt-[15px] w-[12px] h-[14px] absolute"
            src={Star}
            alt=""
          />
          <img
            className="ml-[510px] mt-[22px] w-[21px] h-[24px] absolute"
            src={Star}
            alt=""
          />
          <img
            className="ml-[550px] mt-[10px] w-[30px] h-[34px] absolute"
            src={Star}
            alt=""
          />
          <img
            className="ml-[600px] mt-[25px] w-[21px] h-[24px] absolute"
            src={Star}
            alt=""
          />
          <img
            className="ml-[640px] mt-[15px] w-[12px] h-[14px] absolute"
            src={Star}
            alt=""
          />
        </div>
        <div className="box-border border h-[220px] w-[670px] ml-[-50px] mt-5">
          <div className="w-[670px]">
            <img
              className="w-[80px] h-[80px] ml-5 mt-[15px] absolute "
              src="https://macaronshop.ru/wp-content/uploads/2023/03/deserty-na-zakaz-spb-21.jpg"
              alt=""
            />
            <h2 className="ml-[110px] mt-10 absolute">Набор эклеров </h2>
            <div>
              <div className="absolute ml-[400px] mt-10 border bg-white w-[20px] h-[20px]">
                <h2 className="mt-[-5px] ml-1">+</h2>
              </div>
              <h1 className="absolute ml-[425px] mt-9">1</h1>
              <div className="absolute ml-[440px] mt-10 border bg-white w-[20px] h-[20px]">
                <h2 className="mt-[-5px] ml-1">-</h2>
              </div>
            </div>
            <div>
              <h2 className="absolute text-base text-gray-600 line-through ml-[585px] mt-[35px]">
                600 руб.
              </h2>
              <h2 className="absolute text-sm mt-[60px] ml-[550px]">
                Цена: <span className="text-red-600">400 руб</span>.
              </h2>
            </div>
          </div>
          <div className="w-[670px]">
            <img
              className="w-[80px] h-[80px] absolute mt-[120px] ml-5"
              src="https://macaronshop.ru/wp-content/uploads/2022/10/4.png"
              alt=""
            />
            <h2 className="ml-[110px] mt-[150px] absolute">
              Набор трубочек со сгущёнкой
            </h2>
            <div>
              <div className="absolute ml-[400px] mt-[150px] border bg-white w-[20px] h-[20px]">
                <h2 className="mt-[-5px] ml-1">+</h2>
              </div>
              <h1 className="absolute ml-[425px] mt-[146px]">1</h1>
              <div className="absolute ml-[440px] mt-[150px] border bg-white w-[20px] h-[20px]">
                <h2 className="mt-[-5px] ml-1">-</h2>
              </div>
            </div>
            <div>
              <h2 className="absolute text-base text-gray-600 line-through ml-[585px] mt-[150px]">
                900 руб.
              </h2>
              <h2 className="absolute  text-sm mt-[175px] ml-[550px]">
                Цена: <span className="text-red-600">400 руб</span>.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <hr className="absolute w-[670px] ml-[-50px] mt-[-110px]" />

      <div className="ml-[-50px]">
        <h1 className="text-2xl font-semibold w-[670px] ml-[250px] mt-10">
          Доставка
        </h1>
        <p className="text-base text-gray-600 ml-[100px] mt-3">
          Укажите контактные данные и выберите способ доставки
        </p>
        <div className="mt-5">
          <div>
            <h3 className="text-sm">Ваше имя*</h3>
            <input
              type="text"
              placeholder="Укажите имя"
              className="box-border border w-[328px] h-[50px]"
            />
          </div>
          <div className="ml-[350px] mt-[-70px]">
            <h3 className="text-sm">Ваш телефон*</h3>
            <input
              type="number"
              placeholder="+7 (___) ___-__-__"
              className="box-border border w-[328px] h-[50px]"
            />
          </div>
        </div>
        <div className="w-[670px] mt-5">
          <div>
            <h3 className="text-sm">Способ доставки:</h3>
            <div className="box-border border w-[328px] h-[78px]">
              <img
                src={CarBurger}
                alt=""
                className="border border-light-gray border-dashed w-[54px] h-[54px] ml-3 mt-3"
              />
              <div>
                <h2 className="ml-20 mt-[-50px]">Курьерская доставка</h2>
                <h2 className="ml-20 text-red-600">400 руб.</h2>
              </div>
            </div>
          </div>
          <div>
            <div className="box-border border w-[328px] h-[78px] ml-[350px] mt-[-80px]">
              <img
                src={HandBurger}
                alt=""
                className="border border-light-gray border-dashed w-[54px] h-[54px] ml-3 mt-3"
              />
              <div>
                <h2 className="ml-20 mt-[-50px]">Самовывоз</h2>
                <h2 className="ml-20 text-accent text-red-600">Бесплатно</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2>Адрес доставки</h2>
          <input
            type="text"
            className="box-border border w-[670px] h-[76px] text-left"
            placeholder="Не нужно заполнять при самовывозе"
          />
        </div>
        <div className="mt-5">
          <div>
            <h2>Дата получения</h2>
            <input
              value={22.12}
              type="data"
              className="box-border border w-[330px] h-[50px]"
            />
          </div>
          <div className="ml-[350px] mt-[-75px]">
            <h2>Время</h2>
            <input
              type="time"
              className="box-border border w-[330px] h-[50px]"
            />
          </div>
        </div>
        <div>
          <h2>Комментарий к заказe</h2>
          <input
            type="text"
            placeholder="Здесь Вы можете написать пожелания, относительно анонимной  доставки, текста открытки и другое."
            className="w-[670px] h-[108px] box-border border"
          />
        </div>
        <div>
          <h2 className="text-sm mt-2">Метод оплаты</h2>
          <div className="w-[670px] flex justify-center items-center h-[50px]">
            <div className="flex justify-center items-center w-[200px]">
              <input type="checkbox" className="w-[18px] h-[18px] m-2" />
              <h2 className="text-sm font-semibold">Оплата картой онлайн</h2>
            </div>
            <div className="flex justify-center items-center w-[270px]">
              <input type="checkbox" className="w-[18px] h-[18px] m-2" />
              <h2 className="text-sm font-semibold">Наличными при получении</h2>
            </div>
            <div className="flex justify-center items-center w-[200px]">
              <input type="checkbox" className="w-[18px] h-[18px] m-2" />
              <h2 className="text-sm font-semibold">Яндекс деньги</h2>
            </div>
          </div>
        </div>
        <hr className="w-[670px] mt-2" />
        <div className="w-[670px] h-[60px]">
          <h3 className="text-sm ml-5 mt-[20px] absolute">
            Итоговая сумма заказа вместе с доставкой:
          </h3>
          <h3 className="text-rose-600 text-lg ml-[500px] mt-[15px] absolute">
            1400 руб.
          </h3>
        </div>
        <hr className="w-[670px]" />
        <button className="w-[255px] h-[50px] bg-rose-500 text-white ml-[225px] mt-8">
          Оформить заказ
        </button>
        <p className="text-gray-600 text-xs mt-5">
          Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с Договором
          оферты и разрешаю обработку моих <br /> персональных данных в
          соответствии с Политикой конфиденциальности
        </p>
      </div>
      <h1 className="text-3xl text-center mt-10 ">Добавить в заказ</h1>
      <div>
        <img src="" alt="" />
      </div>
      <div className="grid grid-cols-4 mt-10 w-[1200px]">
        {CartProducts.map((item, index) => (
          <div key={index} className="w-[271px] h-[400px] box-border border">
            <img className="w-[271px] h-[220px]" src={item.image} alt="" />
            <div>
              <h1 className="text-lg ml-3 mt-3">{item.title}</h1>
              <p className="text-gray-600 ml-3">{item.description}</p>
              <hr className="mt-[40px] w-[271px]  absolute" />
              <div>
                <div className="mt-[-10px] ml-4 absolute">
                  <h2 className="text-gray-600 line-through">160 руб</h2>
                  <h2 className="text-rose-600 text-lg">{item.price}</h2>
                </div>
                <div className="flex justify-center ml-[150px] mt-[60px]">
                  <img className="m-1" src={CartLogo} alt="" />
                  <h2 className="m-1">В корзину</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </Container>
  );
}

export default CartBlock;

import React from "react";
import Container from "../../shared/Container/Container";
import MacaronShopGeoLogo from "./png/MacaronShopGeoLogo.png";
function Contact() {
  return (
    <Container>
      <h2 className="ml-[470px] mt-[70px]">Главная > Контакты</h2>
      <div className="flex justify-between items-center w-[900px] ml-[100px]">
        <img src={MacaronShopGeoLogo} alt="" />
        <div>
          <h1 className="text-gray-700 font-Montserrat text-2xl font-semibold leading-51 tracking-tight text-left">
            Контакты
          </h1>{" "}
          <br />
          <div>
            <h2 className="text-gray-700 font-Montserrat text-base font-semibold leading-22 tracking-normal text-left">
              Производство
            </h2>
            <p className="text-gray-700 font-Proxima-Nova text-base font-normal leading-relaxed tracking-normal text-left">
              Маршала Тухачевского, 22 <br />
              Время работы: с 8 до 19:30.
            </p>{" "}
            <br />
          </div>
          <div>
            <h2 className="text-gray-700 font-Montserrat text-base font-semibold leading-22 tracking-normal text-left">
              Пункты самовывоза:
            </h2>
            <p className="text-gray-700 font-Proxima-Nova text-base font-normal leading-relaxed tracking-normal text-left">
              Кафе “Морошка”. Маршала Тухачевского, 22 <br />
              (с 8 до 19:30) <br />
              Кафе “Мята”. Наб канала Грибоедова, 37 <br />
              (с 10 до 22)
            </p>{" "}
            <br />
          </div>
          <div>
            <h2 className="text-gray-700 font-Montserrat text-base font-semibold leading-22 tracking-normal text-left">
              Телефоны:
            </h2>
            <p className="text-gray-700 font-Proxima-Nova text-base font-normal leading-relaxed tracking-normal text-left">
              8 (812) 309-82-88 основной номер <br />8 (981) 841-85-25 для жалоб
              и предложений
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;

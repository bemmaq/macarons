import React, { useState } from "react";
import map from "../../shared/assets/svg/map.svg";
import Phone from "../../shared/assets/svg/phone.svg";
import Cart from "../../shared/assets/svg/basket.svg";
import Container from "../../shared/Container/Container.jsx";
import telegramm from "../../shared/assets/svg/telegramm.svg";
import wk from "../../shared/assets/svg/wka.svg";
import okk from "../../shared/assets/svg/okk.svg";
import { Link } from "react-router-dom";

const HeaderTwo = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Бишкек");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCity = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-rose-100">
      <Container>
        <div className="flex justify-between h-[48px]">
          <nav className="flex items-center gap-3">
            <Link to="/garant">
              <p>Гарантия свежести</p>
            </Link>

            <Link to={"/Contact"}>
              <h1>Контакты</h1>
            </Link>
          </nav>
          <div className="flex  gap-5">
            <nav className="flex items-center relative">
              <img src={map} alt="" />
              <h1 className="cursor-pointer" onClick={toggleDropdown}>
                {selectedCity}▾
              </h1>
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 bg-white border rounded shadow-lg">
                  <div className="flex flex-col">
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => selectCity("Бишкек")}
                    >
                      Бишкек
                    </button>
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => selectCity("Талас")}
                    >
                      Талас
                    </button>
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => selectCity("Нарын")}
                    >
                      Нарын
                    </button>
                  </div>
                </div>
              )}
            </nav>
            <nav className="flex items-center">
              <img src={Phone} alt="" />
              <h1>+996 (505) 439 323</h1>
            </nav>
            <nav className="flex items-center">
              <img src={Cart} alt="" />
              <h1>В корзине </h1>
            </nav>
            <div className="flex items-center">
              <Link to={"https://web.telegram.org/a/"}>
                <img width={30} src={telegramm} alt="" />
              </Link>
              <Link to={"https://vk.com/feed"}>
                <img width={30} src={wk} alt="" />
              </Link>
              <Link to={"https://ok.ru/"}>
                <img width={30} src={okk} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTwo;

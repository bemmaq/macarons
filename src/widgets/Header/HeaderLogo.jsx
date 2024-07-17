import React from "react";
import Prosent from "../../shared/assets/svg/sale.svg";
import Logoo from "../../shared/assets/svg/logo.svg";
import Container from "./../../shared/Container/Container";

const HeaderLogo = () => {
  return (
    <div>
      <Container>
        <div className=" h-[100px] ">
          <div className="flex items-center justify-between pt-[28px]">
            <div className="flex gap-5">
              <nav className="flex gap-1 items-center ">
                <h1> СЛАДКИЕ ДНИ</h1>
                <img className="w-[16px] h-[18px]" src={Prosent} alt="" />
              </nav>
              <h1>ПОДАРОЧНЫЕ НАБОРЫ▾</h1>
              <h1>СОБРАТЬ НАБОРЫ</h1>
            </div>

            <img className="w-[124px] h-[124px]" src={Logoo} alt="" />
            <div className="flex items-center gap-5">
              <h1>СОЗДАТЬ ДИЗАЙН</h1>
              <h1>КОМПАНИЯМ▾</h1>
              <h1>ВЕСЬ КАТАЛОГ▾</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderLogo;

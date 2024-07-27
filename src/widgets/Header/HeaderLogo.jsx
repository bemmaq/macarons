import React from "react";
import Prosent from "../../shared/assets/svg/sale.svg";
import Logoo from "../../shared/assets/svg/logo.svg";
import Container from "./../../shared/Container/Container";
import line from '../../shared/assets/svg/line.svg'
import liner from '../../shared/assets/svg/lineR.svg'
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div>
      <Container>
        <div className=" h-[100px] ">
          <div className="flex justify-between pt-[28px]">
            <div >
              <nav className="flex gap-1 items-center  pl-20 pt-[48px] ">
                <h1> СЛАДКИЕ ДНИ</h1>
                <img className="w-[16px] h-[18px]" src={Prosent} alt="" />
              </nav>
            </div>
            <div className="flex gap-5">
              <img src={line} alt="" />
              <Link to={'/'}>
              
              <img className="w-[124px] h-[124px]" src={Logoo} alt="" />
              </Link>
              <img src={liner}alt="" />
            </div>
            <div className="flex items-center gap-5">
              <h1>ПОДАРОЧНЫЕ  НАБОРЫ</h1>
              <h1>СОБРАТЬ  НАБОР</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderLogo;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperOne from "../../shared/assets/img/slide.png";
import SwiperTwo from "../../shared/assets/img/slide2.png";
import SwiperThree from "../../shared/assets/img/slide3.png";
import SwiperFour from "../../shared/assets/svg/slide4.svg";
import Full from "../../shared/assets/svg/full.svg";

// import "./HeaderLogo.jsx";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
// import Logo from "./Logo.jsx";
import HeaderTwo from "./HeaderTwo.jsx";
import Container from "../../shared/Container/Container.jsx";
import HeaderLogo from "./HeaderLogo.jsx";

const Header = ({handlePopular}) => {
  
  return (
    <div className="">
      <div className="bg-blue-200">
        <Container>
          <Swiper
            autoplay={{ delay: 2000 }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            style={{ "--swiper-navigation-size": "15px" }}
            speed={1000}
          >
            <SwiperSlide>
              <div className="flex justify-center items-center gap-[14px] ">
                <img src={SwiperOne} alt="" />
                <h1 className="text-black font-light text-lg">
                  ДОСТАВКА В ДЕНЬ ЗАКАЗА
                </h1>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center gap-[14px]">
                <img src={SwiperThree} alt="" />
                <h1 className="text-black font-light text-lg">
                  ВСЕГДА СВЕЖЕЕ{" "}
                </h1>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center gap-[14px]">
                <div>
                  <img src={SwiperFour} alt="" />
                </div>

                <h1 className="text-black font-light text-lg">
                  МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>

      <HeaderTwo />

      <HeaderLogo handlePopular={handlePopular}/>
    </div>
  );
};

export default Header;

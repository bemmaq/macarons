import React from "react";
import Container from "../../shared/Container/Container";
import { NewsProducts } from "./data/index"; // Используем деструктуризацию для импорта именованного экспорта

function News() {
  return (
    <Container>
      <h3 className="text-[rgb(41, 41, 41)] font-proxima-nova text-base font-normal leading-[17px] tracking-[0%] ml-[470px] mt-[100px] "
      >Главная >> Новости</h3>
      <div className="New mt-40">
        <h1 className="text-[rgb(41, 41, 41)] font-montserrat text-2xl font-semibold leading-[37px] tracking-[0%] ml-[500px] mt-[-140px]"
        >Новости</h1>
        <div className="flex justify-center items-center w-[1200px] mt-[80px] ">
          {/* 1 */}
          <div className="w-[110px] h-[40px] rounded-full bg-[pink] ml-[-400px] p-1 ">
            <h2 className="text-center mt-1 items-center text-slate-600"
            >Все новости</h2>
          </div>
          {/* 2 */}
          <div className="w-[203px] h-[40px] rounded-full bg-[pink] m-1 p-[2px]">
            <h2 className="text-center mt-1 items-center text-slate-600">Обновления ассортимента</h2>
          </div>
          {/* 3 */}
          <div className="w-[70px] h-[40px] rounded-full bg-[pink] m-1 p-1 ">
            <h2 className="text-center mt-1 items-center text-slate-600">Акции</h2>
          </div>
          {/* 4 */}
          <div className="w-[93px] h-[40px] rounded-full bg-[pink] m-1 p-1">
            <h2 className="text-center mt-1 items-center text-slate-600">Конкурсы</h2>
          </div>
          {/* 5 */}
          <div className="w-[156px] h-[40px] rounded-full bg-[pink] m-1 p-1">
            <h2 className="text-center mt-1 items-center text-slate-600">подарок на 8 марта</h2>
          </div >
          {/* 6 */}
          <div className="w-[68px] h-[40px] rounded-full bg-[pink] m-1 p-1">
            <h2 className="text-center mt-1 items-center text-slate-600">весна</h2>
          </div>

        </div>
        <div className="Products grid grid-cols-3">
          {NewsProducts.map((item, index) => (
            <div className="Product w-[370px] m-5" key={index}>
              <img className="w-[370px] h-[210px]" src={item.image} alt="" />
              <div className="box-border border border-solid border-gray-300 rounded-b-[10px] bg-white w-[370px] h-[200px]"
              >
                <h5 className="text-gray-600 font-Montserrat text-sm font-normal leading-17 tracking-normal text-left ml-[15px] mt-[10px]">
                  {item.time}
                </h5>
                <h2 className="ml-[15px] mt-[10px] text-gray-700 font-Montserrat text-base font-semibold leading-22 tracking-normal text-left">
                  {item.title}
                </h2>
                <p className=" ml-[15px] mt-[10px] text-gray-700 font-proxima-nova text-base font-normal leading-17 tracking-normal text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default News;

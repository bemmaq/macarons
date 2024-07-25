import React from 'react'
import Container from "../../shared/Container/Container";
import like from "../../shared/assets/svg/like.svg";
import burder from "../../shared/assets/svg/burder.svg";
import water from '../../shared/assets/svg/water.svg' 
import inst from '../../shared/assets/svg/inst.svg'
import face from '../../shared/assets/svg/face.svg'
import vk from '../../shared/assets/svg/vk.svg'


const Footer = () => {
  return (
    <div className='bg-[#EBEDEE]'>
    <Container>
    <div className=' flex gap-12 border h-[318px] mt-28'>
      <div className='boder flex flex-col justify-evenly'>
        <div className='flex items-center gap-9  text-[12px]'>
          <div className='flex flex-col items-center  text-center h-[100px]'>
            <img className="w-[44px] h-[39px]" src={like} alt='' />
            <h5>Готовим вручную <br></br>и
              с любовью</h5>
          </div>
          <div className='flex flex-col items-center  text-center h-[105px]'>
            <img className='w-[44px] h-[34px]' src={burder} alt='' />
            <h5>Доставимв <br></br>день заказа</h5>
          </div>
          <div className='flex flex-col items-center  text-center h-[105px]'>
            <img className='w-[28px] h-[37px]' src={water} alt='' />
            <h5>100% <br></br>миндальная мука<br></br> и натуральные <br></br>ингредиенты</h5>
            <div>
            </div>
          </div>
        </div>
        <div className=' w-[370px] flex flex-wrap'>
          <h6>
            © 2021 Макароншоп<br />ООО"Квантум", Санкт-Петербург,  улица Маршала Тухачевского, дом 22
          </h6>
        </div>
      </div>
      <div className='flex gap-20'>
        <div className=' mr-8'>
          <h1 className='w-[116px] h-[19px] text-[16px] gap-10 mt-11 font-bold uppercase mb-3'>Информация</h1>
          <h5 className='text-[14px]'>О компании <br />
            Гарантии вкуса и<br /> свежести
            <br />Доставка и оплата
            <br />  Контакты
          </h5>
        </div>
        <div className="mr-8">
          <h1 className='w-[116px] h-[19px] text-[16px] mt-11 font-bold uppercase mb-3'>Каталог</h1>
          <h5 className='text-[14px]'>Каталог десертов<br />
            Готовые наборы<br />
            Собрать свой набор<br />
            Наборы с печатью<br/>
            Свадебные предложения<br/>
            Акции
            <br />

          </h5>
        </div>
       
        <div className='flex flex-col items-center ml-55'>

          <div className='flex flex-col'>
            <h1 className=' text-[16px] mt-11 font-bold mb-2'>+7 (812) 309 82 88</h1>
            <h5 className='flex justify-end'>с 9:00 до 21:00</h5>
          </div>
          <div className='flex mt-12 gap-3'>
            <img className='w-[24px] h-[24px]' src={inst} alt='' />
            <img className='w-[24px] h-[24px]' src={face} alt='' />
            <img className='w-[24px] h-[24px]' src={vk} alt='' />
          </div>
        </div>
      </div>
      <div>
      </div>

    </div>
    </Container>
    </div>






  )
}

export default Footer
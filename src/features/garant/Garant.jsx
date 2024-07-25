import React from 'react'
import milk from '../../shared/assets/svg/milk.svg'
import macaron from '../../shared/assets/svg/macaron.svg'
import apelsin from '../../shared/assets/svg/apelsin.svg'
import { Container } from '@mui/material'

function Garant() {
    return (
        <Container>
            <div className='mt-[100px] ml-[-200px]  bg-[#F7F7F7] w-[1550px] h-[600px]'>
                <div className=''>
                    <p className='text-center text-2xl mb-10'>Гарантии вкуса и качества</p>
                    <p className='text-center mb-10'>При изготовлении пирожных мы используем только натуральные <br />ингредиенты, избегая использования конвер</p>
                </div>

                <div className='flex gap-10 justify-center '>
                    <img className='w-[270px] h-[270px] ' src={milk} alt='' />

                    <img className='w-[270px] h-[270px] ' src={macaron} alt='' />
                    <img className='w-[270px] h-[270px] ' src={apelsin} alt='' />
                </div>
                    <div className='flex  ml-[180px] gap-32 justify-items-end  justify-center'>
                        <p> <span className='ml-[-50px]'>100%</span> <br /> <span className='ml-[-90px]'>миндальная мука</span></p>
                        <p><span className='ml-[100px]'>100%</span><br/>безопасные пищевые красители</p>
                        <p className="ml-[-50px]"><span className='ml-[100px]'>100%</span><br/>фруктовые пюре и натруральные <br /> ингредиенты</p>

                    </div>
            </div>
        </Container>
    )
}

export default Garant
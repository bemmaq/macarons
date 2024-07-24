import React from 'react'
import Container from "../../../../shared/Container/Container";
function Contact() {
  return (
    <>
    <h5>Главная  Контакты</h5>
    <Container>
      <img src="" alt="" />
      <div>
        <h1>Контакты</h1>
        <div>
            <h2>Производство</h2>
            <p>Маршала Тухачевского, 22 <br />Время работы: с 8 до 19:30.
            </p>
        </div>
        <div>
            <h2>Пункты самовывоза:</h2>
            <p>
            Кафе “Морошка”. Маршала Тухачевского, 22 <br /> (с 8 до 19:30)
            Кафе “Мята”. Наб канала Грибоедова, 37 <br /> (с 10 до 22)
            </p>
        </div>
        <div>
            <h2>Телефоны:</h2>
            <p>
                8 (812) 309-82-88 основной номер <br />
                8 (981) 841-85-25 для жалоб и предложений
            </p>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Contact

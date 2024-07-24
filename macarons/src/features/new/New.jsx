import React from 'react';
import Container from '../../shared/Container/Container';
import { motion } from 'framer-motion';
import a from '../../shared/assets/svg/a.svg';
import a2 from '../../shared/assets/svg/a2.svg';
import a3 from '../../shared/assets/svg/a3.svg';
import b from '../../shared/assets/svg/b.svg';
import b2 from '../../shared/assets/svg/b2.svg';
import b3 from '../../shared/assets/svg/b3.svg';
import b4 from '../../shared/assets/svg/b4.svg';
import maca from '../../shared/assets/svg/maca.svg';
import maca1 from '../../shared/assets/svg/maca1.svg';

function New() {
  return (
    <div>
      <div className="relative pb-20 top-35">
        <img className="absolute top-40 mt-80  left-0" src={maca} alt="Background Image" />

      </div>
      <Container>
        <section className="mb-8 pt-20">
          <h2 className="text-2xl font-bold text-center mb-4">Новости</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[a, a2, a3].map((src, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg bg-white shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
              >
                <img src={src} alt={`Image ${index + 1}`} className="w-full object-cover mb-4" />
                <p className="text-gray-500 mb-2">{index === 0 ? '21.02.2023' : '11.02.2023'}</p>
                <h3 className="font-semibold text-lg mb-2">
                  {index === 0
                    ? 'Скоро главный праздник весны!'
                    : index === 1
                      ? 'Конкурс на 23 февраля!'
                      : 'Экспресс-подарок ко дню Святого Валентина'}
                </h3>
                <p>
                  {index === 0
                    ? 'Делаем вкусные подарки к 8 марта: печенье, макаронс, зефир, шоколадные фигурки'
                    : index === 1
                      ? 'Дорогие женщины! Участвуйте в конкурсе и выигрывайте призы для своих мужчин!'
                      : 'Не забыли заказать подарок на 14 февраля? Заказывайте наборы макаронс и зефира'}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-4 mb-40">
            <motion.button
              className="border-blue-700 text-black py-2 px-4 rounded"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              Все новости
            </motion.button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Мы обо всём позаботились</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[b, b2, b3, b4].map((src, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg bg-white shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
              >
                <img src={src} alt={`Service ${index + 1}`} className="w-full object-cover mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  {index === 0
                    ? 'Лучшие ингредиенты'
                    : index === 1
                      ? 'Упаковка'
                      : index === 2
                        ? 'Получение в день заказа'
                        : 'Анонимная доставка'}
                </h3>
                <p>
                  {index === 0
                    ? 'Для вас – только свежие и натуральные продукты'
                    : index === 1
                      ? 'Каждый заказ упакован в бант и безопасен для хранения'
                      : index === 2
                        ? 'Вы можете забрать ваш заказ в день оформления'
                        : 'Доставим ваш заказ так, чтобы никто не узнал, что внутри'}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </Container>
      <div>
      </div>
    </div>
  );
}

export default New;

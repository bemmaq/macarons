import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PopularSet } from "../../PopularSets/data/Index";
import Container from "../../../shared/Container/Container";
import basket2 from "../../../shared/assets/svg/basket2.svg";
import group227 from "../../../shared/assets/svg/group227.svg";
import group226 from "../../../shared/assets/svg/group226.svg";
import group225 from "../../../shared/assets/svg/group225.svg";
import Tabls from "../Tabls/Tabls";
import ProductBlock from "../ProductBlock/ProductBlock";

const ProductCart = () => {
  const { id: prodId } = useParams();
  const navigate = useNavigate();

  const product = PopularSet.find((item) => item.id === prodId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <div className="mt-40 flex gap-5 justify-between">
        <div>
          <img className="w-[540px] h-[450px]" src={product.image} alt={product.title} />
        </div>

        <div>
          <h2 className="text-3xl">{product.title}</h2>
          <p className="py-5">{product.description}</p>

          <div className="shadow border-2 border-gray-200 rounded-xl p-5 w-[570px]">
            <div>
              <h4 className="text-2xl">Вкусы:</h4>

              <div className="flex justify-between pt-3">
                <p>Яблоко</p>
                <p>4 шт.</p>
              </div>

              <div className="flex justify-between">
                <p>Вишня</p>
                <p>12 шт.</p>
              </div>

              <div className="flex justify-between">
                <p>Кокос</p>
                <p>8 шт.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between border-2 rounded-xl border-gray-200 shadow p-5 w-[570px] mt-4 items-center">
            <p className="text-[#E7426A] text-2xl font-bold">{product.price}</p>
            <div className="flex gap-3 bg-[#E7426A] w-[178px] h-[50px] rounded">
              <img className="w-[18px] ml-10" src={basket2} alt="Basket" />
              <button className="text-white">В корзину</button>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex gap-5">
              <img src={group227} alt="Delivery" />
              <p>
                Доставка от 400 руб. в день заказа с 12 до 17 или с 17 до 21.
                Бесплатно при заказе на сумму от 2000 руб
              </p>
            </div>

            <div className="flex gap-5">
              <img src={group226} alt="Pickup" />
              <p>Самовывоз бесплатно Через 3 часа после оплаты заказа</p>
            </div>

            <div className="flex gap-5">
              <img src={group225} alt="Anonymous Gift" />
              <p>Можем преподнести как анонимный подарок:)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 border-2 p-5 z-50 bg-white shadow-lg rounded">
        <Tabls />
      </div>
      <div>
        <ProductBlock />
      </div>
    </Container>
  );
};

export default ProductCart

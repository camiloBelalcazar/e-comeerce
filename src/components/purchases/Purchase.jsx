import React from 'react'
import { formatDDMMYYYY } from '../../utils/date';

const Purchase = ({ purchase }) => {
    
    const totalPrice = (purchase.product.price * purchase.quantity).toFixed(2)

  return (
    <article className="grid grid-cols-2 gap-2 text-sm items-center">
      {/*section izquierda */}
      <section className="flex items-center gap-2">
        <div className="h-[29px] md:h-[85px] aspect-square">
          <img
            className="h-full w-full object-contain"
            src={purchase.product.images[2].url}
            alt=""
          />
        </div>
        <span className="text-xs md:text-xl">{purchase.product.title}</span>
      </section>

      {/*section derecha */}
      <section className=" text-center items-center justify-center font-semibold flex">
        <span className="text-xs pr-2 md:text-lg">
          {formatDDMMYYYY(purchase.createdAt)}
        </span>
        <span className="p-1 px-2 md:px-6 border-[1px] border-gray-400 md:text-lg">
          {purchase.quantity}
        </span>
        <span className="text-xs pl-2 md:text-lg">${totalPrice}</span>
      </section>
    </article>
  );
}

export default Purchase

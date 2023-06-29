import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductCart } from "../../store/slices/cart.slice";

const CartProduct = ({ cartProduct }) => {

  const dispatch = useDispatch();

    const totalPrice = (cartProduct.quantity * cartProduct.product.price).toFixed(2)

  const handleClickDelete = () => { 
    dispatch(deleteProductCart(cartProduct.id));
  }


  return (
    <article className="grid pt-2 grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto] gap-y-2">
      <div className="h-[80px] aspect-square p-2">
        <img
          className="w-full h-full object-contain"
          src={cartProduct.product.images[0].url}
          alt=""
        />
      </div>

      <section>
        <span className="text-sm line-clamp-2 ">{cartProduct.product.title}</span>

        <article className="mt-2">
          <h5 className="text-sm text-gray-300 font-semibold">cuantity</h5>
          <div className="flex border-[1px] max-w-max">
            <button className="p-1 px-3 border-[1px]"> -</button>
            <div className="p-1 px-4 border-[1px]">{cartProduct.quantity}</div>
            <button className="p-1 px-3 border-[1px]">+</button>
          </div>
        </article>
      </section>
      <i onClick={handleClickDelete} className="bx bxs-trash text-end cursor-pointer justify-self-end self-start text-red-500"></i>

      <span className="col-span-2 text-end text-sm">total:</span>

      <span className="px-2 text-sm" >${totalPrice}</span>
    </article>
  );
};

export default CartProduct;

import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProductToCart } from '../../store/slices/cart.slice'

const Product = ({ product }) => {

  const dispatch = useDispatch()
  
  const handleClickAddProduct = (e) => {
    e.preventDefault()
    const productAdd = { quantity: 1, productId: product.id };
    dispatch(addProductToCart(productAdd))
  }

  return (
    <Link
      to={`/products/${product.id}`}
      className="border-2 rounded-lg w-[260px] min-h-[200px] xs:w-[320px] ssm:w-[350px] md:w-[330px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      <div className="h-[280px] overflow-hidden px-8  relative group">
        <img
          className="w-full h-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500 grid-cols-2"
          src={product.images[0].url}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <img
            className="w-full h-full object-contain"
            src={product.images[1].url}
            alt=""
          />
        </div>
      </div>
      <section className="border-t-2 grid gap-3 p-5 ">
        <div>
          <h5 className="text-gray-400/60 font-bold text-b">{product.brand}</h5>
          <h4 className="text-lg font-bold text-ellipsis  line-clamp-1  text-center ">
            {product.title}
          </h4>
        </div>

        <div className="flex justify-between items-center">
          <article className="grid w-32">
            <span className="text-gray-400/60 font-bold text-b">price</span>
            <span className="text-lg font-bold text-center">
              {" "}
              $ {product.price}
            </span>
          </article>
          <article>
            <button
              onClick={handleClickAddProduct}
              className="py-1 px-3 bg-red-500 hover:bg-red-600 aspect-square rounded-full"
            >
              <i className="bx bx-cart text-2xl text-white"></i>
            </button>
          </article>
        </div>
      </section>
    </Link>
  );
}

export default Product

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShowCart, getCartProducts } from '../../store/slices/cart.slice'
import Product from '../home/Product'
import CartProduct from './CartProduct'

const Cart = () => {

    const { isShowCart, products} = useSelector((store) => store.cart)

    const { token } = useSelector(store => store.userInfo)
    
    const dispatch = useDispatch()
    
  const handleClickChangShowCart = () => dispatch(changeIsShowCart());

  const handleClickCheckout = () => dispatch(changeIsShowCart());

  const totalPriceCheckout = products.reduce((acc, product) => acc + (product.quantity * product.product.price), 0).toFixed(2)
  
  useEffect(() => {
    if (token && isShowCart) {
      
      dispatch(getCartProducts())
    }
  },[isShowCart])

  return (
    <section
      className={`fixed top-0 bg-white h-screen ${
        isShowCart && token ? "right-0" : "-right-full"
      } w-[300px] transition-all duration-700 ease-in p-2 shadow-2xl shadow-black/30 grid grid-rows-[auto_1fr_auto]`}
    >
      <button onClick={handleClickChangShowCart} className='absolute top-3 right-3 text-xl text-red-500'>
        <i className="bx bxs-x-circle"></i>
      </button>

      <h3 className="font-bold text-xl">Shoppig Cart</h3>
      {/*productos del carrito */}
      <section className='grid gap-4 content-start overflow-y-auto'>
        {
          products.map((cartProduct) => <CartProduct key={cartProduct.id} cartProduct={cartProduct} />)
        }
      </section>

      {/* precio total */}
      <section className="border-t-[1px] border-gray-400 p-4 grid grid-cols-2 gap-4">
        <span>total</span>
        <span>{totalPriceCheckout}</span>
        <button onClick={handleClickCheckout} className="col-span-2 block w-full py-2 bg-red-500 text-white hover:bg-red-600 transition-colors">
          CheckOut
        </button>
      </section>
    </section>
  );
}

export default Cart

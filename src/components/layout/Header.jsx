import React from 'react'
import { Link } from 'react-router-dom'
import { changeIsShowCart } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const Header = () => {

  const dispatch = useDispatch()
  const handleClickShowCart = () => dispatch(changeIsShowCart())

  return (
    <header className="flex items-center justify-between md:border-b-2">
      <Link
        to="/"
        className="text-red-500 font-bold text-xl xs:text-2xl  py-5 px-6 md:text-3xl"
      >
        E-commerce
      </Link>

      <nav className="">
        <Link to="/login">
          <i className="bx bx-user text-gray-400 text-2xl hover:text-red-500 transition-colors duration-300 md:border-l-2 xs:text-[1.7rem] p-3 ssm:p-4 md:px-10 lg:px-16 xxl:px-28"></i>
        </Link>
        <Link to="/purchases">
          <i className="bx bx-box text-gray-400 text-2xl hover:text-red-500 transition-colors duration-300 md:border-l-2 xs:text-[1.7rem] p-3 ssm:p-4 md:px-10 lg:px-16 xxl:px-28"></i>
        </Link>
        <button onClick={handleClickShowCart}>
          <i className="bx bx-cart text-gray-400 text-2xl hover:text-red-500 transition-colors duration-300 md:border-l-2 xs:text-[1.7rem] p-3 ssm:p-4 md:px-10 lg:px-16 xxl:px-28"></i>
        </button>
      </nav>
    </header>
  );
}

export default Header

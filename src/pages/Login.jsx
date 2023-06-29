
import React from 'react'
import { useForm } from 'react-hook-form'
import { loginUser, logout, setUserInfo } from '../store/slices/userInfo.slice'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

    const {token, user} = useSelector((store) => store.userInfo)

    const dispatch = useDispatch()

   const {register, handleSubmit} = useForm()

    const submit = (dataForm) => {
        dispatch(loginUser(dataForm))

    }

    const handleClickLogout = () => {
        dispatch(logout())

    }

  return (
    <section className="bg-gray-100 grid place-content-center py-10 ssm:py-16 ">
      {token ? (
        <div className='py-36'>
          <section className="bg-white rounded-xl p-4 w-[280px] xs:w-[310px] ssm:w-[370px] md:w-[410px]  grid gap-6">
            <i className="bx bxs-user-circle text-gray-400/50 text-center text-8xl md:text-9xl"></i>
            <span className="text-center">
              {user.firstName} {user.lastName}
            </span>
            <button
              onClick={handleClickLogout}
              className="block w-full py-2 bg-red-500 text-white hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </section>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(submit)}
          className="bg-white rounded-xl p-6 max-w-[280px] xs:max-w-[320px] ssm:max-w-[360px] md:max-w-[450px]  grid gap-6"
        >
          <h3 className="font-semibold text-2xl p-2 leading-9">
            Welcome! Enter your email and password to continue{" "}
          </h3>

          <section className="bg-[#D8F5FD] p-4 rounded-md py-2">
            <h5 className="text-center font-bold mb-4">Test Data</h5>

            <div className="flex items-center gap-2">
              <i className="bx bx-envelope text-xl"></i>
              <span>john@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 pb-2">
              <i className="bx bx-lock-alt text-xl"></i>
              <span>john1234</span>
            </div>
          </section>
          <div className="grid gap-2">
            <label className="text-base" htmlFor="email">
              Email
            </label>
            <input
              {...register("email")}
              className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
              id="email"
              type="email"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-base" htmlFor="password">
              Password
            </label>
            <input
              {...register("password")}
              className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
              id="password"
              type="password"
            />
          </div>

          <button className="block w-full py-2 bg-red-500 text-white hover:bg-red-700 transition-colors">
            Login
          </button>

          <span className="text-sm">Don't have an account? Sign up</span>
        </form>
      )}
    </section>
  );
}

export default Login

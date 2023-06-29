import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Purchases from './pages/Purchases'
import Header from './components/layout/Header'
import ProtectedRoutes from './components/auth/ProtectedRoutes'
import Footer from './components/layout/Footer'
import Cart from './components/cart/Cart'
import SignUp from './pages/SignUp'

function App() {


  return (
    <main className='grid grid-rows-[auto_1fr] min-h-screen font-[Yantramanav"]'>
    <Header/>

    <Routes>

      <Route path='/' element={<Home/>} />

        <Route path='/login' element={<Login />} />
        
        <Route path='/signup' element={<SignUp/>} />

      
    <Route path='/products/:id' element={<ProductDetail/>} />

    <Route element={<ProtectedRoutes/>}>

    <Route path='/purchases' element={<Purchases/>} />

    </Route>
       
       


      </Routes>
      <Cart/>
      <Footer/>
    </main>
  )
}

export default App

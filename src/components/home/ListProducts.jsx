import React from 'react'
import Product from './Product'

const ListProducts = ({products}) => {
  return (
    <section className='grid gap-10 pb-10 px-2 justify-items-center py-10 md:grid-cols-2 md:px-9 xxl:grid-cols-3 lg:px-36 lg:gap-x-60 lg:gap-y-20 xxl:px-5'>
            {
              products.map((product) => <Product key={product.id} product={product}/> )
            }
          </section>
  )
}

export default ListProducts

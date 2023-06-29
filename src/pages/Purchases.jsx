import React, { useEffect, useState } from 'react'
import { axiosEcommerce, getConfig } from '../utils/configAxios'
import Purchase from '../components/purchases/Purchase'
import { Link } from 'react-router-dom'

const Purchases = () => {
  const [purchasesHystory, setPurchasesHystory] = useState([])


  useEffect(() => {
    axiosEcommerce.get('/purchases', getConfig())
      .then(({ data }) => {
        const orderPurchases = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPurchasesHystory(orderPurchases);
      })
      .catch(err => console.log(err))
  },[])
  return (
    <section className="max-w-[1000px] mx-3 md:px-16 lg:mx-auto flex flex-col gap-5 my-10">
      <section className="flex tex-xs gap-2 items-center md:text-xl">
        <Link to="/">Home</Link>
        <div className="h-[6px] aspect-square rounded-full bg-red-600"></div>
        <span className="font-bold truncate w-[200px]">Purchases</span>
      </section>
      <h3 className='text-2xl font-bold md:text-4xl'>My Purchases</h3>

      <section className="flex flex-col gap-8 p-2 mt-10 ">
        {purchasesHystory.map((purchase) => (
          <Purchase key={purchase.id} purchase={purchase} />
        ))}
      </section>
    </section>
  );
}

export default Purchases

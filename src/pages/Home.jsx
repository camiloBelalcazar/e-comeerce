import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosEcommerce } from "../utils/configAxios";
import Product from "../components/home/Product";
import ListProducts from "../components/home/ListProducts";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productName, setProductName] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState(false);

  const productsByName = products.filter((product) =>
    product.title.toLowerCase().includes(productName)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentProductName = e.target.productName.value;
    setProductName(currentProductName.toLowerCase());
  };

  const handleClickCategory = (e) => {
    setCurrentCategory(e.target.dataset.category);
  };

  const handleIsOpenCategory = () => {
    setIsOpen(!isOpen);
  };

  const HandleClickCategorys = () => {
    setFilter(true);
  };
  const handleExitCategory = () => {
    setFilter(false);
  };

  useEffect(() => {
    axiosEcommerce
      .get("/categories")
      .then(({ data }) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  /*   useEffect(() => {

    axiosEcommerce.get('/products')
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err))
  }, []); */

  useEffect(() => {
    axiosEcommerce
      .get(`/products?categoryId=${currentCategory}`)
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, [currentCategory]);

  return (
    <section className="lg:grid">
      <form onSubmit={handleSubmit}>
        <article className="lg:grid lg:grid-cols-[270px,_1fr] xxl:grid-cols-[370px,_1fr] ">
          <div
            className={`fixed top-0 ${
              filter ? "left-0" : " -left-full"
            } lg:relative p-4 py-20 h-full w-[290px] bg-white absolute z-20 transition-all duration-500 ease-in lg:left-0 shadow-2xl lg:shadow-none shadow-black/30 `}
          >
            <button
              onClick={handleExitCategory}
              className=" lg:hidden absolute top-3 left-3 text-xl text-red-500"
            >
              <i className="bx bxs-x-circle"></i>
            </button>
            <div>
              <section className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold lg:hidden">Filters</h3>
                <div className="flex justify-between border-b-2 border-gray-400">
                  <h4 className=" md:text-xl font-semibold">
                    Category
                  </h4>
                  <button onClick={handleIsOpenCategory}>
                    {isOpen ? (
                      <i className="bx bx-caret-up"></i>
                    ) : (
                      <i className="bx bx-caret-down"></i>
                    )}
                  </button>
                </div>
                <ul
                  className={`${
                    isOpen ? "max-h-[5000px]" : "max-h-[0px]"
                  } lg:absolute my-4 px-4 lg:mt-8 overflow-hidden transition-all duration-500 ease-in `}
                >
                  <li className="text-lg" onClick={handleClickCategory} data-category={""}>
                    All
                  </li>
                  {categories.map((category) => (
                    <li
                      className="cursor-pointer py-1 md:text-lg"
                      onClick={handleClickCategory}
                      data-category={category.id}
                      key={category.id}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* <section className='grid gap-10 px-2'>
            {
              productsByName.map((product) => <Product key={product.id} product={product}/> )
            }
          </section> */}
          <div className="pt-10 xxl:mx-36">
            <article>
              <div className="flex justify-center">
                <input
                  placeholder="What are you looking for?"
                  className="text-sm border-y-2 border-l-2 py-3 pl-3 w-56 xs:w-64 ssm:w-80 md:w-[600px]"
                  id="productName"
                  type="text"
                />
                <button className="px-3  bg-red-500">
                  <i className="bx bx-search text-2xl text-white"></i>
                </button>
              </div>
              <div className="flex justify-end px-10 py-3 lg:hidden">
                <button
                  onClick={HandleClickCategorys}
                  className="flex items-center text-gray-400"
                >
                  <i className="bx bx-filter-alt px-1 text-2xl text-gray-400"></i>
                  Filters
                </button>
              </div>
            </article>
            <ListProducts products={productsByName} />
          </div>
        </article>
      </form>
    </section>
  );
};

export default Home;

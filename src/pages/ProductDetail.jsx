import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosEcommerce } from "../utils/configAxios";
import ListProducts from "../components/home/ListProducts";
import { addProductToCart } from "../store/slices/cart.slice";
import { useDispatch } from "react-redux";

const sliderStyles = {
  1: "-ml-[0%]",
  2: "-ml-[100%]",
  3: "-ml-[200%]",
}

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [imageToShow, setImageToShow] = useState(1);
  console.log(product);

  const dispatch = useDispatch();

  const { id } = useParams();

  const handleClickPlus = () => setQuantity(quantity + 1);

  const handleClickLess = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

   const hanldeClickNextImage = () => {
     if (imageToShow < 3) {
       setImageToShow(imageToShow + 1);
     }
   };

  const handleClickPreviusImage = () => {
    if (imageToShow > 1) {
      setImageToShow(imageToShow - 1);
    }
  }

  const handleClickAddProduct = () => { 
    const productToAdd = {
      quantity,
      productId: product.id
    };
    dispatch(addProductToCart(productToAdd));
  }

 

  useEffect(() => {
    axiosEcommerce
      .get(`/products/${id}`)
      .then(({ data }) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (product) {
      axiosEcommerce
        .get(`/products?categoryId=${product.categoryId}`)
        .then(({ data }) => {
          const productsFiltered = data.filter(
            (item) => item.id !== product.id
          );
          setSimilarProducts(productsFiltered);
        })
        .catch((err) => console.log(err));
    }
  }, [product]);

  return (
    <section className="p-2 py-5 max-w-[1000px] mx-auto">
      <section className="flex tex-xs gap-2 items-center">
        <Link to="/">Home</Link>
        <div className="h-[6px] aspect-square rounded-full bg-red-600"></div>
        <span className="font-bold truncate w-[200px]">{product?.title}</span>
      </section>


      <section className="grid gap-6 sm:grid-cols-2 p-4 md:p-9">
        {/*slider */}
        <article className="overflow-hidden relative">
          <section className={`flex w-[300%] ${sliderStyles[imageToShow]} transition-all duration-200`}>
            <div className="h-[300px] w-[calc(100%_/_3)]">
              <img
                className="w-full h-full object-contain"
                src={product?.images[0].url}
                alt=""
              />
            </div>
            <div className="h-[300px] w-[calc(100%_/_3)]">
              <img
                className="w-full h-full object-contain"
                src={product?.images[1].url}
                alt=""
              />
            </div>
            <div className="h-[300px] w-[calc(100%_/_3)]">
              <img
                className="w-full h-full object-contain"
                src={product?.images[2].url}
                alt=""
              />
            </div>
          </section>
          <button
            onClick={handleClickPreviusImage}
            className="absolute top-1/2 left-2 text-2xl bg-red-500 h-[35px] aspect-square rounded-full text-white -translate-y-1/2"
          >
            <i className="bx bx-chevron-left"></i>
          </button>
          <button
            onClick={hanldeClickNextImage}
            className="absolute top-1/2 right-2 text-2xl bg-red-500 h-[35px] aspect-square rounded-full text-white -translate-y-1/2 "
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </article>

        {/* detalles */}
        <article className="grid gap-6 sm:grid-cols-1 items-center">
          <div>
            <h4 className="text-gray-300 font-semibold">{product?.brand}</h4>
            <span className="font-semibold block text-lg ml-2 truncate">
              {product?.title}
            </span>
          </div>

          <section className="grid grid-cols-2 order-2">
            <article>
              <h4 className="text-gray-300 font-semibold">price</h4>
              <span className="font-semibold block text-lg ml-2 truncate">
                {product?.price}
              </span>
            </article>

            <article>
              <h5 className="text-sm text-gray-300 font-semibold">cuantity</h5>
              <div className="flex border-[1px] max-w-max">
                <button
                  className="p-1 px-3 border-[1px]"
                  onClick={handleClickLess}
                >
                  -
                </button>
                <div className="p-1 px-3 border-[1px]">{quantity}</div>
                <button
                  className="p-1 px-3 border-[1px]"
                  onClick={handleClickPlus}
                >
                  +
                </button>
              </div>
            </article>
          </section>
          <button onClick={handleClickAddProduct} className="block w-full py-2 bg-red-500 text-white hover:bg-red-700 transition-colors md:order-3">
            add to card <i className="bx bx-cart"></i>
          </button>

          <p className="text-sm">{product?.description}</p>
        </article>
      </section>

      <section className="pt-14">
        <h3 className="text-red-500 font-bold px-5">Discover Similar Items</h3>

        <ListProducts products={similarProducts} />
      </section>
    </section>
  );
};

export default ProductDetail;

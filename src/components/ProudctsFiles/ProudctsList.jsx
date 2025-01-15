import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GetCartContext } from "../Context/AllContext";
function ProudctsList(props) {
  const [click, setClick] = useState(true);
  const products = props.props;
  const { addToCart } = useContext(GetCartContext);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div className="group h-3/4" key={product.id}>
                <div className="image h-full">
                  <img
                    alt={product.category.name}
                    src={product.images[0]}
                    className="aspect-square w-full h-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                  />
                </div>
                <h1 className="mt-4 text-sm text-gray-700">{product.title}</h1>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.category.name}
                </p>
                <span className="text-red-700">$ {product.price}</span>
                <div className="flex justify-content-around ">
                  <button
                    onClick={() => addToCart(product)}
                    className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-3 p-3"
                  >
                    <Link to="cartPage">Add to cart</Link>
                  </button>

                  <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-3 p-3">
                    <Link to={`/proudcts/${product.id}`}>Details</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProudctsList;

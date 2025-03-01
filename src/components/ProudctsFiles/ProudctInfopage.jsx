import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { GetCartContext, GetCommentsContext } from "../Context/AllContext";
import CommentLoading from "./CommentLoading";

function ProudctInfopage() {
  const params = useParams();
  const [products, SetProudct] = useState([]);
  const id = params.proudctID;
  const comments = useContext(GetCommentsContext);
  const { addToCart } = useContext(GetCartContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => SetProudct(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 h-full">
        <div className=" rounded-lg bg-gray-200 lg:col-span-2 h-1/2">
          <div className="image ">
            <img
              alt={products.title}
              src={products.images}
              className="aspect-square w-full h-1/2 rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
            />
            <div className="flex justify-content-around w-full my-3">
              <button
                onClick={() => addToCart(products)}
                className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-3 p-3"
              >
                <Link to="/cartPage">Add to cart</Link>
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-lg bg-gray-200 h-1/2 p-4 flex flex-col justify-start ">
          <div className="description flex flex-col justify-around h-auto font-mono text-4xl">
            <h1 className="mt-4 text-3xl text-gray-700">{products.title}</h1>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {products.description}
            </p>
            <span className="text-red-700">$ {products.price}</span>
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>
          {comments.map((e) => {
            {
              if (loading) {
                setTimeout(() => {
                  setLoading(false);
                }, 4000);
                return <CommentLoading />;
              } else {
                return (
                  <div className="mt-8" key={e.id}>
                    <div id="keen-slider" className="keen-slider">
                      <div className="keen-slider__slide  transition-opacity duration-500">
                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                          <div className="flex items-center gap-4">
                            <img
                              alt=""
                              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                              className="size-14 rounded-full object-cover"
                            />

                            <div>
                              <div className="flex justify-center gap-0.5 text-green-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="size-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="size-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="size-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="size-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="size-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>

                              <p className="mt-0.5 text-lg font-medium text-gray-900">
                                Paul Starr
                              </p>
                            </div>
                          </div>

                          <p className="mt-4 text-gray-700">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Culpa sit rerum incidunt, a consequuntur
                            recusandae ab saepe illo est quia obcaecati neque
                            quibusdam eius accusamus error officiis atque
                            voluptates magnam!
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
      </section>
    </>
  );
}

export default ProudctInfopage;

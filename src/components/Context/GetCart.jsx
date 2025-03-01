import React, { useState } from "react";
import { GetCartContext } from "./AllContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function GetCart(props) {
  const CART = "cat";

  const calcTotal = (items) => {
    localStorage.setItem(CART, JSON.stringify(items));
    const itemCount = items.reduce((prev, curr) => prev + curr.qty, 0);
    const cartTotal = items.reduce(
      (prev, curr) => prev + curr.qty * curr.price,
      0
    );
    return { itemCount, cartTotal };
  };

  const [cart, setCart] = useState({
    items: JSON.parse(localStorage.getItem(CART)) || [],
    ...calcTotal(JSON.parse(localStorage.getItem(CART)) || []),
  });

  const addToCart = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      items.push({
        ...product,
        qty: 1,
      });
    } else {
      items[productIndex].qty++;
    }
    console.log(items);
    const total = calcTotal(items);
    setCart({
      items,
      ...total,
    });
    Swal.fire({
      title: "Add To Cart!",
      icon: "success",
      draggable: true,
      footer: '<a href="/cartPage">Go To Cart Page</a>',
    });
  };

  const removeFromCart = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        if (result.isConfirmed) {
          const { items = [] } = cart;
          const productIndex = items.findIndex(
            (item) => item.id === product.id
          );
          if (productIndex !== -1) {
            items.splice(productIndex, 1);
          }
          const total = calcTotal(items);
          setCart({
            items,
            ...product,
          });
        }
      }
    });
  };
  return (
    <GetCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </GetCartContext.Provider>
  );
}

export default GetCart;

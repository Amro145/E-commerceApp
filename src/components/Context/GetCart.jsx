import React, { useState } from "react";
import { GetCartContext } from "./AllContext";
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
  };

  const removeFromCart = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      items.splice(productIndex, 1);
    }
    const total = calcTotal(items);
    setCart({
      items,
      ...product,
    });
  };
  return (
    <GetCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </GetCartContext.Provider>
  );
}

export default GetCart;

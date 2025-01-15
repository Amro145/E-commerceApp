import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { GetAllProductsContetx } from "./AllContext";

function GetAllProducts(props) {
  const [products, SetProducts] = useState([]);
  useEffect(() => {
    const feax = async () => {
      // const data = await axios.get("https://api.escuelajs.co/api/v1/products");
      const data = await axios.get("https://dummyjson.com/products");

      SetProducts(data.data.products);
    };
    feax();
  }, []);

  return (
    <GetAllProductsContetx.Provider value={products}>
      {props.children}
    </GetAllProductsContetx.Provider>
  );
}

export default GetAllProducts;

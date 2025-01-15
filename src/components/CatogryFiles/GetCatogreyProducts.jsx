import React, { useContext, useEffect, useState } from "react";
import { GetCatogreyProductsContext, GetPathContext } from "../Context/AllContext";
import axios from "axios";
import ProudctsList from "../ProudctsFiles/ProudctsList";
function GetCatogreyProducts(props) {
  const [CatogreyProducts, setCatogreyProducts] = useState([]);
  useEffect(() => {
    const catproducts = async () => {
      const data = await axios.get(
        `https://dummyjson.com/products/category/${props.props}`
      );
      setCatogreyProducts(data.data.products);
    };
    catproducts();
  }, [props.props]);
  var data = CatogreyProducts;

  return (
    <>
      <GetCatogreyProductsContext.Provider value={data}>
        {props.children}
      </GetCatogreyProductsContext.Provider>
      <ProudctsList props={data} />
    </>
  );
}

export default GetCatogreyProducts;

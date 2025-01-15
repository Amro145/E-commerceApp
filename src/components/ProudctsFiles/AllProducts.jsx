import React, { useContext } from "react";
import { GetAllProductsContetx } from "../Context/AllContext";
import ProudctsList from "./ProudctsList";

function AllProducts() {
  const value = useContext(GetAllProductsContetx);
  return <ProudctsList props={value} />;
}

export default AllProducts;

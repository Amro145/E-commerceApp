import React, { useContext } from "react";
import ProudctsList from "../ProudctsFiles/ProudctsList";

import { useParams } from "react-router-dom";
import GetCatogreyProducts from "./GetCatogreyProducts";
import { GetCatogreyProductsContext } from "../Context/AllContext";

function CatogreyItems() {
  var params = useParams();
  var Cat = useContext(GetCatogreyProductsContext);

  return (
    <>
      <GetCatogreyProducts props={params.catname} />
    </>
  );
}

export default CatogreyItems;

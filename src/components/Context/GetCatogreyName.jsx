import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { GetCatogreyNameContext } from "./AllContext";

function GetCatogreyName(props) {
  const [CatogreyName, setCatogreyName] = useState([]);
  useEffect(() => {
    const catName = async () => {
      const data = await axios.get("https://dummyjson.com/products/categories");

      setCatogreyName(data.data);
    };
    catName();
  }, []);

  return (
    <GetCatogreyNameContext.Provider value={CatogreyName}>
      {props.children}
    </GetCatogreyNameContext.Provider>
  );
}

export default GetCatogreyName;

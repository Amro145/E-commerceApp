import React, { useEffect, useState } from "react";
import { GetCommentsContext } from "./AllContext";
import axios from "axios";

function GetComments(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const feax = async () => {
      const data = await axios.get("https://dummyjson.com/comments");
      setComments(data.data.comments);
    };
    feax();
  }, []);

  return (
    <GetCommentsContext.Provider value={comments}>
      {props.children}
    </GetCommentsContext.Provider>
  );
}

export default GetComments;

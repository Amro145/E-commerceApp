import React, { useContext } from "react";
import { GetCommentsContext } from "../Context/AllContext";

function Comments() {
  const value = useContext(GetCommentsContext);
  return (
    <>
      {value.map((e) => {
        <div>{e.id}</div>;
      })}
    </>
  );
}

export default Comments;

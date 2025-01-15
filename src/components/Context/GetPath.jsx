import React from "react";
import { GetPathContext } from "./AllContext";
function GetPath(props) {
    const path = props.catname
  return <GetPathContext.Provider value={path}>{props.children}</GetPathContext.Provider>;
}

export default GetPath;

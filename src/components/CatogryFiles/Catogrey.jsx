import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { GetCatogreyNameContext } from "../Context/AllContext";
function Catogrey() {
  const value = useContext(GetCatogreyNameContext);
  const CatogreyName = value.splice(0, 5);

  return (
    <div className="flex justify-center mb-5">
      {CatogreyName.map((e) => {
        return (
          <div key={e.slug}>
            <ButtonGroup variant="outlined" aria-label="Basic button group ">
              <Button>
                <Link to={`/products/${e.slug}`}>{e.slug}</Link>
              </Button>
            </ButtonGroup>
          </div>
        );
      })}
    </div>
  );
}

export default Catogrey;

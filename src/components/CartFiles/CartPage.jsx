import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GetCartContext } from "../Context/AllContext";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";

export default function CartPage() {
  const { cart, removeFromCart } = React.useContext(GetCartContext);
  console.log(cart);

  const { items = [] } = cart;
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>image</TableCell>
              <TableCell>title</TableCell>
              <TableCell>qty</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <img
                    className="w-20 h-20 rounded"
                    src={item.images[0]}
                    alt="Extra small avatar"
                  />
                </TableCell>
                <TableCell> {item.brand}</TableCell>
                <TableCell> {item.qty}</TableCell>
                <TableCell> $ {item.price}</TableCell>
                <TableCell> $ {item.price * item.qty}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeFromCart(item)}
                  >
                    Delete
                  </Button>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div> $ {cart.cartTotal}</div>
    </>
  );
}

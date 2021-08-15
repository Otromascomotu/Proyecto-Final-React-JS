import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import cart from "./cart.jpg";

export const Carrito = () => {
  const { cartlength } = useContext(CartContext);
  //console.log("Valor de total en widget");
  //console.log("Loading Cartwidget");
  return (
    <Nav.Link href="#">
      {" "}
      Cantidad de items en carrito :{cartlength() > 0 && cartlength()}
      <Link to={"/cart"}>
        <img src={cart} alt="logo" width="35"></img>{" "}
      </Link>
    </Nav.Link>
  );
};

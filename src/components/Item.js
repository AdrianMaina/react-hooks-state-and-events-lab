import { useState } from "react";
import React from "react";

function Item({ name, category }) {
const[cart, addCart]=useState(false)
const toggleCart = ()=>{
  addCart(prevValue=>!prevValue)
}

const Whatcart = cart ? "in-cart":""



  return (
    <li className={Whatcart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{cart? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;

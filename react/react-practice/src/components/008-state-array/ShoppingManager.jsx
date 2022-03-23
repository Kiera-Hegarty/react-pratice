import { useState } from "react";
import Basket from "./Basket.jsx";

const ShoppingManager = () => {
  
  const [data, setData] = useState([]);

  const [order, setOrder] = useState({}); 

  const addToBasket = (o) => {
    setData((currentData) => {
      return [...currentData, o]; 
    });
    setOrder({}); 
  };

  const setOrderObj = (event) => {
      const {name, value} = event.target;
      setOrder((currentObj) => ({
          ...currentObj, [name] : value,
      }));
  };

  return (
    <>
        <h1> Welcome to the shop! </h1>
        <input type="text" name="item" onChange={setOrderObj} value={order.item} placeholder="Enter item name"/>
        <input type="number" name="quantity" onChange={setOrderObj} value={order.quantity} placeholder="Enter item quantity"/>
        <button type="button" onClick={() => {addToBasket(order)}}> Add to basket! </button>
        <Basket data={data} />
    </>
  );
};

export default ShoppingManager;
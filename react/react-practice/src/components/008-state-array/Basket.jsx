const Basket = ({ data }) => {
    if (data.length === 0) {
      return <h2> Add an order to the array! </h2>;
    } else {
      return (
        <div>
          {data.map((order, key) => {
            return (
              <>
                <h2> Order: {order.item}</h2>
                <h3> Quantity: {order.quantity}</h3>
                <h3> OrderID: {key} </h3>
                <br></br>
              </>
            );
          })}
        </div>
      );
    }
  };
  
  export default Basket;

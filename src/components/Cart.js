import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems, removeItem }) {
  let cartTotal = cartItems
    .map((itemData) => itemData.price * itemData.quantity)
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    console.log(cartItems);
  }, []);

  return (
    <div>
      {cartItems.map((itemData) => {
        let { id, name, price, imgsrc, quantity } = itemData;
        return (
          <div key={id}>
            <Link to={`/shop/${id}`}>
              <div>{name}</div>
              <img src={imgsrc} />
              <div>{quantity} on cart</div>
              <div>$ {price}</div>
            </Link>
            <button onClick={() => removeItem(itemData)}>
              Remove one from cart
            </button>
          </div>
        );
      })}
      <div>Total in cart: {cartTotal}</div>
    </div>
  );
}

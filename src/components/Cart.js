import { useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems, removeItem }) {
  let cartTotal = cartItems
    .map((itemData) => itemData.price * itemData.quantity)
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    console.log(cartItems);
  }, []);

  return (
    <div id="cart-wrapper">
      <h2>Your shopping cart</h2>
      {cartItems.map((itemData) => {
        let { id, name, price, imgsrc, quantity } = itemData;
        return (
          <div key={id} className="cart-item">
            <div className="cart-item-img">
              <img src={imgsrc} />
            </div>
            <div className="cart-item-details">
              <div>
                <Link to={`/shopping-cart/shop/${id}`}>
                  <div>{name}</div>
                </Link>
                <div>$ {price}</div>
                <div className="text-primary">{quantity} on cart</div>
              </div>

              <div className="cart-item-controls">
                <button
                  onClick={() => removeItem(itemData)}
                  className="btn btn-secondary"
                >
                  <AiOutlineDelete />
                  Remove one from cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div id="cart-status">
        {cartItems.length > 0 ? (
          <div id="cart-total">
            Total in cart: $ {Math.round(cartTotal * 100) / 100}
            <button id="payment-btn" className="btn btn-success">
              Make payment
            </button>
          </div>
        ) : (
          'Cart empty.'
        )}
      </div>
    </div>
  );
}

import { useEffect } from 'react';
import { AiOutlinePlusCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import shopItems from '../data.js';

export default function Item({ match, addItem }) {
  let { itemID } = match.params;
  let itemData = shopItems.find((shopItem) => shopItem.id === itemID);
  let { id, name, price, imgsrc } = itemData;

  useEffect(() => {}, []);

  return (
    <div id="display-page">
      <div className="display-image">
        <img src={imgsrc} />
      </div>
      <div className="display-main">
        <div className="display-details">
          <div>{name}</div>
          <div>$ {price}</div>
        </div>

        <div className="display-controls">
          <button onClick={() => addItem(itemData)} className="btn btn-primary">
            <AiOutlinePlusCircle />
            Add to cart
          </button>
          <Link to="/shopping-cart/cart">
            <button className="btn btn-secondary">
              <AiOutlineShoppingCart />
              Payout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

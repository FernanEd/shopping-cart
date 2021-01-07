import { useEffect } from 'react';
import shopItems from '../data.js';

export default function Item({ match, addItem }) {
  let { itemID } = match.params;
  let itemData = shopItems.filter((shopItem) => shopItem.id === itemID)[0];
  let { id, type, price, color, imgsrc } = itemData;

  useEffect(() => {}, []);

  return (
    <div key={id}>
      <div>{`${color} ${type}`}</div>
      <img src={imgsrc} />
      <div>{`$ ${price}`}</div>
      <button onClick={() => addItem(itemData)}>Add to cart</button>
    </div>
  );
}

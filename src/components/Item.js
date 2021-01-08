import { useEffect } from 'react';
import shopItems from '../data.js';

export default function Item({ match, addItem }) {
  let { itemID } = match.params;
  let itemData = shopItems.find((shopItem) => shopItem.id === itemID);
  let { id, name, price, imgsrc } = itemData;

  useEffect(() => {}, []);

  return (
    <div>
      <div>{name}</div>
      <img src={imgsrc} />
      <div>$ {price}</div>
      <button onClick={() => addItem(itemData)}>Add to cart</button>
    </div>
  );
}

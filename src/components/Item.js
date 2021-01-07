import { useEffect } from 'react';
import shopItems from '../data.js';

export default function Item({ match }) {
  let { itemID } = match.params;
  let itemData = shopItems.filter((shopItem) => shopItem.id === itemID)[0];

  useEffect(() => {
    console.log(itemData);
  }, []);

  return <div>Woooooooooooooooooooooojo</div>;
}

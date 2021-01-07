import { useEffect, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import shopItems from '../data.js';
import ShopNav from './ShopNav.js';

export default function Shop() {
  const [tab, setTab] = useState('sweater');
  const [displayedItems, setDisplayedItems] = useState(shopItems);

  const changeTab = (e) => {
    setTab(e.target.id);
  };

  useEffect(() => {
    setDisplayedItems(shopItems.filter((item) => item.type === tab));
  }, [tab]);

  return (
    <div>
      Shop
      <ShopNav changeTab={changeTab} />
      <div>
        Items {tab}
        {displayedItems.map((itemData) => {
          let { id, type, price, color, imgsrc } = itemData;
          return (
            <div key={id}>
              <Link to={`/shop/${id}`}>
                <div>{`${color} ${type}`}</div>
                <img src={imgsrc} />
                <div>{`$ ${price}`}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

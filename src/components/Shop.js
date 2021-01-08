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
      <ShopNav changeTab={changeTab} />
      <div className="shop-wrapper">
        {displayedItems.map((itemData) => {
          let { id, name, price, imgsrc } = itemData;
          return (
            <div key={id} className="shop-item">
              <Link to={`/shopping-cart/shop/${id}`}>
                <div className="shop-item-title">{name}</div>
                <img src={imgsrc} />
                <div className="shop-item-price">$ {price}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

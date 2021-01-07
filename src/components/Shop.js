import { useEffect } from 'react';
import '../data.js';
import shopItems from '../data.js';

export default function Shop() {
  let { sweaters } = shopItems;

  useEffect(() => {
    console.log(sweaters);
  }, []);

  return (
    <div>
      Shop
      <div>
        Items
        {sweaters.map((sweater) => (
          <div>
            {sweater.color} <img src={sweater.imgsrc} />
          </div>
        ))}
      </div>
    </div>
  );
}

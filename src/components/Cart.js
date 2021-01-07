import { Link } from 'react-router-dom';

export default function Cart({ cartItems }) {
  return (
    <div>
      {cartItems.map((itemData) => {
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
  );
}

import { Link } from 'react-router-dom';

export default function Navbar({ itemsInCart }) {
  return (
    <nav>
      <div>{itemsInCart()} items in cart</div>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}

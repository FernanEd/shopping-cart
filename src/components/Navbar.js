import { Link } from 'react-router-dom';

export default function Navbar({ cartItems }) {
  return (
    <nav>
      {cartItems ? `${cartItems} items in cart` : '0 items in cart'}
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

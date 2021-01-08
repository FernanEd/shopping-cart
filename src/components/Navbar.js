import { Link } from 'react-router-dom';

import {
  AiFillHome,
  AiFillQuestionCircle,
  AiOutlineQuestionCircle,
  AiOutlineShop,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

export default function Navbar({ getItemsInCart }) {
  let itemsInCart = getItemsInCart();

  return (
    <div id="header">
      <nav id="main-nav" className="container">
        <div className="nav-logo">Unlicensed Shop</div>

        <div>
          <ul className="nav-ul">
            <Link to="/shopping-cart/">
              <li className="nav-item">
                <AiFillHome />
                Home
              </li>
            </Link>
            <Link to="/shopping-cart/shop">
              <li className="nav-item">
                <AiOutlineShop />
                Shop
              </li>
            </Link>
            <Link to="/shopping-cart/about">
              <li className="nav-item">
                <AiFillQuestionCircle />
                About
              </li>
            </Link>
            <Link to="/shopping-cart/cart">
              <li className="nav-item">
                <AiOutlineShoppingCart />
                Cart {itemsInCart ? `(${itemsInCart})` : null}
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import Aboutpage from './components/Aboutpage';
import Item from './components/Item';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';

export default function App() {
  let [cartItems, setCartItems] = useState([]);

  const getItemsInCart = () => {
    return cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  };

  const addItem = (item) => {
    let itemExists = cartItems.find((cartItem) => cartItem.id === item.id);

    //If item exists, just increase its quantity, else add it
    if (itemExists) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...itemExists, quantity: itemExists.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (item) => {
    let itemToRemove = cartItems.find((cartItem) => cartItem.id === item.id);

    //If item has quantity of 1, remove it, else, decrease its quantity
    if (itemToRemove.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  useEffect(async () => {}, []);

  return (
    <div id="content">
      <BrowserRouter>
        <Navbar getItemsInCart={getItemsInCart} />
        <Switch>
          <div className="container">
            <Route
              exact
              path="/shopping-cart/"
              render={(props) => <Homepage {...props} />}
            />
            <Route
              exact
              path="/shopping-cart/shop"
              render={(props) => <Shop {...props} />}
            />
            <Route
              exact
              path="/shopping-cart/about"
              render={(props) => <Aboutpage {...props} />}
            />
            <Route
              path="/shopping-cart/shop/:itemID"
              render={(props) => <Item {...props} addItem={addItem} />}
            />
            <Route
              exact
              path="/shopping-cart/cart"
              render={(props) => (
                <Cart
                  {...props}
                  cartItems={cartItems}
                  removeItem={removeItem}
                />
              )}
            />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

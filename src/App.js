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

  const itemsInCart = () => {
    return cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  };

  const addItem = (item) => {
    let itemExists = cartItems.find((cartItem) => cartItem.id === item.id);

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
    <div className="App">
      <BrowserRouter>
        <Navbar itemsInCart={() => itemsInCart()} />
        <Switch>
          <Route exact path="/" render={(props) => <Homepage {...props} />} />
          <Route exact path="/shop" render={(props) => <Shop {...props} />} />
          <Route
            exact
            path="/about"
            render={(props) => <Aboutpage {...props} />}
          />
          <Route
            path="/shop/:itemID"
            render={(props) => <Item {...props} addItem={addItem} />}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <Cart {...props} cartItems={cartItems} removeItem={removeItem} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

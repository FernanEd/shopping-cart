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

  const addItem = (item) => {
    let newItems = [...cartItems];
    newItems.push(item);
    setCartItems(newItems);
  };

  useEffect(async () => {}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartItems={cartItems.length} />
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
            render={(props) => <Cart {...props} cartItems={cartItems} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import Aboutpage from './components/Aboutpage';
import Item from './components/Item';
import { useEffect, useState } from 'react';

export default function App() {
  useEffect(async () => {}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:itemID" component={Item} />
          <Route path="/about" component={Aboutpage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

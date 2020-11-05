import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Products from './pages/Products';
import Cart from './pages/Cart';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/products' component={Products} />
        <Route exact path='/' component={ProductList} />
        <Route exact path='/cart'>
          <Cart/>
        </Route>

      </Switch>

    </React.Fragment>
  );
}

export default App;

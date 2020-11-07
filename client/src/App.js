<<<<<<< HEAD
import  {React, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
=======
import React,  {useState} from 'react';
import { Route, Switch } from 'react-router-dom';

>>>>>>> f33eeb784631372308b8b1e991f829125e470018
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Products from './pages/Products';
import Cart from './pages/Cart';
import CartContext from './utils/CartContext';


function App() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0.0);
  const [shipping, setShipping] = useState(0.0);
  const [total, setTotal] = useState(0.0);

  return (
    <React.Fragment>
      <CartContext.Provider value={{products,setProducts,subtotal,setSubtotal,shipping,setShipping,total,setTotal}}>
      <Navbar/>
      <Switch>
        <Route exact path='/products' component={Products} />
        <Route exact path='/' component={ProductList} />
        <Route exact path='/cart'>
          <Cart/>
        </Route>

      </Switch>
      </CartContext.Provider>
    </React.Fragment>
  );
}

export default App;

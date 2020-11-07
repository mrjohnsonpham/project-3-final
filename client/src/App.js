import React,  {useState} from 'react';
// import { Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Products from './pages/Products';
import Cart from './pages/Cart';
import CartContext from './utils/CartContext';
// kyle added 12-14
import Login from "./pages/Login";
import UserContext from "./utils/UserContext";
import Logout from "./pages/Logout";

import SignUp from "./pages/SignUp";

function App() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0.0);
  const [shipping, setShipping] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  // kyle added 22-23
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    // kyle added 26 and 29-30
    <Router>
    <React.Fragment>
      <CartContext.Provider value={{products,setProducts,subtotal,setSubtotal,shipping,setShipping,total,setTotal}}>
      <UserContext.Provider value={{email, setEmail, loggedIn, setLoggedIn}}>
      <div>
      <Navbar/>
      <Switch>
        <Route exact path='/products' component={Products} />
        <Route exact path='/' component={ProductList} />
        <Route exact path='/cart'>
          <Cart/>
          {/* <Route exact path="/products/:productid">
              <Detail />
            </Route> */}
        </Route>
        {/* kyle added 39-47*/}
        <Route exact path="/login">
              <Login />
            </Route>
        <Route exact path="/signup">
              <SignUp />
            </Route>
        <Route exact path="/logout">
              <Logout />
            </Route>
      </Switch>
      {/* kyle added 47-48 and 51*/}
      </div>
      </UserContext.Provider>
      </CartContext.Provider>
    </React.Fragment>
    </Router>
  );
}

export default App;

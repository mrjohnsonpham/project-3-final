import React,  {useState,useEffect}  from 'react'; //useContext, useRef
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
// import axios from 'axios';
import CheckoutModalBody from './components/ModalBody';
import CheckoutModal from './components/CheckoutModal';
import Details from './components/Details';
import { Button } from 'react-bootstrap';
// import {itemDetail1} from './components/ProductItem'


function App() {
  // console.log(itemDetail1);
  const [modalShow, setModalShow] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0.0);
  const [shipping, setShipping] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const [productDetail, setProductDetail] = useState({

    productName:"test", 
    isAvailable:"test2", 
    quantity:"0",
    price:"0.00", 
    shippingCost:"0.00", 
    image:"test4", 
    _id:"_id",
    description:"description"

  });
  // kyle added 22-23
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  
  const addProductToCart = (productName, isAvailable, quantity, price, shippingCost, image, _id) => {
    // do the math for the cart subtotal, total, shipping for the entire app and database
    let fullCart = [...products, {
      productName, isAvailable, quantity, price, shippingCost, image, _id
    }];
    setProducts(fullCart);
    setShipping(shipping + shippingCost);
    setSubtotal(subtotal + price * quantity);
    setTotal(total + shipping + shippingCost + price * quantity);
    // add to database cart
    // API.callhere to add product
  }

  const addProductDetails = (productName, isAvailable, quantity, price, shippingCost, image, _id, description, inCart, itemNumber) => {
    // do the math for the cart subtotal, total, shipping for the entire app and database
    let pDetail = {
      productName:productName, 
      isAvailable:isAvailable, 
      quantity:quantity,
      price:price, 
      shippingCost:shippingCost, 
      image:image, 
      _id:_id,
      description:description,
      inCart:inCart,
      itemNumber:itemNumber
    };
    console.log(pDetail);
    setProductDetail(pDetail);
    
    // add to database cart
    // API.callhere to add product
  }

 
  const refreshCartHelper = (productList) =>{
    console.log("refresh Cart");
    let shipping = 0;
    let subtotal = 0;
    let total = 0;
    setShipping(0);
    setSubtotal(0);
    setTotal(0);
    productList.forEach( product => {
      setShipping(shipping + product.shippingCost);
      setSubtotal(subtotal + product.price * product.quantity);
      setTotal(total + shipping + product.shippingCost + product.price * product.quantity);
    })
  }
  const refreshCart = () => {
    // API.getCart... to refresh the cart state that is already global and updates the entire app and sync with database
    // can be called anywhere as needed, but in most cases, you call it in App... with global the entire app is updated
    let shipping = 0.00;
    let subtotal = 0.00;
    let total = 0.00;
    
    products.forEach( product => {
      setShipping(shipping + product.shippingCost);
      setSubtotal(subtotal + product.price * product.quantity);
      setTotal(total + shipping + product.shippingCost + product.price * product.quantity);
    })
  }

  // const refreshCart = () => {
  //   // API.getCart... to refresh the cart state that is already global and updates the entire app and sync with database
  //   // can be called anywhere as needed, but in most cases, you call it in App... with global the entire app is updated
  //   refreshCartHelper(products);
    
  // }

  const removeProductFromCart = (event,productid)=> {
    let changeProducts = products.filter( product => product._id !== productid);
    console.log(changeProducts);
    setProducts(changeProducts);
    refreshCartHelper(changeProducts);
  }

  useEffect( () => {
    // uses the react life cycle to update the page's state or context,
    // with global context it updates the entire app
    // refreshCart();
  }, []);


  return (
    

    // kyle added 26 and 29-30
    <Router>
    <React.Fragment>
      <CartContext.Provider value={{products,setProducts,subtotal,setSubtotal,shipping,setShipping,total,setTotal,refreshCart,addProductDetails, addProductToCart, productDetail, setProductDetail, removeProductFromCart, refreshCartHelper}}>
      <UserContext.Provider value={{email, setEmail, loggedIn, setLoggedIn}}>
      <div>
      <Navbar/>
      <Switch>
        <Route exact path='/products' component={Products} />
        <Route exact path='/' >
        <ProductList  />
       </Route>
        <Route exact path='/cart'>
          <Cart
            checkoutButton = {
              <Button className="btn btn-lg btn-block btn-success text-uppercase" variant="primary" onClick={() => setModalShow(true)}>
              Checkout
              </Button>
            }
          />
          <CheckoutModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            modalBody={<CheckoutModalBody />}
          />

        </Route>
          <Route exact path='/details' component={Details} >
              <Details pDetail={productDetail}/>
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
        <Route exact path="/checkoutTest">
            <CheckoutModalBody />
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
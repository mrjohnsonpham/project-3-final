import {createContext} from 'react';

const CartContext = createContext({
    products: [], // name, availability, quantity, price, image, productid?
    setProducts: () => {}, 
    subtotal: 0.0,
    setSubtotal: () => {},
    shipping: 0.00,
    setShipping: () => {},
    total: 0.0,
    setTotal: () => {},

    name:"",
    setName : () => {},
    availability: true,
    setAvailability: () => {},
    quantity: 0,
    setQuantity: () => {},
    price:0.00,
    setPrice: () => {},
    image:"",
    setImage: () => {},
    productid:0,
    setProductid: () => {},






    addProductToCart: () => {},
    refreshCart: () => {}

});

export default CartContext;

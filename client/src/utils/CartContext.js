import {createContext} from 'react';

const CartContext = createContext({
    products: [], // name, availability, quantity, price, image, productid?
    setProducts: () => {}, 
    subtotal: 0.0,
    setSubtotal: () => {},
    shipping: 0.0,
    setShipping: () => {},
    total: 0.0,
    setTotal: () => {}
});

export default CartContext;

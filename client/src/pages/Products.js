import React, { useEffect, useState } from "react";
// import ProductItem from '../components/ProductItem';
// import { Col, Row, Container } from "../components/Grid";
// import { ProductConsumer } from '../context';
import { List, ListItem } from "../components/List";
import API from '../utils/API';


function Products() {
    // Setting our component's initial state
    const [products, setProducts] = useState([]);

    // Load all products and store them with setProducts
    useEffect(() => {
        loadProducts()
    }, []);

    // Loads all products and sets them to products
    function loadProducts() {
        API.getProducts()
            .then(res =>
                setProducts(res.data)
            )
            .catch(err => console.log(err));
    };


    return (
        <div>
            {products.length ? (
                <List>
                    {products.map(product => {
                        return (
                            <ListItem key={product._id}>
                                <a href={"/product/" + product._id}>
                                    <h1>{product.productName}</h1>
                                </a>
                                <h2>${product.price}</h2>
                                <p>{product.description}</p>
                                <p>Item Number: {product.itemNumber}</p>
                                <p>{product.image}</p>
                                <img src={product.image} alt=""></img>
                            </ListItem>
                        );
                    })}
                </List>
            ) : (<h3>No Results to Display</h3>)}
        </div>
    );
}


export default Products;

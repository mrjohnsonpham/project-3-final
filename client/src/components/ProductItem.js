import React, {  useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/API';
import './style.css'

function ProductItem(props) {

    const [products, setProducts] = useState([])

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

    const handleAddToCart = (event) => {
        const thisElement =event.target;
      
        const price = thisElement.getAttribute("data-price");
        console.log(price);
        // value.addToCart(id)
         // value.openModal(id);
     };


    // const { title, img, price, inCart, id } = props.product

    return (

        <div className="row">
            {products.map(product => (
            <div className="col-sm-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    {/* <ProductConsumer> */}
                    {/* <Products> */}

                    {/* <div onClick={() => { value.handleDetail(id); }} className="img-container p-5"> */}
                    <div className="img-container p-5">
                        <Link to='/details'>
                            <img src={product.image} alt={product.productName} className="card-img-top" />
                        </Link>
                        <button className="cart-btn"  disabled={product.inCart ? true : false} onClick={handleAddToCart}>
                            {product.inCart ? (<p className="text-capitalize mb-0" disabled data-product={product._id} data-price={product.price.toString()}>In Cart</p>) : (<p className="text-capitalize mb-0" data-product={product._id} data-price={product.price.toString()}>Add to Cart <i className="fa fa-cart-plus" /></p>)}
                        </button>
                    </div>

                    {/* </Products> */}
                    {/* </ProductConsumer> */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-serl-center mb-0">
                            {product.productName}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">${product.price}</span>
                        </h5>
                    </div>
                </div>
        </div>
            ))}
        </div>
    )
}


export default ProductItem;

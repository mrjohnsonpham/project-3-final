import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ProductConsumer } from '../context';
import API from '../utils/API';
import Products from '../pages/Products'
import './style.css'

function ProductItem(props) {

    const [products, setProducts] = useState([])

    // Load all products and store them with setProducts
    // useEffect(() => {
        loadProducts()
    // }, [])

    // Loads all products and sets them to products
    function loadProducts() {
        API.getProducts()
            .then(res =>
                setProducts(res.data)
            )
            .catch(err => console.log(err));
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
                        <button className="cart-btn" disabled={product.inCart ? true : false} onClick={() => {
                            // value.addToCart(id)
                            // value.openModal(id);
                        }}>
                            {product.inCart ? (<p className="text-capitalize mb-0" disabled>In Cart</p>) : (<p className="text-capitalize mb-0">Add to Cart <i className="fa fa-cart-plus" /></p>)}
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

// ProductItem.propTypes = {
//     product: PropTypes.shape({
//         title: PropTypes.string,
//         img: PropTypes.string,
//         price: PropTypes.number,
//         inCart: PropTypes.bool
//     }).isRequired
// }

const ProductItemWrapper = styled.div`
.card {
    border-color:transparent;
    transition:all .2s linear;
    overflow:hidden;

}

.card-footer {
    background:transparent;
    border-top: transparent;
    transition:all .2s linear;
}

&:hover {
    .card{
        border:0.06rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.05);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}

.img-container{
    position:relative;
    overflow:hidden;
}

.card-img-top {
    transition: all .3s ease-in-out;
}
.img-container:hover .card-img-top{
transform:scale(1.2);
}

.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    color:var(--mainWhite);
    border:none;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all .3s ease-in-out;
}
.img-container:hover .cart-btn{
    transform:translate(0,0);
}
.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
`
export default ProductItem

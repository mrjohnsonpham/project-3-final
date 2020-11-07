import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/API';
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
        <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            {products.map(product => (
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
            ))}
        </div>
    )
}


export default ProductItem;

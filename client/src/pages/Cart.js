import React, { Fragment, useContext } from "react";
import CartContext from '../utils/CartContext'
// import API from '../utils/API';


function Cart() {
    // const [allProducts, setAllProducts] = useState([]);

    // useEffect(() => {
    //     loadProducts();
    // });


    // function loadProducts() {
    //     API.getProducts()
    //         .then(res =>
            
    //             setAllProducts(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };
    // console.log("All products: " + res.data)


    // const { total, subtotal, shipping, products, setProducts, setShipping, setSubtotal, setTotal } = useContext(CartContext);
    const { total, subtotal, shipping, products, setProducts, setShipping, setSubtotal, setTotal,addProductToCart,refreshCart } = useContext(CartContext);
    
    // function cartBuilder() {
    //     const products = allProducts.filter(allProduct => {
    //         console.log("hello!");

    //     });

    //     return (products)

    // }
    // cartBuilder();

    // cartBuilder();
    // allProducts.filter(allProducts => {
    //     allProducts.inCart ? products : ("")
    // }) 


    const handleCoolProductClick = function (event) {
        console.log(event.target);
        addProductToCart("joes", "in-stock", 1, 5.00, 1.00, "https://joesbakery.com/wp-content/uploads/2016/01/JOES-50thedit332.jpg", "1")
        
    }

    const handleChange = (event, index) =>{
        // api call to ipdate quantity
        console.log(event.target);
        console.log(event.target.value);
        const changedProduct = [...products];
        changedProduct[index].quantity = event.target.value;
        setProducts(changedProduct);
        // refreshCart();
    }
    return (
        <Fragment>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">My Marketplace</h1>
                    <button onClick={handleCoolProductClick}>Add a cool product here!!!</button>
                </div>
            </section>
            <div className="container mb-4">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Products</th>
                                        <th scope="col">Available</th>
                                        <th scope="col" className="text-center" id="quantity-label">Quantity</th>
                                        <th scope="col" className="text-right">Price</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) =>
                                        <tr key={"product-" + index}>
                                            <td> <img className="img-fluid" src={product.image} alt={product.name} /></td>
                                            <td>{product.productName}</td>
                                            <td>{product.isAvailable}</td>
                                            <td><input className="form-control" aria-describedby="quantity-label" type="text" onChange={ (event) => handleChange(event, index)} value={product.quantity} /></td>
                                            <td className="text-right">${product.price}</td>
                                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button> </td>
                                        </tr>

                                    )}
                                    
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Sub-Total</td>
                                        <td className="text-right">${Number(subtotal).toFixed(2)} USD</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Shipping</td>
                                        <td className="text-right">${Number(shipping).toFixed(2)} USD</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><strong>Total</strong></td>
                                        <td className="text-right"><strong>${Number(total).toFixed(2)} USD</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="row">
                            <div className="col-sm-12  col-md-6">
                                <button className="btn btn-block btn-light">Continue Shopping</button>
                            </div>
                            <div className="col-sm-12 col-md-6 text-right">
                                <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    )
}

export default Cart;
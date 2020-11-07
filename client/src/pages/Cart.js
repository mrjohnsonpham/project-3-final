import React, { Fragment, useContext, } from "react";
import CartContext from '../utils/CartContext';


function Cart() {
    const { total, subtotal, shipping, products, setProducts, setShipping, setSubtotal, setTotal } = useContext(CartContext);
    const addProduct = function (name, availability, quantity, price, shippingCost, image, productid) {
        let fullCart = [...products, {
            name, availability, quantity, price, shippingCost, image, productid
        }];
        setProducts(fullCart);
        setShipping(shipping + shippingCost);
        setSubtotal(subtotal + price * quantity);
        setTotal(total + shipping + shippingCost + price * quantity);
    }
    const handleCoolProductClick = function (event) {
        console.log(event.target);
        addProduct("joes", "in-stock", 1, 5.00, 1.00, "https://joesbakery.com/wp-content/uploads/2016/01/JOES-50thedit332.jpg", "1")

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
                                            <td>{product.name}</td>
                                        </tr>

                                    )}
                                    {/* <tr>
                                        <td><img src="https://dummyimage.com/50x50/55595c/fff" alt="sweater" /> </td>
                                        <td>Premium Lover and Friends Hoodie</td>
                                        <td>In stock</td>
                                        <td><input className="form-control" aria-describedby="quantity-label" type="text"
                                            value="1" /></td>
                                        <td className="text-right">$75.00 USD</td>
                                        <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i>
                                        </button> </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://dummyimage.com/50x50/55595c/fff" alt="pants" /> </td>
                                        <td>Fancy Black Lounge Pants</td>
                                        <td>In stock</td>
                                        <td><input className="form-control" aria-describedby="quantity-label" type="text"
                                            value="1" /></td>
                                        <td className="text-right">$70.00 USD</td>
                                        <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i>
                                        </button> </td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://dummyimage.com/50x50/55595c/fff" alt=" cargo pants" /> </td>
                                        <td> Premium Black Resort Cargo</td>
                                        <td>In stock</td>
                                        <td><input className="form-control" aria-describedby="quantity-label" type="text"
                                            value="1" /></td>
                                        <td className="text-right">$80.00 USD</td>
                                        <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i>
                                        </button> </td>
                                    </tr> */}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Sub-Total</td>
                                        <td className="text-right">${subtotal.toFixed(2)} USD</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Shipping</td>
                                        <td className="text-right">${shipping.toFixed(2)} USD</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><strong>Total</strong></td>
                                        <td className="text-right"><strong>${total.toFixed(2)} USD</strong></td>
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
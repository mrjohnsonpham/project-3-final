import React from 'react';   //{ Fragment }
import "./style.css";

function CheckoutModalBody() {
    return (
        <div id="checkoutDiv">
            <div className="checkoutRow">
                <div className="col-75">
                    <div className="checkoutContainer">
                        <form>
                            <div className="checkoutRow">
                                <div className="col-50">
                                    <h3>Billing Address</h3>
                                    <label className="checkoutLabel" for="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input className="checkoutInput" type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
                                    <label className="checkoutLabel" for="email"><i className="fa fa-envelope"></i> Email</label>
                                    <input className="checkoutInput" type="text" id="email" name="email" placeholder="john@example.com"></input>
                                    <label className="checkoutLabel" for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                    <input className="checkoutInput" type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
                                    <label className="checkoutLabel" for="city"><i className="fa fa-institution"></i> City</label>
                                    <input className="checkoutInput" type="text" id="city" name="city" placeholder="New York"></input>

                                    <div className="checkoutRow">
                                        <div className="col-50">
                                            <label className="checkoutLabel" for="state">State</label>
                                            <input className="checkoutInput" type="text" id="state" name="state" placeholder="NY"></input>
                                        </div>
                                        <div className="col-50">
                                            <label className="checkoutLabel" for="zip">Zip</label>
                                            <input className="checkoutInput" type="text" id="zip" name="zip" placeholder="10001"></input>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-50">
                                    <h3>Payment</h3>
                                    <label className="checkoutLabel" for="fname">Accepted Cards</label>
                                    <div className="icon-checkoutContainer">
                                        <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
                                        <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
                                        <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
                                        <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
                                    </div>
                                    <label className="checkoutLabel" for="cname">Name on Card</label>
                                    <input className="checkoutInput" type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                                    <label className="checkoutLabel" for="ccnum">Credit card number</label>
                                    <input className="checkoutInput" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                                    <label className="checkoutLabel" for="expmonth">Exp Month</label>
                                    <input className="checkoutInput" type="text" id="expmonth" name="expmonth" placeholder="September"></input>
                                    <div className="checkoutRow">
                                        <div className="col-50">
                                            <label className="checkoutLabel" for="expyear">Exp Year</label>
                                            <input className="checkoutInput" type="text" id="expyear" name="expyear" placeholder="2018"></input>
                                        </div>
                                        <div className="col-50">
                                            <label className="checkoutLabel" for="cvv">CVV</label>
                                            <input className="checkoutInput" type="text" id="cvv" name="cvv" placeholder="352"></input>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        <label className="checkoutLabel">
                            <input className="checkoutInput" type="checkbox" checked="checked" name="sameadr"></input> Shipping address same as billing
                        </label>
                        <input className="checkoutInput  checkoutBtn" type="submit" value="Continue to checkout" ></input>
                    </form>
                </div>
            </div>
            {/* Put Cart Component HERE */}

            {/* <div className="col-25">
                <div className="checkoutContainer">
                    <h4>Cart <span className="price" style={{color:"black"}}><i className="fa fa-shopping-cart"></i><b>4</b></span></h4>
                    <p><a className="checkoutLink" href="#">Product 1</a> <span className="price">$15</span></p>
                    <p><a className="checkoutLink" href="#">Product 2</a> <span className="price">$5</span></p>
                    <p><a className="checkoutLink" href="#">Product 3</a> <span className="price">$8</span></p>
                    <p><a className="checkoutLink" href="#">Product 4</a> <span className="price">$2</span></p>
                    <p>Total <span className="price" style={{color:"black"}}><b>$30</b></span></p>
                </div>
            </div> */}
            
        </div>
    </div>
    )
}

export default CheckoutModalBody

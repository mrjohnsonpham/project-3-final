import React, {useContext} from "react";
import './style.css'
import testImage from '../testImage.png';
import CartContext from "../utils/CartContext";

function Details(props) {
    let picture = testImage;
    const {
        addProductToCart,
        // refreshCart,
    } = useContext(CartContext);

    // const handleItemDetails =(event) =>{
    //     event.preventDefault();
    //     const thisElement = event.target;
    //     const price = parseFloat(thisElement.getAttribute("data-price"));
    //     const _id = thisElement.getAttribute("data-id");
    //     const name = thisElement.getAttribute("data-name");
    //     const availability = thisElement.getAttribute("data-available");
    //     const image = thisElement.getAttribute("data-image");
    //     const shipping = parseFloat(thisElement.getAttribute("data-shipping"));
    //     const description = thisElement.getAttribute("data-description");
    //     const inCart = thisElement.getAttribute("data-incart");
    //     const itemNumber = thisElement.getAttribute("data-itemnumber");
    //     console.log(price);
    //     console.log(_id);
    //     console.log(name);
    //     console.log(availability);
    //     console.log(shipping);
    //     console.log(availability);
    //     console.log(description);
    // }

    const handleAddToCart = (event) => {
        // if the user hits the button to add to cart, this function will fire
        event.preventDefault();
        const thisElement = event.target;
        const price = parseFloat(thisElement.getAttribute("data-price"));
        const _id = thisElement.getAttribute("data-id");
        const name = thisElement.getAttribute("data-name");
        const availability = thisElement.getAttribute("data-available");
        const image = thisElement.getAttribute("data-image");
        const shipping = parseFloat(thisElement.getAttribute("data-shipping"));

        console.log(price);
        console.log(_id);
        console.log(name);
        console.log(availability);
        console.log(shipping);
        console.log(availability);

        addProductToCart(name, availability, 1, price, shipping, image, _id);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-6 detailsLeft">
                    <h1 id="detailProductName" >{props.pDetail.productName}</h1>
                    <p id="detailDescription" >{props.pDetail.description}</p>
                    <img className="detailsImage" src={props.pDetail.image} alt={props.pDetail.image} />
                    {/* <img className="detailsImage" src={picture} alt="test" /> */}
                </div>
                <div className="col-sm-12 col-lg-6 detailsRight">
                    <h2>${props.pDetail.price}</h2>
                    <h4>{props.pDetail.isAvailable ? "In Stock" : "Out of Stock"}</h4>
                    <h3>inCart: {props.pDetail.inCart === true ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>}</h3>
                    <button
                        className="btn btn-primary"
                        // disabled={props.pDetail.inCart ? true : false}
                        onClick={handleAddToCart}
                    >
                        {props.pDetail.inCart === true ? (
                            <p
                            className="text-capitalize mb-0"
                            // disabled
                            data-product={props.pDetail._id}
                            data-price={props.pDetail.price.toString()}
                            >
                                In Cart
                            </p>
                        ) : (
                                <p
                                className="text-capitalize mb-0"
                                data-name={props.pDetail.productName}
                                data-image={props.pDetail.image}
                                data-available={props.pDetail.isAvailable}
                                data-id={props.pDetail._id}
                                data-shipping={props.pDetail.shippingCost}
                                data-price={props.pDetail.price}
                                data-description={props.pDetail.description}
                                >
                                    Add to Cart <i className="fa fa-cart-plus" />
                                </p>
                            )}
                    </button>
                </div>


            </div>


        </div>
    )
}


export default Details;